// Typing animation for roles
const roles = ["UI/UX Designer", "Web Developer", "Frontend Engineer"];
const typingElement = document.getElementById('typing-element');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeRoles() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before typing next word
    }
    
    setTimeout(typeRoles, typingSpeed);
}

// Mobile Nav Toggle
function setupMobileNav() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const sidebar = document.getElementById('sidebar');
    
    if (mobileNavToggle && sidebar) {
        mobileNavToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            sidebar.classList.toggle('active');
            
            // Change icon
            const icon = this.querySelector('i');
            if (isExpanded) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });
    }
}

// Close sidebar when clicking on a link (for mobile)
function setupNavLinks() {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 1200) {
                const sidebar = document.getElementById('sidebar');
                const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
                if (sidebar && mobileNavToggle) {
                    sidebar.classList.remove('active');
                    mobileNavToggle.setAttribute('aria-expanded', 'false');
                    const icon = mobileNavToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Update active link
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
}

// Highlight active section in navigation
function setupActiveSectionHighlight() {
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Project card hover effect
function setupProjectCardHover() {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Start typing animation after a short delay
    if (typingElement) {
        setTimeout(typeRoles, 1000);
    }
    
    setupMobileNav();
    setupNavLinks();
    setupSmoothScrolling();
    setupActiveSectionHighlight();
    setupProjectCardHover();
});

 // Animation on scroll
        function animateOnScroll() {
            const sections = document.querySelectorAll('.animate-section');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                        
                        // Animate skill bars if it's the about section
                        if (entry.target.id === 'about') {
                            animateSkillBars();
                        }
                    }
                });
            }, {
                threshold: 0.1
            });
            
            sections.forEach(section => {
                observer.observe(section);
            });
        }
        
        // Animate skill bars
        function animateSkillBars() {
    const bars = document.querySelectorAll('.skill-bar-fill');
    bars.forEach(bar => {
      const percent = bar.getAttribute('data-percent');
      const top = bar.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight) {
        bar.style.width = percent + '%';
      }
    });
  }

  window.addEventListener('scroll', animateSkillBars);
  window.addEventListener('load', animateSkillBars);
        
        