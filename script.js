// ============================================
// HIỆU ỨNG ĐỘNG CHO POSTER
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // CTA button click handler
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            console.log('CTA button clicked');
        });
    }
    
    // Floating animation cho shapes
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        const delay = index * 0.5;
        const duration = 4 + index;
        shape.style.animation = `floatShape ${duration}s ease-in-out ${delay}s infinite`;
    });
    
    // Mouse move parallax effect nhẹ cho nhân vật (desktop only)
    const modelImg = document.querySelector('.modelImg');
    const hero = document.querySelector('.hero');
    const isMobile = window.innerWidth <= 768;
    
    if (modelImg && hero && !isMobile) {
        hero.addEventListener('mousemove', function(e) {
            const rect = hero.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            
            const moveX = (x - 0.5) * 10;
            const moveY = (y - 0.5) * 10;
            
            // Lấy transform hiện tại từ animation float
            const currentTransform = modelImg.style.transform || '';
            const baseTransform = currentTransform.includes('translate') 
                ? currentTransform.split('translateY')[0] 
                : 'translate(8px, 10px)';
            
            modelImg.style.transform = `${baseTransform} translate(${moveX}px, ${moveY}px)`;
        });
        
        hero.addEventListener('mouseleave', function() {
            modelImg.style.transform = '';
        });
    }
    
    // ============================================
    // HIỆU ỨNG TEXT
    // ============================================
    
    // Typing effect cho title
    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) {
        const text = mainTitle.textContent;
        mainTitle.textContent = '';
        mainTitle.style.opacity = '1';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < text.length) {
                mainTitle.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
                // Thêm glow effect sau khi typing xong
                mainTitle.style.textShadow = '2px 2px 6px rgba(0, 0, 0, 0.6), 0 0 20px rgba(30, 109, 255, 0.3)';
            }
        }, 80);
    }
    
    // Fade in từng từ cho subtitle
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
        const text = subtitle.textContent;
        const words = text.split('•');
        subtitle.innerHTML = '';
        
        words.forEach((word, index) => {
            const span = document.createElement('span');
            span.textContent = word.trim();
            span.style.opacity = '0';
            span.style.transition = 'opacity 0.6s ease';
            if (index < words.length - 1) {
                span.textContent += ' • ';
            }
            subtitle.appendChild(span);
            
            setTimeout(() => {
                span.style.opacity = '1';
            }, 1000 + index * 200);
        });
    }
    
    // Slide in và glow cho bullet items
    const bulletItems = document.querySelectorAll('.bullet-list li');
    bulletItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
            
            // Thêm glow effect sau khi slide in
            setTimeout(() => {
                item.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.3)';
                setTimeout(() => {
                    item.style.textShadow = '1px 1px 3px rgba(0, 0, 0, 0.5)';
                }, 500);
            }, 300);
        }, 1500 + index * 150);
    });
    
    // Pulse effect cho CTA button text
    const ctaButtonText = ctaButton?.textContent;
    if (ctaButton && ctaButtonText) {
        setInterval(() => {
            ctaButton.style.textShadow = '0 0 15px rgba(255, 255, 255, 0.5)';
            setTimeout(() => {
                ctaButton.style.textShadow = 'none';
            }, 600);
        }, 3000);
    }
    
    // Glow effect cho tag
    const tag = document.querySelector('.tag');
    if (tag) {
        setInterval(() => {
            tag.style.boxShadow = '0 0 15px rgba(30, 109, 255, 0.6)';
            setTimeout(() => {
                tag.style.boxShadow = 'none';
            }, 800);
        }, 4000);
    }
    
    // Text reveal animation cho service badges
    const serviceBadges = document.querySelectorAll('.service-badge');
    serviceBadges.forEach((badge, index) => {
        badge.style.opacity = '0';
        badge.style.transform = 'scale(0.8)';
        badge.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            badge.style.opacity = '1';
            badge.style.transform = 'scale(1)';
        }, 2000 + index * 200);
    });
    
    // ============================================
    // WATER EFFECT
    // ============================================
    function triggerWaterEffect() {
        const waterContainer = document.getElementById('water-effect');
        const modelImg = document.querySelector('.modelImg');
        const heroRight = document.querySelector('.hero__right');
        
        if (!waterContainer || !modelImg || !heroRight) return;
        
        // Activate water effect
        waterContainer.classList.add('active');
        modelImg.classList.add('water-effect');
        heroRight.classList.add('water-active');
        
        // Remove classes after animation (longest animation is ~3.8s for mist)
        setTimeout(() => {
            waterContainer.classList.remove('active');
            modelImg.classList.remove('water-effect');
            heroRight.classList.remove('water-active');
        }, 4000); // Match longest animation duration + buffer
    }
    
    // Auto-trigger water effect every 3-5 seconds (desktop only to tránh giật ảnh trên mobile)
    function startWaterLoop() {
        const interval = 3000 + Math.random() * 2000; // 3-5 seconds
        
        setTimeout(() => {
            triggerWaterEffect();
            startWaterLoop(); // Loop
        }, interval);
    }
    
    // Start water loop after page load (skip mobile để tránh giật ảnh)
    if (!isMobile) {
        setTimeout(() => {
            startWaterLoop();
        }, 2000); // Start after 2 seconds
    }
});

