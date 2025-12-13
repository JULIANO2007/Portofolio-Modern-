// ===== DOM Elements =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');
const scrollProgress = document.getElementById('scrollProgress');
const themeToggle = document.getElementById('themeToggle');
const sections = document.querySelectorAll('section');
const contactForm = document.getElementById('contactForm');

// ===== Mobile Menu Toggle =====
function toggleMenu() {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
}

navToggle.addEventListener('click', toggleMenu);

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
  // Update scroll progress bar
  const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;
  scrollProgress.style.width = scrolled + '%';
  
  // Update active nav link
  updateActiveNav();
  
  // Trigger scroll reveal animations
  revealOnScroll();
});

// ===== Smooth Scroll Behavior =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      const offset = 80;
      const targetPosition = target.offsetTop - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ===== Update Active Navigation Link =====
function updateActiveNav() {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-section') === current) {
      link.classList.add('active');
    }
  });
}

// ===== Scroll Reveal Animation =====
function revealOnScroll() {
  const reveals = document.querySelectorAll('.scroll-reveal');
  
  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 150;
    
    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add('visible');
    }
  });
}

// Initial check for scroll reveal
revealOnScroll();

// ===== Theme Toggle =====
const htmlElement = document.documentElement;
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Check saved theme or system preference
const savedTheme = localStorage.getItem('theme');
const isDark = savedTheme ? savedTheme === 'dark' : prefersDark.matches;

if (!isDark) {
  document.body.classList.add('light-mode');
}

themeToggle.addEventListener('click', () => {
  const isCurrentlyDark = !document.body.classList.contains('light-mode');
  
  if (isCurrentlyDark) {
    document.body.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.remove('light-mode');
    localStorage.setItem('theme', 'dark');
  }
});

// ===== Form Validation =====
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function clearErrors() {
  const errorElements = document.querySelectorAll('.error-message');
  errorElements.forEach(el => {
    el.textContent = '';
  });
  
  const formGroups = document.querySelectorAll('.form-group');
  formGroups.forEach(group => {
    group.classList.remove('error');
  });
}

function showError(fieldName, message) {
  const field = document.getElementById(fieldName);
  const errorElement = document.getElementById(fieldName + 'Error');
  
  if (field && errorElement) {
    field.parentElement.classList.add('error');
    errorElement.textContent = message;
  }
}

// Real-time validation
if (contactForm) {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  
  nameInput?.addEventListener('blur', () => {
    if (nameInput.value.trim().length < 2) {
      showError('name', 'Nama minimal 2 karakter');
    } else {
      clearError('name');
    }
  });
  
  emailInput?.addEventListener('blur', () => {
    if (!validateEmail(emailInput.value)) {
      showError('email', 'Format email tidak valid');
    } else {
      clearError('email');
    }
  });
  
  subjectInput?.addEventListener('blur', () => {
    if (subjectInput.value.trim().length < 5) {
      showError('subject', 'Subjek minimal 5 karakter');
    } else {
      clearError('subject');
    }
  });
  
  messageInput?.addEventListener('blur', () => {
    if (messageInput.value.trim().length < 10) {
      showError('message', 'Pesan minimal 10 karakter');
    } else {
      clearError('message');
    }
  });
}

function clearError(fieldName) {
  const field = document.getElementById(fieldName);
  const errorElement = document.getElementById(fieldName + 'Error');
  
  if (field && errorElement) {
    field.parentElement.classList.remove('error');
    errorElement.textContent = '';
  }
}

// ===== Form Submission =====
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearErrors();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    // Validate all fields
    if (name.length < 2) {
      showError('name', 'Nama minimal 2 karakter');
      isValid = false;
    }
    
    if (!validateEmail(email)) {
      showError('email', 'Format email tidak valid');
      isValid = false;
    }
    
    if (subject.length < 5) {
      showError('subject', 'Subjek minimal 5 karakter');
      isValid = false;
    }
    
    if (message.length < 10) {
      showError('message', 'Pesan minimal 10 karakter');
      isValid = false;
    }
    
    if (!isValid) return;
    
    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Mengirim...</span>';
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success
      contactForm.style.display = 'none';
      const successMessage = document.getElementById('successMessage');
      if (successMessage) {
        successMessage.style.display = 'flex';
      }
      
      // Reset form after 3 seconds
      setTimeout(() => {
        contactForm.reset();
        contactForm.style.display = 'flex';
        successMessage.style.display = 'none';
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }, 3000);
      
    } catch (error) {
      console.error('Error:', error);
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      showError('message', 'Terjadi kesalahan, silakan coba lagi');
    }
  });
}

// ===== Keyboard Navigation =====
let keyboardMode = false;

document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    keyboardMode = true;
    document.body.classList.add('keyboard-nav');
  }
  
  if (e.key === 'Escape') {
    if (navMenu.classList.contains('active')) {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
    }
  }
});

document.addEventListener('mousedown', () => {
  keyboardMode = false;
  document.body.classList.remove('keyboard-nav');
});

// ===== Parallax Effect =====
window.addEventListener('scroll', () => {
  const blobs = document.querySelectorAll('.gradient-blob');
  const scrollY = window.scrollY;
  
  blobs.forEach((blob, index) => {
    const offset = scrollY * (0.5 + index * 0.1);
    blob.style.transform = `translateY(${offset}px)`;
  });
});

// ===== Intersection Observer for Animations =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
});

document.querySelectorAll('.scroll-reveal').forEach(el => {
  observer.observe(el);
});

// ===== Utility Functions =====
const portfolio = {
  getCurrentSection: () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    return current;
  },
  
  scrollToSection: (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80;
      const targetPosition = section.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  },
  
  toggleTheme: () => {
    themeToggle.click();
  }
};

// Export utility functions
window.portfolio = portfolio;

// ===== Document Visibility =====
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Pause animations if needed
  } else {
    // Resume animations
  }
});

// ===== Image Lazy Loading =====
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ===== Initialize =====
console.log('Portfolio initialized successfully!');
