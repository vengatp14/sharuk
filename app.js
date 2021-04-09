
/* Center the loader 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')
*/
/*===== ACTIVE AND REMOVE MENU =====*/
//const navLink = document.querySelectorAll('.nav__link');   

//function linkAction(){
  /*Active link*/
  //navLink.forEach(n => n.classList.remove('active'));
  //this.classList.add('active');
  
  /*Remove menu mobile*/
  //const navMenu = document.getElementById('nav-menu')
  //navMenu.classList.remove('show')
}
/navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
//const sr = ScrollReveal({
  //  origin: 'top',
    //distance: '80px',
    //duration: 2000,
    //reset: true
//});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL WORK*/
sr.reveal('.w1',{delay: 200});
sr.reveal('.w2',{delay: 200});
sr.reveal('.work__subtitle',{delay: 400}); 
sr.reveal('.work__text',{delay: 400});
sr.reveal('.button1',{delay: 200});
sr.reveal('.button1',{delay: 200});
sr.reveal('.button1',{delay: 200});

/*SCROLL QUALIFICATIONS*/
sr.reveal('.qualif__icon',{ delay: 400}); 
sr.reveal('.qualif__subtitle',{delay: 400}); 
sr.reveal('.qualif__text',{delay: 400}); 
sr.reveal('.button2',{delay: 200}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skill_cont',{delay: 600});  
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL PROJECTS*/
sr.reveal('.pro_img',{ delay: 400}); 
sr.reveal('.pro__subtitle',{delay: 400}); 
sr.reveal('.pro__text',{delay: 400}); 
sr.reveal('.ip1',{delay: 400}); 
sr.reveal('.button3',{delay: 200}); 

/*SCROLL ACHIEVEMENTS*/
sr.reveal('.achieve1',{ delay: 400}); 
sr.reveal('.achieve__title',{delay: 400}); 
sr.reveal('.button4',{delay: 400}); 
sr.reveal('.ip1',{delay: 400}); 
sr.reveal('.button3',{delay: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 

