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