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