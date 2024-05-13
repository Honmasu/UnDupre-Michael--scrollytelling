gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MorphSVGPlugin);

/* ---- Animation header ----- */
/*utilisation du scrub*/
/*utilisation du pin*/

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


/* translate du spritesheet pod */
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

/* animation de la flèche */
gsap.to(".fleche", {
  y: '2vh',
  duration: 1,
  ease: "power1.inOut",
  yoyo: true,
  repeat: -1
});

/* ---- Animation chapter 1 ----- */
/*utilisation du scrub*/

gsap.timeline({
  scrollTrigger: {
    pin: true,
    scrub: true,
    markers: true,
    start: 'top 0%',
    end: '100%',
    trigger: '#Chapitre1',
  }
}).to(".pod_solo", {});

/* spritesheet du boom */
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
/*utilisation du scrub*/

/* transition du monstre 1 */
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

/* transition du monstre 2 */
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

/* possition du pod */
gsap.timeline({
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 0%',
    end: '90%',
    trigger: '#Chapitre1',
  }
}).to('.pod_solo', {
  y: '20vh'
});

/*transition du nade */
gsap.timeline({
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 0%',
    end: '300%',
    trigger: '.nade',
  }
}).to('.nade', {
  y: '120vh',
  rotate: '360'
});

/* ---- Animation chapter 3 ----- */
/*utilisation du scrub*/


/* transition du monstre 3 */
gsap.timeline({
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 100%',
    end: '0%',
    trigger: '#Chapitre3',
  }
}).to(".monstre3", {});


/* transition du monstre 3 */
gsap.timeline({
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 0%',
    end: '50%',
    trigger: '#Chapitre3',
  }
}).to('.monstre3', {
  x: '50vw'
});


/* transition du monstre 4 */
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

/* parallax repeat lors que l'on scroll vers le haut */
const parallaxTimeline = gsap.timeline({
  scrollTrigger: {
    pin: true,
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

/* pod suit le path */
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

/* draw svg */
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

/*-- morph 2-- */
gsap.set("#cercle2", { x: -50, y: 400 });
gsap.set("#soleil2", { x: 200, y: 200 });

gsap.to("#cercle2", {
  duration: 3,
  morphSVG: "#soleil2",
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});