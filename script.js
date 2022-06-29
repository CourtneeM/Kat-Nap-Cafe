(function mobileMenuListener() { 
  const mobileMenuPopout = document.querySelector('#mobile-menu');
  const mobileMenuControls = [...document.querySelectorAll('.mobile-menu-control')];
  
  mobileMenuControls.forEach((control) => {
    control.addEventListener('click', () => {
      mobileMenuPopout.classList.toggle('hidden');
    })
  });
})();

(function testimonialSlidesListener() {
  const testimonials = [...document.querySelectorAll('.testimonial')];
  const [prevControl, nextControl] = [...document.querySelector('#testimonial-controls').children];
  const progressCircles = [...document.querySelector('.testimonial-progress').children];
  let index = 0;

  prevControl.addEventListener('click', () => {
    if (window.matchMedia('(min-width:0px)')) {
      testimonials[index].style.display = 'none';
      progressCircles[index].removeAttribute('id');
      
      index = testimonials[index-1] === undefined ? testimonials.length - 1 : index - 1;
      
      testimonials[index].style.display = 'block';
      progressCircles[index].id = 'active-testimonial';

    } else if (window.matchMedia('(min-width:640px)')) {

    } else if (window.matchMedia('(min-width:860px;)')) {
      
    }
  });

  nextControl.addEventListener('click', (e) => {
    if (window.matchMedia('(min-width:0px)')) {
      testimonials[index].style.display = 'none';
      progressCircles[index].removeAttribute('id');

      index = testimonials[index+1] === undefined ? 0 : index + 1;
      
      testimonials[index].style.display = 'block';
      progressCircles[index].id = 'active-testimonial';
    } else if (window.matchMedia('(min-width:640px)')) {
      
    } else if (window.matchMedia('(min-width:860px)')) [

    ]
  });
})();