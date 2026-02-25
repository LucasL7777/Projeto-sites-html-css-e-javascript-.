const sections = document.querySelectorAll('.hidden');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.8;

  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      section.classList.add('show');
    }
  });
});