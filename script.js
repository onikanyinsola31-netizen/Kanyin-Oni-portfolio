// script.js - Professional Portfolio JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }
    
    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
            }
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                // Update active link
                document.querySelectorAll('nav a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
                
                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav ul li a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Enhanced Skills filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillCategories = document.querySelectorAll('.skill-category');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                
                skillCategories.forEach(category => {
                    if (filterValue === 'all' || category.getAttribute('data-category') === filterValue) {
                        category.style.display = 'block';
                        setTimeout(() => {
                            category.style.opacity = '1';
                            category.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        category.style.opacity = '0';
                        category.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            category.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // Interactive skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('click', () => {
            // Highlight skill temporarily
            const originalBorder = item.style.borderBottom;
            item.style.backgroundColor = 'rgba(45, 116, 218, 0.05)';
            item.style.borderLeft = '3px solid #e63946';
            item.style.paddingLeft = '17px';
            
            setTimeout(() => {
                item.style.backgroundColor = '';
                item.style.borderLeft = '';
                item.style.paddingLeft = '';
            }, 1000);
        });
    });
    
    // Resume download functionality
    const downloadResumeBtn = document.getElementById('downloadResume');
    if (downloadResumeBtn) {
        downloadResumeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Create a temporary download link
            const link = document.createElement('a');
            link.href = 'assets/resume/Juliet_Oni_Resume.pdf';
            link.download = 'Juliet_Oni_Senior_Data_Analyst_Resume.pdf';
            link.target = '_blank';
            
            // Trigger download
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Optional: Show confirmation message
            console.log('Resume download initiated');
        });
    }
    
    // Experience item animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe experience items
    document.querySelectorAll('.experience-content').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });
    
    // Observe skill categories
    document.querySelectorAll('.skill-category').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });
    
    // Print functionality (for resume printing)
    window.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'p') {
            e.preventDefault();
            console.log('Print portfolio - For best printing results, use the browser print dialog and select "Save as PDF" to create a printable version.');
        }
    });
    
    // Initialize animations
    initAnimations();
});

// Function to initialize animations
function initAnimations() {
    // Add any additional animation initializations here
    console.log('Portfolio animations initialized');
}

// Export functions if using modules (optional)
// export { initAnimations };
