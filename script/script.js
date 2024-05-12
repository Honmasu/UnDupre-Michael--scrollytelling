gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);


/* ---- Animation header ----- */
gsap.to(".start",{
  scrollTrigger: {
    pin: true,
    scrub: true,
    markers: true,
    start: 'top 0%',
    end: 'bottom 100%',
    trigger: '.pod',
  },
})

gsap.to('.pod', {
  x: '-180vh',
  y: '230vh',
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 0%',
    end: 'bottom 10%',
    trigger: 'header',
  }
})

gsap.to(".fleche", {
  y: '2vh',
  duration: 1,
  ease: "power1.inOut",
  yoyo: true,
  repeat: -1
});

/* ---- Animation chapter 1 ----- */


gsap.to(".pod_solo",{
  scrollTrigger: {
    pin: true,
    scrub: true,
    markers: true,
    start: 'top 0%',
    end: 'bottom 100%',
    trigger: '#chapitre1',
  },
})

gsap.to('.boom', {
  opacity: '1',
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 0%',
    end: 'bottom 40%',
    trigger: '#Chapitre1',
  }
})

/* ---- Animation chapter 2 ----- */
gsap.to('.monstre1', {
  x: '-50vw',
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 0%',
    end: 'bottom 50%',
    trigger: '#Chapitre2',
  }
})

gsap.to('.monstre2', {
  x: '50vw',
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 20%',
    end: 'bottom 60%',
    trigger: '#Chapitre2',
  }
})

gsap.to('.pod_solo', {
  y: '20vh',
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 0%',
    end: 'bottom 90%',
    trigger: '#Chapitre1',
  }
})

gsap.to('.nade', {
  y: '120vh',
  rotate: '360',
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 0%',
    end: 'bottom 5%',
    trigger: '#Chapitre2',
  }
})

/* ---- Animation chapter 3 ----- */
gsap.to(".monstre3",{
  scrollTrigger: {
    pin: true,
    scrub: true,
    markers: true,
    start: 'top 0%',
    end: 'bottom 100%',
    trigger: '#chapitre3',
  },
})
gsap.to('.monstre3', {
  x: '50vw',
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 20%',
    end: 'bottom 60%',
    trigger: '#Chapitre3',
  }
})

gsap.to('.monstre4', {
  x: '-50vw',
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 0%',
    end: 'bottom 50%',
    trigger: '#Chapitre3',
  }
})

/* ---- Animation chapter 4 ----- */

const parallaxTimeline = gsap.timeline({
  scrollTrigger: {
      trigger: "#Chapitre4",
      start: 'top 0%',
      end: 'bottom 50%',
      toggleActions: "restart pause resume pause"
  }
});


parallaxTimeline.to('.layer3', { yPercent: -20 });
parallaxTimeline.to('.layer2', { yPercent: -40 }, "-=0.5");
parallaxTimeline.to('.layer1', { yPercent: -60 }, "-=0.5"); 

/* ---- Animation chapter 5 ----- */

const path = "M9,100c0,0,85.53,-185.58,199.91,-310.11c130,-100,280.81,-148.88,330.39,-148.88c138.87,0,275.55,67.71,370.05,134.47c110.09,98.85,203.33,237.79,317.71,367.77c140.09,138.89,334.44,267.75,623.37,267.75c122.23,0,306.62,-38.83,455.84,-84.43c177.97,-64.45,342.21,-208.88,447.78,-347.7c143.35,-177.75,144.43,-263.37,144.43,-263.37";


const tl = gsap.timeline({ repeat: -1, yoyo: true });
tl.to(".pod2", {
  duration: 5,
  motionPath: {
    trigger: "#chapter5",
    path: path,
    align: ".pod2",
    autoRotate: true,
    alignOrigin: [0.5, 0.5],

  }
});

/* ---- Animation chapter 6 ----- */
/*gsap.to(".cercle", {
  duration: 3, 
  morphSVG:{
    shape:".soleil", 
    shapeIndex:5
  }
});*/
  
gsap.timeline({
  scrollTrigger: {
      scrub: true,
      markers: true,
      start: 'top 0%',
      end: 'bottom 100%',
      trigger: '#Chapitre5',
  }
}).fromTo("#soleil1", {drawSVG:"0%"}, {
  drawSVG:"100%",
  duration: 500, // Adjust the duration as needed
});
























