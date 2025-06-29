// Download counter functionality
let downloadCount = 1247; // Initial count

// Simulate download count updates
function updateDownloadCount() {
    const countElement = document.getElementById('downloadCount');
    if (countElement) {
        // Add some random variation to make it feel dynamic
        const variation = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
        downloadCount += variation;
        
        // Animate the number change
        countElement.style.transform = 'scale(1.1)';
        countElement.textContent = downloadCount.toLocaleString();
        
        setTimeout(() => {
            countElement.style.transform = 'scale(1)';
        }, 200);
    }
}

// Update download count every 30 seconds
setInterval(updateDownloadCount, 30000);

// Download button click handler
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('downloadBtn');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            // Increment download count when button is clicked
            downloadCount++;
            updateDownloadCount();
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // You can add analytics tracking here
            console.log('Download initiated for Kronos OS v1.0');
            
            // Optional: Show a toast notification
            showDownloadNotification();
        });
    }
    
    // Smooth scrolling for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    document.querySelectorAll('.req-item, .step, .screenshot-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Handle image loading errors (fallback for missing screenshots)
    document.querySelectorAll('.screenshot-item img').forEach(img => {
        img.addEventListener('error', function() {
            // Create a placeholder if image fails to load
            const placeholder = document.createElement('div');
            placeholder.style.cssText = `
                width: 100%;
                height: 200px;
                background: linear-gradient(45deg, #ff4500, #ff6b35);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 3rem;
                font-family: 'Font Awesome 6 Free';
                font-weight: 900;
            `;
            placeholder.innerHTML = '&#xf03e;'; // Camera icon
            this.parentNode.replaceChild(placeholder, this);
        });
    });
});

// Show download notification
function showDownloadNotification() {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #ff4500, #ff6b35);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(255, 69, 0, 0.3);
        z-index: 1000;
        font-weight: 500;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    notification.innerHTML = `
        <i class="fas fa-download" style="margin-right: 10px;"></i>
        Download started! Check your downloads folder.
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// Add interactive effects (desktop only)
function addInteractiveEffects() {
    // Only add mouse effects on non-touch devices
    if (!('ontouchstart' in window)) {
        document.addEventListener('mousemove', function(e) {
            const hero = document.querySelector('.hero');
            if (hero) {
                const rect = hero.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                if (y >= 0 && y <= rect.height) {
                    const xPercent = (x / rect.width) * 100;
                    const yPercent = (y / rect.height) * 100;

                    hero.style.background = `
                        radial-gradient(circle at ${xPercent}% ${yPercent}%,
                        rgba(255, 255, 255, 0.1) 0%,
                        transparent 50%),
                        linear-gradient(135deg, #ff4500 0%, #ff6b35 50%, #f7931e 100%)
                    `;
                }
            }
        });
    }
}

// Add touch-friendly interactions
function addTouchInteractions() {
    // Add touch feedback for buttons
    const interactiveElements = document.querySelectorAll('.download-btn, .req-item, .step, .screenshot-item');

    interactiveElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });

        element.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
}

// Initialize interactive effects
addInteractiveEffects();
addTouchInteractions();

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add parallax effect to hero section
const handleScroll = debounce(() => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
}, 10);

window.addEventListener('scroll', handleScroll);

// API placeholder for future download count integration
async function fetchDownloadCount() {
    try {
        // This is a placeholder for future API integration
        // const response = await fetch('/api/download-count');
        // const data = await response.json();
        // return data.count;
        
        // For now, return the current count
        return downloadCount;
    } catch (error) {
        console.log('Could not fetch download count:', error);
        return downloadCount;
    }
}

// Initialize download count on page load
fetchDownloadCount().then(count => {
    downloadCount = count;
    updateDownloadCount();
});
