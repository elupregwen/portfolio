    document.addEventListener('DOMContentLoaded', () => {
      // Typewriter effect
      const words = ["IoT Developer", "Tech Problem Solver", "Python Programmer", "Flutter Enthusiast"];
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
        anchor.addEventListener('click', function(e) {
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