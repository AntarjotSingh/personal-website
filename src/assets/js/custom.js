/*==================== MENU SHOW Y HIDDEN ====================*/
//alert("hello");
// var navMenu = document.getElementById('nav-menu'),
// navToggle = document.getElementById('nav-toggle'),
// navClose = document.getElementById('nav-close')

// /*===== MENU SHOW =====*/

//     if(navToggle){
//         navToggle.addEventListener('click', () =>{
//             navMenu.classList.add('show-menu')
//         })
//     }
/* Validate if constant exists */

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */


/*==================== REMOVE MENU MOBILE ====================*/

/*==================== ACCORDION SKILLS ====================*/

function addskills() {
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
  let itemClass = this.parentNode.className

  for(var i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close'
  }
  if(itemClass === 'skills__content skills__close'){
    this.parentNode.className = 'skills__content skills__open'
  }
}

skillsHeader.forEach((el) =>{
  el.addEventListener('click', toggleSkills)
})
}
/*==================== QUALIFICATION TABS ====================*/
function addqualificationtabs() {
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
  tab.addEventListener('click', () =>{
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent =>{
      tabContent.classList.remove('qualification__active')
    })
    target.classList.add('qualification__active')

    tabs.forEach(tab =>{
      tab.classList.remove('qualification__active')
    })
    tab.classList.add('qualification_active')
  })
})
}
/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 
