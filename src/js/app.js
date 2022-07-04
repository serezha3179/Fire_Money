import * as flsFunctions from './modules/functions.js';
import './script.js';
import './range.js';
import './modal_window.js';

flsFunctions.testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
}); 


