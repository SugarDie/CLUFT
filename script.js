(function() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
})();

document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';

    const toggleBtn = document.getElementById('theme-btn');
    if(toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            let newTheme = theme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    const cloudBg = document.getElementById('cloud-bg');
    if(cloudBg) {
        const cloudCount = 5; 
        for (let i = 0; i < cloudCount; i++) {
            const cloud = document.createElement('div');
            cloud.classList.add('cloud');
            
            const width = Math.random() * 80 + 240; 
            const height = width * 0.35; 
            const baseTop = 12 + (i * 16);
            const exactTop = baseTop + (Math.random() * 4 - 2); 
            const duration = Math.random() * 15 + 45; 
            const delay = -(i * 14) - (Math.random() * 10); 

            cloud.style.width = `${width}px`;
            cloud.style.height = `${height}px`;
            cloud.style.top = `${exactTop}%`;
            cloud.style.animationDuration = `${duration}s`;
            cloud.style.animationDelay = `${delay}s`;
            
            cloudBg.appendChild(cloud);
        }
    }

    const links = document.querySelectorAll('.nav-links a, .logo, .cta-btn');
    const overlay = document.getElementById('transition-overlay');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const target = link.getAttribute('href');
            if (target && target.endsWith('.html')) {
                e.preventDefault();
                if(overlay) overlay.classList.add('active');
                document.body.style.opacity = '0';
                setTimeout(() => {
                    window.location.href = target;
                }, 650); 
            }
        });
    });
});
