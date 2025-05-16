  document.addEventListener('DOMContentLoaded', () => {
    // Animation observer for contact section
    const contactElements = [
      { id: 'contact-header', delay: 0 },
      { id: 'contact-social', delay: 100 },
      { id: 'contact-form', delay: 200 }
    ];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = contactElements.find(el => el.id === entry.target.id);
          if (element && !entry.target.classList.contains('animated')) {
            setTimeout(() => {
              entry.target.classList.remove('opacity-0', 'translate-y-10');
              entry.target.classList.add('animated');
            }, element.delay);
          }
        }
      });
    }, { threshold: 0.1 });

    contactElements.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Form submission handler
    const contactForm = document.getElementById('contactForm');
    const thankYouPopup = document.getElementById('thankYouPopup');
    const popupContent = thankYouPopup.querySelector('div > div');
    const closePopup = document.getElementById('closePopup');

    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      
      // Send form data using Fetch API
      fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          // Show thank you popup
          thankYouPopup.classList.remove('hidden');
          setTimeout(() => {
            popupContent.classList.remove('scale-95', 'opacity-0');
            popupContent.classList.add('scale-100', 'opacity-100');
          }, 10);
          
          // Reset form
          contactForm.reset();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('There was a problem sending your message. Please try again later.');
      });
    });

    // Close popup handler
    closePopup.addEventListener('click', () => {
      popupContent.classList.remove('scale-100', 'opacity-100');
      popupContent.classList.add('scale-95', 'opacity-0');
      setTimeout(() => {
        thankYouPopup.classList.add('hidden');
      }, 300);
    });

    // Close popup when clicking outside
    thankYouPopup.addEventListener('click', (e) => {
      if (e.target === thankYouPopup) {
        popupContent.classList.remove('scale-100', 'opacity-100');
        popupContent.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
          thankYouPopup.classList.add('hidden');
        }, 300);
      }
    });
  });