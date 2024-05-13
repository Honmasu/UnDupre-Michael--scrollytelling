gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MorphSVGPlugin);

/* ---- Animation header ----- */
gsap.timeline({
  scrollTrigger: {
    pin: true,
    scrub: true,
    markers: true,
    start: 'top 0%',
    end: 'bottom 100%',
    trigger: '.pod',
  }
}).to(".start", {});

gsap.timeline({
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 0%',
    end: 'bottom 10%',
    trigger: 'header',
  }
}).to('.pod', {
  x: '-180vh',
  y: '230vh'
})

gsap.to(".fleche", {
  y: '2vh',
  duration: 1,
  ease: "power1.inOut",
  yoyo: true,
  repeat: -1
});

/* ---- Animation chapter 1 ----- */
gsap.timeline({
  scrollTrigger: {
    pin: true,
    scrub: true,
    markers: true,
    start: 'top 0%',
    end: '100%',
    trigger: '#chapitre1',
  }
}).to(".pod_solo", {});

gsap.timeline({
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 0%',
    end: '+=40%',
    trigger: '#Chapitre1',
  }
}).to('.boom', {
  opacity: '1'
});

/* ---- Animation chapter 2 ----- */
gsap.timeline({
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 70%',
    end: '0%',
    trigger: '#Chapitre2',
  }
}).to('.monstre1', {
  x: '-50vw'
});

gsap.timeline({
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 70%',
    end: '0%',
    trigger: '#Chapitre2',
  }
}).to('.monstre2', {
  x: '50vw'
});

gsap.timeline({
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 0%',
    end: '+=90%',
    trigger: '#Chapitre1',
  }
}).to('.pod_solo', {
  y: '20vh'
});

gsap.timeline({
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 0%',
    end: '+=100%',
    trigger: '#Chapitre2',
  }
}).to('.nade', {
  y: '120vh',
  rotate: '360'
});

/* ---- Animation chapter 3 ----- */
gsap.timeline({
  scrollTrigger: {
    pin: true,
    scrub: true,
    markers: true,
    start: 'top 20%',
    end: '60%',
    trigger: '#chapitre3',
  }
}).to(".monstre3", {});

gsap.timeline({
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 20%',
    end: '60%',
    trigger: '#Chapitre3',
  }
}).to('.monstre3', {
  x: '50vw'
});

gsap.timeline({
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 0%',
    end: '+=50%',
    trigger: '#Chapitre3',
  }
}).to('.monstre4', {
  x: '-50vw'
});

/* ---- Animation chapter 4 ----- */
const parallaxTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: "#Chapitre4",
    start: 'top 0%',
    end: '+=50%',
    toggleActions: "restart pause resume pause"
  }
});

parallaxTimeline.to('.layer3', { yPercent: -20 })
  .to('.layer2', { yPercent: -40 }, "-=0.5")
  .to('.layer1', { yPercent: -60 }, "-=0.5");

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
    alignOrigin: [0.5, 0.5]
  }
});

/* ---- Animation chapter 6 ----- */
gsap.set("#soleil3", { x: 200, y: 200 });
gsap.to("#soleil3", {
  duration: 5,
  drawSVG: "0%",
  repeat: -1,
  yoyo: true,
});

/*-- morph -- */
gsap.set("#cercle", { x: -50, y: 200 });
gsap.set("#soleil", { x: 200, y: 200 });

gsap.to("#cercle", {
  duration: 3,
  morphSVG: "#soleil",
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});


gsap.set("#cercle2", { x: -50, y: 400 });
gsap.set("#soleil2", { x: 200, y: 200 });

gsap.to("#cercle2", {
  duration: 3,
  morphSVG: "#soleil2",
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});