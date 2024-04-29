gsap.registerPlugin(ScrollTrigger);

gsap.to(".fleche", {
  y: 20,
  duration: 1,
  ease: "power1.inOut",
  yoyo: true,
  repeat: -1
});


gsap.to('.monstre1', {
  x: '-1080',
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 0%',
    end: 'bottom 50%',
    trigger: '#Chapitre2',
  }
})

gsap.to('.monstre2', {
  x: '1080',
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 20%',
    end: 'bottom 60%',
    trigger: '#Chapitre2',
  }
})

gsap.to('.monstre3', {
  x: '1080',
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 20%',
    end: 'bottom 60%',
    trigger: '#Chapitre3',
  }
})

gsap.to('.monstre4', {
  x: '-1500',
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 0%',
    end: 'bottom 50%',
    trigger: '#Chapitre3',
  }
})

gsap.to('.pod', {
  x: '-1800',
  y: '2300',
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 0%',
    end: 'bottom 10%',
    trigger: 'header',
  }
})

gsap.to('.pod_solo', {
  y: '400',
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 0%',
    end: 'bottom 90%',
    trigger: '#Chapitre1',
  }
})

gsap.to('.boom', {
  opacity: '1',
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 00%',
    end: 'bottom 40%',
    trigger: '#Chapitre1',
  }
})

gsap.to('.nade', {
  y: '1700',
  rotate: '360',
  scrollTrigger: {
    scrub: true,
    markers: true,
    start: 'top 0%',
    end: 'bottom 5%',
    trigger: '#Chapitre2',
  }
})

