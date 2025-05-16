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