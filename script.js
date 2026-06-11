// ===================================================
// MOBILE NAVIGATION FUNCTIONALITY
// ===================================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Toggle hamburger menu
if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ===================================================
// ACTIVE NAV LINK HIGHLIGHTING
// ===================================================

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Run on page load
setActiveNavLink();

// ===================================================
// CONTACT FORM VALIDATION
// ===================================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    // Validation rules
    const validationRules = {
        name: {
            required: true,
            minLength: 2,
            pattern: /^[a-zA-Z\s]+$/,
            errorMessage: {
                required: 'Name is required',
                minLength: 'Name must be at least 2 characters',
                pattern: 'Name can only contain letters and spaces'
            }
        },
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            errorMessage: {
                required: 'Email is required',
                pattern: 'Please enter a valid email address'
            }
        },
        phone: {
            pattern: /^[\d\s\-\+\(\)]+$/,
            minLength: 10,
            errorMessage: {
                pattern: 'Please enter a valid phone number',
                minLength: 'Phone number must be at least 10 digits'
            }
        },
        subject: {
            required: true,
            errorMessage: {
                required: 'Please select a subject'
            }
        },
        message: {
            required: true,
            minLength: 10,
            errorMessage: {
                required: 'Message is required',
                minLength: 'Message must be at least 10 characters'
            }
        },
        privacy: {
            required: true,
            errorMessage: {
                required: 'You must agree to the privacy policy'
            }
        }
    };

    // Validate individual field
    function validateField(fieldName, value) {
        const rules = validationRules[fieldName];
        if (!rules) return true;

        if (rules.required && !value.trim()) {
            return {
                valid: false,
                message: rules.errorMessage.required
            };
        }

        if (value && rules.minLength && value.length < rules.minLength) {
            return {
                valid: false,
                message: rules.errorMessage.minLength
            };
        }

        if (value && rules.pattern && !rules.pattern.test(value)) {
            return {
                valid: false,
                message: rules.errorMessage.pattern
            };
        }

        return { valid: true, message: '' };
    }

    // Show error message
    function showError(fieldName, message) {
        const errorElement = document.getElementById(`${fieldName}Error`);
        const inputElement = document.getElementById(fieldName);
        
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('show');
        }
        if (inputElement) {
            inputElement.style.borderColor = '#dc2626';
        }
    }

    // Clear error message
    function clearError(fieldName) {
        const errorElement = document.getElementById(`${fieldName}Error`);
        const inputElement = document.getElementById(fieldName);
        
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.classList.remove('show');
        }
        if (inputElement) {
            inputElement.style.borderColor = '';
        }
    }

    // Real-time validation on input
    const formInputs = contactForm.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
        input.addEventListener('blur', () => {
            const fieldName = input.name;
            const value = input.type === 'checkbox' ? input.checked : input.value;
            const validation = validateField(fieldName, value);
            
            if (!validation.valid) {
                showError(fieldName, validation.message);
            } else {
                clearError(fieldName);
            }
        });

        input.addEventListener('input', () => {
            const fieldName = input.name;
            const errorElement = document.getElementById(`${fieldName}Error`);
            if (errorElement && errorElement.classList.contains('show')) {
                const value = input.type === 'checkbox' ? input.checked : input.value;
                const validation = validateField(fieldName, value);
                
                if (validation.valid) {
                    clearError(fieldName);
                }
            }
        });
    });

    // Form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let isFormValid = true;
        const formMessage = document.getElementById('formMessage');

        // Validate all fields
        const fieldsToValidate = ['name', 'email', 'phone', 'subject', 'message', 'privacy'];
        
        fieldsToValidate.forEach(fieldName => {
            const field = document.getElementById(fieldName);
            if (!field) return;

            const value = field.type === 'checkbox' ? field.checked : field.value;
            const validation = validateField(fieldName, value);

            if (!validation.valid) {
                showError(fieldName, validation.message);
                isFormValid = false;
            } else {
                clearError(fieldName);
            }
        });

        if (isFormValid) {
            // Simulate form submission
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';

            // Simulate API call with timeout
            setTimeout(() => {
                // Show success message
                formMessage.textContent = 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.';
                formMessage.classList.add('success');
                formMessage.classList.remove('error');

                // Reset form
                contactForm.reset();
                submitButton.disabled = false;
                submitButton.textContent = 'Send Message';

                // Clear success message after 5 seconds
                setTimeout(() => {
                    formMessage.classList.remove('success');
                    formMessage.textContent = '';
                }, 5000);
            }, 1500);
        } else {
            formMessage.textContent = 'Please fix the errors above and try again.';
            formMessage.classList.add('error');
            formMessage.classList.remove('success');
        }
    });
}

// ===================================================
// SMOOTH SCROLL BEHAVIOR
// ===================================================

// Already handled by CSS: scroll-behavior: smooth;

// ===================================================
// PAGE LOAD ANIMATIONS
// ===================================================

document.addEventListener('DOMContentLoaded', () => {
    // Add any page load animations if needed
    console.log('TechVision website loaded successfully');
});

// ===================================================
// UTILITY FUNCTIONS
// ===================================================

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Lazy load animation for elements as they come into view
function observeElements() {
    const elements = document.querySelectorAll('.feature-card, .service-card, .team-member, .about-card');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    }
}

// Initialize observations
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeElements);
} else {
    observeElements();
}

// ===================================================
// KEYBOARD NAVIGATION
// ===================================================

// Improved focus management for better accessibility
document.addEventListener('keydown', (e) => {
    // ESC key to close mobile menu
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});
