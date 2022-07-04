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
