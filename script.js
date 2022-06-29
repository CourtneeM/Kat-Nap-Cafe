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
  const testimonialsContainer = document.querySelector('#testimonials');
  const testimonials = [...testimonialsContainer.querySelectorAll('.testimonial')];
  const [prevControl, nextControl] = [...document.querySelector('#testimonial-controls').children];
  const progressCircles = [...document.querySelector('.testimonial-progress').children];

  // Resets testimonials for larger screen sizes
  window.addEventListener('resize', () => {
    if ([...testimonialsContainer.querySelectorAll('.testimonial')].length === 3) return;

    if (window.matchMedia('(min-width:860px)').matches) {
      testimonials.forEach((testimonial) => {
        if ([...testimonialsContainer.children].includes(testimonial)) {
          testimonialsContainer.removeChild(testimonial);
        }
      });
      
      testimonials.forEach((testimonial) => {
        testimonialsContainer.insertBefore(testimonial, prevControl.parentElement);
      });
    }
  });
  
  if (window.matchMedia('(min-width:640px)').matches) {
    let indices = [0, 1];
    let activeTestimonials = [testimonials[indices[0]], testimonials[indices[1]]];

    prevControl.addEventListener('click', () => {
      progressCircles[indices[0]].removeAttribute('id');

      indices[0] = testimonials[indices[0]-1] === undefined ? testimonials.length - 1 : indices[0] - 1;
      indices[1] = testimonials[indices[1]-1] === undefined ? testimonials.length - 1 : indices[1] - 1;

      activeTestimonials = [testimonials[indices[0]], testimonials[indices[1]]];

      testimonials.forEach((testimonial) => {
        if ([...testimonialsContainer.children].includes(testimonial)) {
          testimonialsContainer.removeChild(testimonial);
        }
      });


      activeTestimonials.forEach((testimonial) => {
        testimonialsContainer.insertBefore(testimonial, prevControl.parentElement);
      });
      progressCircles[indices[0]].id = 'active-testimonial';
    });

    nextControl.addEventListener('click', () => {
      progressCircles[indices[0]].removeAttribute('id');

      indices[0] = testimonials[indices[0]+1] === undefined ? 0 : indices[0] + 1;
      indices[1] = testimonials[indices[1]+1] === undefined ? 0 : indices[1] + 1;

      activeTestimonials = [testimonials[indices[0]], testimonials[indices[1]]];

      testimonials.forEach((testimonial) => {
        if ([...testimonialsContainer.children].includes(testimonial)) {
          testimonialsContainer.removeChild(testimonial);
        }
      });


      activeTestimonials.forEach((testimonial) => {
        testimonialsContainer.insertBefore(testimonial, prevControl.parentElement);
      });
      progressCircles[indices[0]].id = 'active-testimonial';
    });
  } else if (window.matchMedia('(min-width:0px)').matches) {
    let index = 0;

    prevControl.addEventListener('click', () => {
      testimonials[index].style.display = 'none';
      progressCircles[index].removeAttribute('id');
      
      index = testimonials[index-1] === undefined ? testimonials.length - 1 : index - 1;
      
      testimonials[index].style.display = 'block';
      progressCircles[index].id = 'active-testimonial';
    });

    nextControl.addEventListener('click', (e) => {
      testimonials[index].style.display = 'none';
      progressCircles[index].removeAttribute('id');

      index = testimonials[index+1] === undefined ? 0 : index + 1;
      
      testimonials[index].style.display = 'block';
      progressCircles[index].id = 'active-testimonial';
    });
  }
})();