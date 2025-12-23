// ============================================
// HIỆU ỨNG ĐỘNG CHO POSTER
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // BOTTOM SHEET MODAL (Mobile)
    // ============================================
    const bottomSheetOverlay = document.getElementById('bottom-sheet-overlay');
    const bottomSheet = document.getElementById('bottom-sheet');
    const pricingMobileBtn = document.getElementById('pricing-mobile-btn');
    const bottomSheetClose = document.getElementById('bottom-sheet-close');
    
    function openBottomSheet() {
        if (bottomSheetOverlay && bottomSheet) {
            bottomSheetOverlay.classList.add('open');
            bottomSheet.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
    }
    
    function closeBottomSheet() {
        if (bottomSheetOverlay && bottomSheet) {
            bottomSheetOverlay.classList.remove('open');
            bottomSheet.classList.remove('open');
            document.body.style.overflow = '';
        }
    }
    
    // Open bottom sheet
    if (pricingMobileBtn) {
        pricingMobileBtn.addEventListener('click', openBottomSheet);
    }
    
    // Close bottom sheet
    if (bottomSheetClose) {
        bottomSheetClose.addEventListener('click', closeBottomSheet);
    }
    
    // Close on overlay click
    if (bottomSheetOverlay) {
        bottomSheetOverlay.addEventListener('click', function(e) {
            if (e.target === bottomSheetOverlay) {
                closeBottomSheet();
            }
        });
    }
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && bottomSheet && bottomSheet.classList.contains('open')) {
            closeBottomSheet();
        }
    });
    
    // ============================================
    // PRICING TAB SWITCHING (Desktop + Mobile Sheet)
    // ============================================
    const pricingTabs = document.querySelectorAll('.pricing__tab');
    const pricingPanels = document.querySelectorAll('.pricing__panel');
    const mainCta = document.getElementById('main-cta');
    
    // Default: Offline tab is active
    let currentTab = 'offline';
    
    // Tab switching function (works for both desktop and mobile sheet)
    function switchTab(targetTab) {
        // Update all tabs (desktop + mobile bottom sheet)
        pricingTabs.forEach(tab => {
            const isActive = tab.getAttribute('data-tab') === targetTab;
            tab.classList.toggle('pricing__tab--active', isActive);
            tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        // Update all panels
        pricingPanels.forEach(panel => {
            const isActive = panel.getAttribute('data-panel') === targetTab;
            panel.classList.toggle('pricing__panel--active', isActive);
        });
        
        // Update current tab and CTA
        currentTab = targetTab;
        updateMainCTA();
    }
    
    // Update CTA text and href based on active tab
    function updateMainCTA() {
        if (!mainCta) return;
        
        if (currentTab === 'online') {
            mainCta.textContent = 'ĐĂNG KÝ COACHING ONLINE';
        } else {
            mainCta.textContent = 'INBOX ĐỂ GIỮ LỊCH';
        }
        // Always use Zalo link
        mainCta.setAttribute('href', 'https://zalo.me/0903536212');
    }
    
    // Initialize CTA
    updateMainCTA();
    
    // Tab switching handler (works for both desktop and mobile)
    pricingTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });
    
    // ============================================
    // PRICING CARD BUTTON HANDLERS
    // ============================================
    const cardButtons = document.querySelectorAll('.pricing__card-button');
    
    cardButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectValue = this.getAttribute('data-select');
            const card = this.closest('.pricing__card');
            
            // Highlight selected card
            if (card) {
                card.classList.add('is-selected');
                setTimeout(() => {
                    card.classList.remove('is-selected');
                }, 1500);
            }
            
            // Handle based on selection - All buttons redirect to Zalo
            if (selectValue.startsWith('online-')) {
                // Switch to online tab if not already
                if (currentTab !== 'online') {
                    const onlineTab = document.querySelector('[data-tab="online"]');
                    if (onlineTab) {
                        switchTab('online', onlineTab);
                    }
                }
                // Close bottom sheet if open (mobile)
                closeBottomSheet();
                // Redirect to Zalo
                window.location.href = 'https://zalo.me/0903536212';
            } else if (selectValue.startsWith('offline-')) {
                // Switch to offline tab if not already
                if (currentTab !== 'offline') {
                    const offlineTab = document.querySelector('[data-tab="offline"]');
                    if (offlineTab) {
                        switchTab('offline', offlineTab);
                    }
                }
                // Close bottom sheet if open (mobile)
                closeBottomSheet();
                // Redirect to Zalo
                window.location.href = 'https://zalo.me/0903536212';
            }
        });
    });
    
    // ============================================
    // MAIN CTA BUTTON HANDLER
    // ============================================
    // CTA is now an anchor tag, so it will handle navigation naturally
    // We just need to update the href when tab changes
    
    // Tối ưu: bỏ floating animation và parallax để tăng performance
    
    // ============================================
    // HIỆU ỨNG TEXT
    // ============================================
    
    // Tối ưu: bỏ các animation phức tạp để tăng performance
    // Giữ lại CSS animations đơn giản từ styles.css
    
    // Tối ưu: bỏ water effect để tăng performance
});

