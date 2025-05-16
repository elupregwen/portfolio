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
      if(tab.dataset.target === 'experience-1') {
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