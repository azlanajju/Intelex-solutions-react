import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Performance optimization: Use will-change for animated elements
const optimizeForAnimation = (element) => {
  if (element) {
    gsap.set(element, { willChange: "transform, opacity" });
  }
};

// Cleanup function to remove will-change
const cleanupAnimation = (element) => {
  if (element) {
    gsap.set(element, { willChange: "auto" });
  }
};

// Custom hook for GSAP animations
export const useGSAP = (callback, dependencies = []) => {
  const scope = useRef();

  useEffect(() => {
    if (scope.current) {
      const ctx = gsap.context(callback, scope);
      return () => ctx.revert();
    }
  }, dependencies);

  return scope;
};

// Hero text animation with stagger
export const animateHeroText = (elements) => {
  if (!elements || elements.length === 0) return;

  const tl = gsap.timeline({ delay: 0.2 });

  elements.forEach((element, index) => {
    if (element) {
      optimizeForAnimation(element);
      tl.fromTo(
        element,
        {
          opacity: 0,
          y: 60,
          rotationX: -15,
          transformOrigin: "50% 50% -50px",
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
        },
        index * 0.15
      );
    }
  });

  return tl;
};

// Background gradient animation
export const animateBackgroundGradient = (element) => {
  if (!element) return;

  const tl = gsap.timeline({ repeat: -1, yoyo: true });

  tl.to(element, {
    backgroundPosition: "200% 200%",
    duration: 8,
    ease: "none",
  });

  return tl;
};

// Parallax effect for background elements
export const createParallaxEffect = (elements, speed = 0.5) => {
  if (!elements) return;

  // Convert to array if it's not already
  const elementsArray = Array.isArray(elements) ? elements : Array.from(elements);

  if (elementsArray.length === 0) return;

  elementsArray.forEach((element) => {
    if (element) {
      optimizeForAnimation(element);

      gsap.to(element, {
        yPercent: -50 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  });
};

// Scroll-triggered animations for sections
export const createScrollAnimations = (config) => {
  const { trigger, elements, animation = "fadeInUp", stagger = 0.1, delay = 0, duration = 1, ease = "power2.out" } = config;

  if (!elements) return;

  // Convert to array if it's not already
  const elementsArray = Array.isArray(elements) ? elements : [elements];

  if (elementsArray.length === 0) return;

  const animations = {
    fadeInUp: {
      from: { opacity: 0, y: 60 },
      to: { opacity: 1, y: 0 },
    },
    fadeInLeft: {
      from: { opacity: 0, x: -60 },
      to: { opacity: 1, x: 0 },
    },
    fadeInRight: {
      from: { opacity: 0, x: 60 },
      to: { opacity: 1, x: 0 },
    },
    scaleIn: {
      from: { opacity: 0, scale: 0.8 },
      to: { opacity: 1, scale: 1 },
    },
    slideInUp: {
      from: { opacity: 0, y: 100 },
      to: { opacity: 1, y: 0 },
    },
  };

  const animConfig = animations[animation] || animations.fadeInUp;

  elementsArray.forEach((element, index) => {
    if (element) {
      optimizeForAnimation(element);

      gsap.fromTo(element, animConfig.from, {
        ...animConfig.to,
        duration,
        ease,
        delay: delay + index * stagger,
        scrollTrigger: {
          trigger: trigger || element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });
    }
  });
};

// Advanced button animations
export const createButtonAnimations = (button) => {
  if (!button) return;

  optimizeForAnimation(button);

  // Entrance animation
  gsap.fromTo(
    button,
    {
      opacity: 0,
      scale: 0.8,
      rotation: -5,
    },
    {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
      delay: 0.5,
    }
  );

  // Hover animations
  const hoverTl = gsap.timeline({ paused: true });

  hoverTl
    .to(button, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    })
    .to(
      button,
      {
        boxShadow: "0 20px 40px rgba(20, 184, 166, 0.4)",
        duration: 0.3,
        ease: "power2.out",
      },
      0
    );

  // Click animation
  const clickTl = gsap.timeline({ paused: true });

  clickTl.to(button, {
    scale: 0.95,
    duration: 0.1,
    ease: "power2.inOut",
  });

  // Event listeners
  const handleMouseEnter = () => hoverTl.play();
  const handleMouseLeave = () => hoverTl.reverse();
  const handleMouseDown = () => clickTl.play();
  const handleMouseUp = () => clickTl.reverse();

  button.addEventListener("mouseenter", handleMouseEnter);
  button.addEventListener("mouseleave", handleMouseLeave);
  button.addEventListener("mousedown", handleMouseDown);
  button.addEventListener("mouseup", handleMouseUp);

  // Cleanup function
  return () => {
    cleanupAnimation(button);
    button.removeEventListener("mouseenter", handleMouseEnter);
    button.removeEventListener("mouseleave", handleMouseLeave);
    button.removeEventListener("mousedown", handleMouseDown);
    button.removeEventListener("mouseup", handleMouseUp);
  };
};

// Floating animation for decorative elements
export const createFloatingAnimation = (elements, options = {}) => {
  const { duration = 3, y = 20, rotation = 5, ease = "power1.inOut" } = options;

  if (!elements) return;

  // Convert to array if it's not already
  const elementsArray = Array.isArray(elements) ? elements : Array.from(elements);

  if (elementsArray.length === 0) return;

  elementsArray.forEach((element, index) => {
    if (element) {
      optimizeForAnimation(element);

      gsap.to(element, {
        y: y,
        rotation: rotation,
        duration: duration,
        ease: ease,
        repeat: -1,
        yoyo: true,
        delay: index * 0.5,
      });
    }
  });
};

// Performance optimization: Reduce motion for users who prefer it
export const respectReducedMotion = () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    gsap.globalTimeline.timeScale(0.1);
  }

  return prefersReducedMotion;
};

// Cleanup function for all animations
export const cleanupAllAnimations = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  gsap.killTweensOf("*");
};

