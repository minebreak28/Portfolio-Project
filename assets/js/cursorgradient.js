const gradientOverlay = document.querySelector('.gradient-overlay');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth * 100;
    const y = e.clientY / window.innerHeight * 100;
    const gradient = `radial-gradient(circle at ${x}% ${y}%, #e37682 0%, #5f4d93 100%)`;
    gradientOverlay.style.background = gradient;
});