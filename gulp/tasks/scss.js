import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import map from 'gulp-sourcemaps';
import cleanCss from 'gulp-clean-css';
import webpcss from 'gulp-webpcss';
import autoprefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import autoPrefixer from 'gulp-autoprefixer';
import gulpVersionNumber from 'gulp-version-number';

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev})
    .pipe(app.plugins.plumber(
          app.plugins.notify.onError({
            title: "SCSS",
            message: "Error: <%= error.message %>"
        })
    ))
    .pipe(app.plugins.replace(/@img\//g, '../img/'))
       .pipe(sass({
           outputStyle: 'expanded'
       }))
       .pipe(app.plugins.if(
        app.isBuild,
           groupCssMediaQueries()
       ))
       .pipe(app.plugins.if(
        app.isBuild,
           webpcss({
           webpClass: ".webp",
           noWebpClass: ".no-webp"
       })
       ))
       .pipe(app.plugins.if(
        app.isBuild,
           autoPrefixer({
           grid: true,
           overrideBrowserslist: ["last 3 version"],
           cascade: true
       })
       ))
       .pipe(app.plugins.if(
        app.isDev,
        map.write('../sourcemaps/')
    ))
       .pipe(app.gulp.dest(app.path.build.css))//раскомментировать если нужен не сжатый дубль файла
       .pipe(app.plugins.if(
        app.isBuild,
        cleanCss()
    ))
    .pipe(rename({
        extname: '.min.css'
    }))
       .pipe(app.gulp.dest(app.path.build.css))
       .pipe(app.plugins.browsersync.stream());
}