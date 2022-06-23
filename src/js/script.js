let faq = document.querySelectorAll('.FAQ__item');console.log(faq)
faq.forEach(item => {
    item.addEventListener('click',() => {
        // item.classList.toggle('active')
        if (!item.classList.contains('active')) {
            faq.forEach(item => {
            item.classList.remove('active')
            let a = item.querySelector('.FAQ__item-text')
            a.style.maxHeight = null;
            // a.style.display = "none";
          })
             item.classList.add('active')
        }else {
             item.classList.remove('active')
        }
        let submenu = item.querySelector('.FAQ__item-text')   
    if (submenu.style.maxHeight) {
      // submenu.style.display = "none";
      submenu.style.maxHeight = null;
      
    } else {
      // submenu.style.display = "block";
      submenu.style.maxHeight = submenu.scrollHeight + "px";
      
    }
})
})

/*
var acc = document.getElementsByClassName("FAQ__item-title");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}*/