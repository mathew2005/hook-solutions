'use strict'



let btnLeft = document.querySelector('.btn-left');
let btnRight = document.querySelector('.btn-right');
let testimonials = document.querySelectorAll('.testimonials');
let testimonial1 = document.querySelector('.testimonial-1')
let testimonial2 = document.querySelector('.testimonial-2')
let testimonial3 = document.querySelector('.testimonial-3')
let copyrightTime = document.querySelector('.copyright-time');
let toggleContainer = document.querySelector('.toggle-container');
let toggleBtn = document.querySelector('.toggle-btn');
let menu = document.querySelector('.menu');
let closeMenu = document.querySelector('.close-menu');
let navLinks = document.querySelectorAll('.link-container a')
let linkContainer = document.querySelector('.link-container')
let colorContainer = document.querySelector('.color-container')
let registerBtn = document.querySelector('.register');
let menuContainer = document.querySelector('.menu-container');


//time for copyright
copyrightTime.textContent = new Date().getFullYear();

//from hex to hsl




  

//light mode
function lightMode(){
    document.documentElement.style.setProperty('--primary-color-900','hsl(0,0%,100%)');
    document.documentElement.style.setProperty('--primary-color-100','hsl(0,0%,77%)');
    document.documentElement.style.setProperty('--primary-color-200','hsl(0,0%,63%)');
    document.documentElement.style.setProperty('--primary-color-300','hsl(0,0%,49%)');
    document.documentElement.style.setProperty('--primary-color-400','hsl(0,0%,94%)')
    document.documentElement.style.setProperty('--secondary-color-900','hsl(0,0%,0%)');
    document.documentElement.style.setProperty('--secondary-color-100','hsl(0,0%,60%)');
    
}

//dark mode
function darkMode(){
  document.documentElement.style.setProperty('--primary-color-900','hsl(0,0%,0%)');
  document.documentElement.style.setProperty('--primary-color-100','hsl(240,5%,8%)');
  document.documentElement.style.setProperty('--primary-color-200','hsl(240,2%,10%)');
  document.documentElement.style.setProperty('--primary-color-300','hsl(240,1%,17%)');
  document.documentElement.style.setProperty('--primary-color-400','hsl(0,0%,2%)')
    document.documentElement.style.setProperty('--secondary-color-900','hsl(0,0%,100%)');
    document.documentElement.style.setProperty('--secondary-color-100','hsl(0, 0%, 68%)');

}

//toggle Button
toggleContainer.addEventListener('click',function(){
    toggleContainer.classList.toggle('toggle-active');
    if(toggleBtn.style.transform == 'translateX(100%)'){
        toggleBtn.style.transform = 'translateX(-1%)';
        darkMode()

    }else{
        toggleBtn.style.transform = 'translateX(100%)';
        toggleBtn.style.transition = 'all 0.5s';
        lightMode()
    }})
    
    

    
   //slider component
   const slider = function () {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
  
    let curSlide = 0;
    const maxSlide = slides.length;
  
  
    const goToSlide = function (slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };
  
    // Next slide
    const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }
  
      goToSlide(curSlide);
    };
  
    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);
    };
  
    const init = function () {
      goToSlide(0);
  
    };
    init();
  
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);
  
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') prevSlide();
      e.key === 'ArrowRight' && nextSlide();
    });
  

  };
  slider();
   
   
   //menu
   
   closeMenu.style.display = 'none';
   menu.style.display = 'none';
   menu.style.postion = 'absolute';
   menu.style.top = '0'
   let navLinksArr = [...navLinks]
   
   
   if(window.innerWidth <= 1100){
     menu.classList.add('active');

     menuContainer.onmouseover = function(){
      menuContainer.style.color = 'var(--main-skin-color-900)';
    }
    menuContainer.onmouseout = function(){
    menuContainer.style.color = 'var(--secondary-color-900)';
      
    }
    navLinksArr.forEach(el => {
       el.style.display  = 'none';
      })
    }
    
    function closer(){
      menu.classList.toggle('active');
      closeMenu.classList.toggle('active');
      
      navLinksArr.forEach(el => {
        el.style.display = 'none'
      })
      linkContainer.style.display = 'none';
      document.body.style.overflow = 'scroll';
      
    }
    function opener(){

      menu.classList.toggle('active');
      closeMenu.classList.toggle('active');
    
      navLinksArr.forEach(el => {
      el.style.display = 'block';
      })
      linkContainer.style.background = 'var(--primary-color-900)';
      linkContainer.style.position = 'absolute';
      linkContainer.style.top = '0';
      linkContainer.style.left = '0';
      linkContainer.style.marginTop = '13vh';
      linkContainer.style.display = 'block';
      linkContainer.style.height = '100%';
      linkContainer.style.width = '100vw';
      linkContainer.style.fontFamily = 'Graphik';
      document.body.style.overflow = 'hidden';
      linkContainer.style.paddingLeft = '2rem'

      


      navLinksArr.forEach(el => {
        el.style.color = 'var(--secondary-color-900)';
        el.addEventListener('click',closer);
        el.style.borderBottom = '0.5px solid rgb(26, 26, 26)'
        el.style.fontSize = '1.25rem';
        el.style.fontWeight = '500';
        el.style.paddingBottom = '1rem'
        el.style.marginBottom = '1rem'
        el.style.marginTop = '1rem'
        el.style.transition = 'all 0.5s'
        
        el.onmouseover = function (){
          el.style.textDecoration = 'none';
          el.style.color = 'var(--main-skin-color-900)';

        }
        el.onmouseout = function (){
          el.style.color = 'var(--secondary-color-900)';
        }
        
      })
      navLinksArr[0].style.marginTop = '5rem'
      
      navLinksArr[4].style.color = 'var(--primary-color-900)';
      navLinksArr[4].style.marginLeft = 'auto'
      navLinksArr[4].style.marginRight = 'auto'
      navLinksArr[4].style.marginTop = '8vh'
      navLinksArr[4].style.width = '50vw'
      navLinksArr[4].style.borderRadius = '0'
      navLinksArr[4].onmouseover = function() {
        navLinksArr[4].style.color = 'var(--primary-color-900)';
        navLinksArr[4].style.opacity = '0.8';
      }
      navLinksArr[4].onmouseout = function() {
        navLinksArr[4].style.color = 'var(--primary-color-900)';
        navLinksArr[4].style.opacity = '1';
      }
    }

      menu.addEventListener('click',opener);

    
    closeMenu.addEventListener('click',closer)
  

//reveal elements on scroll

let allSections = document.querySelectorAll('section');
allSections.forEach(function(section){
  section.classList.add('section--hidden')
})

const revealSection = function(entries,observer){
let entry = [entries]
console.log(entry)
if(!entry[0][0].isIntersecting) return;
  entry[0][0].target.classList.remove('section--hidden')
  observer.unobserve(entry[0][0].target)  

}

const sectionObserver = new IntersectionObserver(revealSection, {root:null, treshold: 0.25})

allSections.forEach(function(section){
  section.classList.add('section--hidden')
  sectionObserver.observe(section);
})



//color picking api
