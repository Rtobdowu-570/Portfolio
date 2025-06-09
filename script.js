// Function to get color based on proficiency
function getProficiencyColor(proficiency) {
  if (proficiency >= 80) return '#10b981'; // Green for high proficiency
  if (proficiency >= 60) return '#f59e0b'; // Yellow for medium proficiency
  return '#ef4444'; // Red for low proficiency
}

// Function to animate skill bars
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  skillBars.forEach(progress => {
    const proficiency = parseInt(progress.getAttribute('data-width'));
    const targetWidth = proficiency + '%';
    
    // Set initial state
    progress.style.width = '0%';
    progress.style.backgroundColor = getProficiencyColor(proficiency);
    
    // Animate after a short delay
    setTimeout(() => {
      progress.style.width = targetWidth;
    }, 100);
  });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Animate skill bars
  animateSkillBars();
  
  // Optional: Re-animate when skills section comes into view
  const skillsSection = document.querySelector('#skills');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkillBars();
      }
    });
  }, { threshold: 0.2 });
  
  if (skillsSection) {
    observer.observe(skillsSection);
  }
});


// Toggle navigation on mobile screen
const menu = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

// Close nav when a link is clicked or when clicking outside the nav
function closeNav() {
  navList.classList.remove('active');
}

menu.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent body click from firing
  navList.classList.toggle('active');
});

// Close menu when a nav link is clicked
navList.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeNav);
});

// Close menu when clicking outside nav/menu
document.body.addEventListener('click', (e) => {
  if (navList.classList.contains('active') && !navList.contains(e.target) && !menu.contains(e.target)) {
    closeNav();
  }
});