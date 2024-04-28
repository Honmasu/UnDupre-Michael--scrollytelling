gsap.registerPlugin(ScrollTrigger);

// GSAP animation for the arrow icon
gsap.to(".scroll-icon", {
    y: -10,
    duration: 1,
    repeat: -1,
    yoyo: true
});

// GSAP animation for rotating the CTA icon
gsap.to("#cta-icon", {
    rotation: 360,
    duration: 2, 
    repeat: -1,  
    ease: "none" 
});

// GSAP animation for moving the CTA icon up and down
gsap.to("#cta-icon", {
    y: 10,
    duration: 1,
    yoyo: true,
    repeat: -1
});

// Scroll event listener to add/remove scrolling class
window.addEventListener('scroll', function() {
    document.body.classList.add('is-scrolling');

    clearTimeout(scrollTimer);

    scrollTimer = setTimeout(function() {
        document.body.classList.remove('is-scrolling');
    }, 100);
});