// Responsive animation adjustments
export const adjustAnimationsForScreenSize = () => {
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    // Reduce animation intensity on mobile
    gsap.globalTimeline.timeScale(0.8);
  } else {
    gsap.globalTimeline.timeScale(1);
  }
};

// Simple horizontal scroll animation
export const createHorizontalScrollAnimation = (container, triggerElement) => {
  if (!container || !triggerElement) {
    console.log("Container or trigger element not found for horizontal scroll animation");
    return;
  }

  console.log("Setting up horizontal scroll animation for:", container);
  console.log("Trigger element:", triggerElement);

  // Get the total width of the horizontal content
  const totalWidth = container.scrollWidth;
  const viewportWidth = window.innerWidth;
  const scrollDistance = totalWidth - viewportWidth;

  console.log("Total width:", totalWidth);
  console.log("Viewport width:", viewportWidth);
  console.log("Scroll distance:", scrollDistance);

  // Create ScrollTrigger
  ScrollTrigger.create({
    trigger: triggerElement,
    start: "top top",
    end: `+=${scrollDistance}`,
    pin: true,
    scrub: 1,
    onUpdate: (self) => {
      const progress = self.progress;
      const x = -progress * scrollDistance;
      gsap.set(container, { x: x });
      console.log("Progress:", progress, "X:", x);
    },
    onEnter: () => console.log("Horizontal scroll started"),
    onLeave: () => console.log("Horizontal scroll ended"),
  });
};

// Initialize GSAP with performance optimizations
export const initializeGSAP = () => {
  // Respect user's motion preferences
  respectReducedMotion();

  // Adjust for screen size
  adjustAnimationsForScreenSize();

  // Listen for screen size changes
  window.addEventListener("resize", adjustAnimationsForScreenSize);

  // Set default ease
  gsap.defaults({ ease: "power2.out" });

  // Performance optimization
  gsap.config({
    force3D: true,
    nullTargetWarn: false,
  });
};

export default {
  useGSAP,
  animateHeroText,
  animateBackgroundGradient,
  createParallaxEffect,
  createScrollAnimations,
  createButtonAnimations,
  createFloatingAnimation,
  createHorizontalScrollAnimation,
  respectReducedMotion,
  cleanupAllAnimations,
  adjustAnimationsForScreenSize,
  initializeGSAP,
};
