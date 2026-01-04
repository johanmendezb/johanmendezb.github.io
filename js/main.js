// Check for frontend view query parameter and apply changes
(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const isFrontendView = urlParams.get('frontend') === 'true' || urlParams.get('view') === 'frontend';
    
    if (isFrontendView) {
        // Update page title
        document.title = 'Johan Méndez Frontend Developer';
        
        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Johan Méndez is a frontend developer based in Colombia');
        }
        
        // Update header title
        const headerTitle = document.querySelector('.header-title');
        if (headerTitle) {
            headerTitle.textContent = 'Frontend Developer';
        }
        
        // Toggle profile text visibility
        const fullstackTexts = document.querySelectorAll('.profile-text-fullstack');
        const frontendTexts = document.querySelectorAll('.profile-text-frontend');
        
        fullstackTexts.forEach(el => el.style.display = 'none');
        frontendTexts.forEach(el => el.style.display = 'block');
    }
})();
