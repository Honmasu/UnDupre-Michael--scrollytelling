gsap.registerPlugin(ScrollTrigger);

// Create a timeline for the bouncing animation
let tl = gsap.timeline({ repeat: -1 });

// Add tweens to the timeline to create the bouncing effect
tl.to("#cta-icon img", { y: -20, ease: "none" })
  .to("#cta-icon img", { y: 0, ease: "none" })
  .to("#cta-icon img", { y: 20, ease: "none" })
  .to("#cta-icon img", { y: 0, ease: "none" });