/*
const buttons = document.querySelectorAll('.button');
const body = document.querySelectorAll('body');

let unlock = true;

const timeout = 800;

if (buttons.length > 0) {
    buttons.forEach(item => {
        item.addEventListener('click',function(e) {
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
        })
    })
};
const popupCloseIcon = document.querySelectorAll('.close__popup');
if (popupCloseIcon.length > 0) {
popupCloseIcon.forEach(item => {
    item.addEventListener('click', function(e) {
       popupClose.item.closest('.popup');
       e.preventDefault();
    })
})
}
*/

let modal = document.querySelector('.popup');
let modalClose = document.querySelector('.popup__close');
let btn = document.querySelector('.header__button');
let body = document.querySelector('body');
let modalBody = document.querySelector('.popup__body')
let paddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + "px";
let button = document.querySelectorAll('.button');

btn.addEventListener('click' , (e)=> {
   e.preventDefault();
   modal.classList.add('open');
   body.style.overflow = "hidden"
   body.style.paddingRight = paddingValue;
});
modalClose.addEventListener('click' , (e) => {
    e.preventDefault();
    modal.classList.remove('open');
    body.style.overflow = "";
    body.style.paddingRight = "";
});
modal.addEventListener('click', (e) => {
   if (e.target === modalBody) {
    modal.classList.remove('open');
    body.style.overflow = "";
    body.style.paddingRight = "";
   }
});

button.forEach(item => {
    item.addEventListener('click' , (e)=> {
        e.preventDefault();
        modal.classList.add('open');
        body.style.overflow = "hidden"
        body.style.paddingRight = paddingValue;
     });
     modalClose.addEventListener('click' , (e) => {
         e.preventDefault();
         modal.classList.remove('open');
         body.style.overflow = "";
         body.style.paddingRight = "";
     });
     modal.addEventListener('click', (e) => {
        if (e.target === modalBody) {
         modal.classList.remove('open');
         body.style.overflow = "";
         body.style.paddingRight = "";
        }
     })
} )
