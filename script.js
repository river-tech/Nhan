// ============================================
// RIVER NGUYEN - Portfolio Script
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    // ============================================
    // SOCIAL LINKS HOVER EFFECTS
    // ============================================
    const socialLinks = document.querySelectorAll('.social-link');

    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-3px)';
        });
        link.addEventListener('mouseleave', function () {
            this.style.transform = '';
        });
    });

    // ============================================
    // CTA BUTTON
    // ============================================
    const mainCta = document.getElementById('main-cta');
    if (mainCta) {
        mainCta.textContent = 'LIÊN HỆ NGAY';
        mainCta.setAttribute('href', 'https://zalo.me/0903536212');
    }
});
