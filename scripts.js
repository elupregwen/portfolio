//Main js
document.addEventListener('DOMContentLoaded', () => {
  // Typewriter effect
  const words = ["IoT Developer  ", "Tech Problem Solver  ", "Python Programmer  ", "Flutter Enthusiast  "];
  const typewriterEl = document.getElementById('typewriter');
  let i = 0, j = 0, currentWord = '', isDeleting = false;
  let typingTimeout;

  function type() {
    const current = i % words.length;
    const fullWord = words[current];

    if (isDeleting) {
      currentWord = fullWord.substring(0, j--);
      typewriterEl.innerHTML = currentWord;

      if (j === 0) {
        isDeleting = false;
        i++;
        typingTimeout = setTimeout(type, 1000);
      } else {
        typingTimeout = setTimeout(type, 50);
      }
    } else {
      currentWord = fullWord.substring(0, j++);
      typewriterEl.innerHTML = currentWord;

      if (j === fullWord.length) {
        isDeleting = true;
        typingTimeout = setTimeout(type, 2000);
      } else {
        typingTimeout = setTimeout(type, j % 3 === 0 ? 150 : 100);
      }
    }
  }

  // Start typing after a brief delay
  setTimeout(type, 1000);

  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = mobileMenuButton.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    } else {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    }
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenuButton.querySelector('i').classList.remove('fa-times');
      mobileMenuButton.querySelector('i').classList.add('fa-bars');
    });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    });
  });

  // Clean up on unmount
  return () => {
    clearTimeout(typingTimeout);
  };
});



//About js
document.addEventListener('DOMContentLoaded', () => {
  const elements = [
    { id: 'about-title', delay: 100 },
    { id: 'about-subtitle', delay: 100 },
    { id: 'about-hello', delay: 200 },
    { id: 'about-name', delay: 200 },
    { id: 'about-image', delay: 250 },
    { id: 'about-desc', delay: 250 },
    { id: 'about-buttons', delay: 300 }
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = elements.find(el => el.id === entry.target.id);
        if (element && !entry.target.classList.contains('animated')) {
          setTimeout(() => {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('animate-fadeInUp', 'animated');
          }, element.delay);
        }
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(({ id }) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
});



// Project js
document.addEventListener('DOMContentLoaded', () => {
  const projectElements = [
    { id: 'projects-header', delay: 0 },
    { id: 'project-1', delay: 100 },
    { id: 'project-2', delay: 200 },
    { id: 'project-3', delay: 300 },
    { id: 'projects-cta', delay: 300 }
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = projectElements.find(el => el.id === entry.target.id);
        if (element && !entry.target.classList.contains('animated')) {
          setTimeout(() => {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('animated');
          }, element.delay);
        }
      }
    });
  }, { threshold: 0.1 });

  projectElements.forEach(({ id }) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
});



//Experience js
document.addEventListener('DOMContentLoaded', () => {
  // Animation observer for experience section
  const experienceElements = [
    { id: 'experience-header', delay: 0 },
    { id: 'experience-1', delay: 100 },
    { id: 'experience-2', delay: 200 }
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = experienceElements.find(el => el.id === entry.target.id);
        if (element && !entry.target.classList.contains('animated')) {
          setTimeout(() => {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('animated');
          }, element.delay);
        }
      }
    });
  }, { threshold: 0.1 });

  experienceElements.forEach(({ id }) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  // Tab functionality
  const tabs = document.querySelectorAll('.experience-tab');
  const details = document.querySelectorAll('.experience-details');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active classes from all tabs and details
      tabs.forEach(t => t.classList.remove('active', 'border-primary/40', 'border-secondary/40'));
      details.forEach(d => d.classList.remove('active', 'block'));
      details.forEach(d => d.classList.add('hidden'));

      // Add active class to clicked tab
      tab.classList.add('active');
      if (tab.dataset.target === 'experience-1') {
        tab.classList.add('border-primary/40');
      } else {
        tab.classList.add('border-secondary/40');
      }

      // Show corresponding details
      const target = document.getElementById(`${tab.dataset.target}-details`);
      target.classList.remove('hidden');
      target.classList.add('block', 'active');
    });
  });
});



//Blog js
document.addEventListener('DOMContentLoaded', () => {
  // Animation observer for blog section
  const blogElements = [
    { id: 'blog-header', delay: 0 },
    { id: 'blog-card-1', delay: 100 },
    { id: 'blog-card-2', delay: 200 },
    { id: 'blog-card-3', delay: 300 },
    { id: 'blog-newsletter', delay: 400 }
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = blogElements.find(el => el.id === entry.target.id);
        if (element && !entry.target.classList.contains('animated')) {
          setTimeout(() => {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('animated');
          }, element.delay);
        }
      }
    });
  }, { threshold: 0.1 });

  blogElements.forEach(({ id }) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
});



//Contact js
document.addEventListener('DOMContentLoaded', () => {
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

  contactForm.addEventListener('submit', function (e) {
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


// Tech Stack Tabs Functionality
function initTechTabs() {
  const tabs = document.querySelectorAll('.tech-tab');
  const categories = document.querySelectorAll('.tech-category');

  // Show all categories by default
  categories.forEach(cat => cat.classList.remove('hidden'));

  tabs.forEach(tab => {
    tab.addEventListener('click', function () {
      const category = this.getAttribute('data-category');

      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      // Show/hide categories
      categories.forEach(cat => {
        if (category === 'all') {
          cat.classList.remove('hidden');
        } else {
          if (cat.getAttribute('data-category') === category) {
            cat.classList.remove('hidden');
          } else {
            cat.classList.add('hidden');
          }
        }
      });
    });
  });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function () {
  initTechTabs();
});