// Back to Top Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Create back to top button
  const backToTopBtn = document.createElement('button');
  backToTopBtn.innerHTML = '↑';
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(backToTopBtn);

  // Show/hide button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
    
    // Animate elements on scroll
    animateOnScroll();
  });

  // Smooth scroll to top when clicked
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Initial animation check
  animateOnScroll();
});

// Scroll Animation Function
function animateOnScroll() {
  const elements = document.querySelectorAll('.activity, .team-member, .stat-card, .news-item, .story-card');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('animate-on-scroll', 'animated');
    }
  });
}

// Form Enhancement Functions
function showThankYou(event) {
  event.preventDefault();
  
  const thankYouMsg = document.getElementById('thank-you-message');
  if (thankYouMsg) {
    thankYouMsg.style.display = 'block';
    thankYouMsg.style.animation = 'fadeInUp 0.5s ease-out';
    
    // Reset form with animation
    const form = event.target;
    form.style.transform = 'scale(0.95)';
    setTimeout(() => {
      form.reset();
      form.style.transform = 'scale(1)';
    }, 200);
  }
}

// Enhanced form submission for join form
function handleJoinSubmit(event) {
  event.preventDefault();
  
  const button = event.target.querySelector('button');
  const originalText = button.innerHTML;
  
  // Button loading animation
  button.innerHTML = '✨ Joining...';
  button.disabled = true;
  
  // Simulate form submission
  setTimeout(() => {
    button.innerHTML = '✅ Welcome to the Family!';
    button.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
    
    // Reset after 3 seconds
    setTimeout(() => {
      button.innerHTML = originalText;
      button.disabled = false;
      button.style.background = '';
      event.target.reset();
    }, 3000);
  }, 2000);
}

// Enhanced Interactions
document.addEventListener('DOMContentLoaded', function() {
  // Add floating animation to hero emojis
  const heroEmojis = document.querySelectorAll('.hero div, .gallery-hero div, .news-hero div');
  heroEmojis.forEach(emoji => {
    emoji.classList.add('floating');
  });
  
  // Add hover effects to cards
  const cards = document.querySelectorAll('.activity, .team-member, .stat-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });
  
  // Enhanced form interactions
  const inputs = document.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
      this.parentElement.style.transform = '';
    });
  });
  
  // Add join form handler
  const joinForm = document.querySelector('.join-form');
  if (joinForm) {
    joinForm.addEventListener('submit', handleJoinSubmit);
  }
});

// Parallax effect for hero sections
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const heroes = document.querySelectorAll('.hero, .gallery-hero, .news-hero, .impact-hero, .contact-hero');
  
  heroes.forEach(hero => {
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
  });
});

// Gallery Tab Functionality with Animation
function showTab(tabName) {
  // Hide all tab contents with fade out
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => {
    content.style.opacity = '0';
    content.style.transform = 'translateY(20px)';
    setTimeout(() => {
      content.classList.remove('active');
    }, 150);
  });
  
  // Remove active class from all buttons
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  
  // Show selected tab with fade in
  const selectedTab = document.getElementById(tabName);
  if (selectedTab) {
    setTimeout(() => {
      selectedTab.classList.add('active');
      selectedTab.style.opacity = '1';
      selectedTab.style.transform = 'translateY(0)';
    }, 150);
    
    event.target.classList.add('active');
    
    // Add button click animation
    event.target.style.transform = 'scale(0.95)';
    setTimeout(() => {
      event.target.style.transform = '';
    }, 150);
  }
}

function submitContact(event) {
  event.preventDefault();
  
  const button = event.target.querySelector('button');
  const originalText = button.innerHTML;
  
  // Button loading animation
  button.innerHTML = '📤 Sending...';
  button.disabled = true;
  button.style.background = 'linear-gradient(135deg, #6c757d, #5a6268)';
  
  // Simulate sending
  setTimeout(() => {
    // Show success message
    const successMsg = document.getElementById('successMessage');
    if (successMsg) {
      successMsg.style.display = 'block';
      successMsg.style.animation = 'fadeInUp 0.5s ease-out';
      
      // Reset form
      event.target.reset();
      
      // Reset button
      button.innerHTML = '✅ Message Sent!';
      button.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
      
      // Scroll to top of form
      document.querySelector('.contact-form').scrollIntoView({ behavior: 'smooth' });
      
      // Reset everything after 3 seconds
      setTimeout(() => {
        successMsg.style.display = 'none';
        button.innerHTML = originalText;
        button.disabled = false;
        button.style.background = '';
      }, 3000);
    }
  }, 1500);
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        // Add ripple effect to clicked link
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          transform: scale(0);
          animation: ripple 0.6s linear;
          left: 50%;
          top: 50%;
          width: 20px;
          height: 20px;
          margin-left: -10px;
          margin-top: -10px;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
        
        // Smooth scroll
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);