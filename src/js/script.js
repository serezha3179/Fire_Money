
        let faq = document.querySelectorAll('.FAQ__item');
        faq.forEach(item => {
            item.addEventListener('click',() => {
                if (!item.classList.contains('active')) {
                    faq.forEach(item => {
                      let a = item.querySelector('.FAQ__item-text')
                      item.classList.remove('active')
                    a.style.maxHeight = null;
                  })
                     item.classList.add('active')
                }else {
                     item.classList.remove('active');
                }
                let submenu = item.querySelector('.FAQ__item-text')   
            if (submenu.style.maxHeight) {
              submenu.style.maxHeight = null;
              
            } else {
              submenu.style.maxHeight = submenu.scrollHeight + "px";
              
            }
        })
        })


     
       
 
