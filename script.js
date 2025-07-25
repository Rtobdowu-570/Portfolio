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

// Particles Animation System
class ParticleSystem {
  constructor() {
    this.container = document.getElementById('particles');
    this.particles = [];
    this.maxParticles = 50;
    this.isScrolling = false;
    this.scrollTimeout = null;
    
    this.init();
    this.bindEvents();
  }
  
  init() {
    // Create initial particles
    for (let i = 0; i < this.maxParticles; i++) {
      this.createParticle();
    }
  }
  
  createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random size variants
    const rand = Math.random();
    if (rand < 0.3) {
      particle.classList.add('small');
    } else if (rand > 0.7) {
      particle.classList.add('large');
    }
    
    // Random starting position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = '100vh';
    
    // Random animation delay
    particle.style.animationDelay = Math.random() * 8 + 's';
    
    // Random horizontal drift
    particle.style.setProperty('--drift', (Math.random() - 0.5) * 200 + 'px');
    
    this.container.appendChild(particle);
    this.particles.push(particle);
    
    // Remove particle after animation
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
        const index = this.particles.indexOf(particle);
        if (index > -1) {
          this.particles.splice(index, 1);
        }
      }
    }, 8000);
  }
  
  onScroll() {
    this.isScrolling = true;
    
    // Create more particles while scrolling
    if (this.particles.length < this.maxParticles * 1.5) {
      this.createParticle();
    }
    
    // Clear existing timeout
    clearTimeout(this.scrollTimeout);
    
    // Set timeout to detect when scrolling stops
    this.scrollTimeout = setTimeout(() => {
      this.isScrolling = false;
    }, 150);
  }
  
  bindEvents() {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          this.onScroll();
          ticking = false;
        });
        ticking = true;
      }
    });
    
    // Create new particles periodically
    setInterval(() => {
      if (this.particles.length < this.maxParticles) {
        this.createParticle();
      }
    }, 300);
  }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Animate skill bars
  animateSkillBars();
  
  // Initialize particle system
  new ParticleSystem();
  
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
const body = document.body;

// Function to toggle body scroll
function toggleBodyScroll(disable) {
  if (disable) {
    // Store current scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    body.style.top = `-${scrollTop}px`;
    body.classList.add('menu-open');
  } else {
    // Restore scroll position
    const scrollTop = parseInt(body.style.top || '0') * -1;
    body.classList.remove('menu-open');
    body.style.top = '';
    window.scrollTo(0, scrollTop);
  }
}

// Close nav when a link is clicked or when clicking outside the nav
function closeNav() {
  navList.classList.remove('active');
  toggleBodyScroll(false); // Re-enable scrolling
}

// Open nav
function openNav() {
  navList.classList.add('active');
  toggleBodyScroll(true); // Disable scrolling
}

menu.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent body click from firing
  
  if (navList.classList.contains('active')) {
    closeNav();
  } else {
    openNav();
  }
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

// Close menu on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navList.classList.contains('active')) {
    closeNav();
  }
});

// Handle window resize - close menu if screen becomes large
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && navList.classList.contains('active')) {
    closeNav();
  }
});