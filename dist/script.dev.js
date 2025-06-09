"use strict";

// Function to get color based on proficiency
function getProficiencyColor(proficiency) {
  if (proficiency >= 80) return '#10b981'; // Green for high proficiency

  if (proficiency >= 60) return '#f59e0b'; // Yellow for medium proficiency

  return '#ef4444'; // Red for low proficiency
} // Function to animate skill bars


function animateSkillBars() {
  var skillBars = document.querySelectorAll('.skill-progress');
  skillBars.forEach(function (progress) {
    var proficiency = parseInt(progress.getAttribute('data-width'));
    var targetWidth = proficiency + '%'; // Set initial state

    progress.style.width = '0%';
    progress.style.backgroundColor = getProficiencyColor(proficiency); // Animate after a short delay

    setTimeout(function () {
      progress.style.width = targetWidth;
    }, 100);
  });
} // Initialize animations when DOM is loaded


document.addEventListener('DOMContentLoaded', function () {
  // Animate skill bars
  animateSkillBars(); // Optional: Re-animate when skills section comes into view

  var skillsSection = document.querySelector('#skills');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateSkillBars();
      }
    });
  }, {
    threshold: 0.2
  });

  if (skillsSection) {
    observer.observe(skillsSection);
  }
}); // Toggle navigation on mobile screen

var menu = document.querySelector('.menu-toggle');
var navList = document.querySelector('.nav-list'); // Close nav when a link is clicked or when clicking outside the nav

function closeNav() {
  navList.classList.remove('active');
}

menu.addEventListener('click', function (e) {
  e.stopPropagation(); // Prevent body click from firing

  navList.classList.toggle('active');
}); // Close menu when a nav link is clicked

navList.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', closeNav);
}); // Close menu when clicking outside nav/menu

document.body.addEventListener('click', function (e) {
  if (navList.classList.contains('active') && !navList.contains(e.target) && !menu.contains(e.target)) {
    closeNav();
  }
});
//# sourceMappingURL=script.dev.js.map
