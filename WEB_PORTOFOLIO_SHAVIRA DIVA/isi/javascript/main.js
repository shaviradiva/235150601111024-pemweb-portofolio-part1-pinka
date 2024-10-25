function myMenuFunction() {
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function() {
      document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active-link'));
      this.classList.add('active-link');
  });
});

window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

function myMenuFunction() {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.toggle('responsive');
}

const sr = ScrollReveal({
      origin: 'bottom',
      distance: '20px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

/* -- SKILL BOX -- */
sr.reveal('.skill-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* -- ABOUT ME -- */
const srBottom = ScrollReveal({
  origin: 'bottom',
  distance: '80px',
  duration: 2000,
  reset: true,
  opacity: 0
});

srBottom.reveal('.about-info', { delay: 100 });

/* -- EXPERIENCE -- */
const srBottom1 = ScrollReveal({
  origin: 'bottom',
  distance: '80px',
  duration: 2000,
  reset: true
  })
  
  srBottom1.reveal('.experience-container',{delay: 100})
  srBottom1.reveal('.experience-box',{delay: 100})

/* -- SKILL -- */
const srBottom2 = ScrollReveal({
  origin: 'bottom',
  distance: '80px',
  duration: 2000,
  reset: false
  })
  
  srBottom2.reveal('.skill-container',{delay: 100})
  srBottom2.reveal('.skill-box',{delay: 100})
  srBottom2.reveal('.garis',{delay: 100})
  srBottom2.reveal('.garis-box',{delay: 100})

/* -- EDUCATION -- */
const srBottom3 = ScrollReveal({
  origin: 'bottom',
  distance: '80px',
  duration: 2000,
  reset: true
  })
  
  srBottom3.reveal('.education-container',{delay: 100})
  srBottom3.reveal('.education-box',{delay: 100})

/* -- CONTACT ME -- */
const srBottom4 = ScrollReveal({
origin: 'bottom',
distance: '80px',
duration: 2000,
reset: true
})

srBottom4.reveal('.form-control',{delay: 100})

window.addEventListener('scroll', scrollActive)