gsap.to(".scroll-icon", {
    y: -10,
    duration: 1,
    repeat: -1,
    yoyo: true
});


window.addEventListener('scroll', function() {
    document.body.classList.add('is-scrolling');

    clearTimeout(scrollTimer);

    scrollTimer = setTimeout(function() {
        document.body.classList.remove('is-scrolling');
    }, 100);
});