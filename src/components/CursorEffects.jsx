import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CursorEffects = () => {
  const cursorGlowRef = useRef(null);
  const cursorGradientRef = useRef(null);
  const particlesRef = useRef([]);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let lastMoveTime = Date.now();
    let idleTimeout = null;
    let particles = [];

    // Create floating particles
    const createParticles = () => {
      const particleContainer = document.createElement('div');
      particleContainer.className = 'particles-container';
      particleContainer.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1;';
      document.body.appendChild(particleContainer);

      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 6}s`;
        particle.style.animationDuration = `${4 + Math.random() * 4}s`;
        particleContainer.appendChild(particle);
        particles.push(particle);
      }

      particlesRef.current = particles;
      return particleContainer;
    };

    const particleContainer = createParticles();

    // Handle mouse move
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      lastMoveTime = Date.now();
      setIsMoving(true);

      // Update cursor glow position
      if (cursorGlowRef.current) {
        gsap.to(cursorGlowRef.current, {
          left: mouseX,
          top: mouseY,
          duration: 0.1,
          ease: 'power2.out',
        });
      }

      // Update gradient position
      if (cursorGradientRef.current) {
        const xPercent = (mouseX / window.innerWidth) * 100;
        const yPercent = (mouseY / window.innerHeight) * 100;
        cursorGradientRef.current.style.setProperty('--mouse-x', `${xPercent}%`);
        cursorGradientRef.current.style.setProperty('--mouse-y', `${yPercent}%`);
        cursorGradientRef.current.classList.add('active');
      }

      // Magnetic effect on interactive elements
      const interactiveElements = document.querySelectorAll('button, a, .magnetic');
      interactiveElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = mouseX - centerX;
        const distanceY = mouseY - centerY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        // If cursor is within 100px of element
        if (distance < 100) {
          const strength = (100 - distance) / 100;
          const moveX = (distanceX / distance) * 20 * strength;
          const moveY = (distanceY / distance) * 20 * strength;

          gsap.to(el, {
            x: moveX,
            y: moveY,
            duration: 0.3,
            ease: 'power2.out',
          });
        } else {
          gsap.to(el, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)',
          });
        }
      });

      // Parallax effect on sections
      const parallaxElements = document.querySelectorAll('section');
      parallaxElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const centerX = window.innerWidth / 2;
          const centerY = window.innerHeight / 2;
          const moveX = (mouseX - centerX) / 50;
          const moveY = (mouseY - centerY) / 50;

          gsap.to(el, {
            x: moveX,
            y: moveY,
            duration: 0.5,
            ease: 'power1.out',
          });
        }
      });

      // Attract particles to cursor
      particlesRef.current.forEach((particle, i) => {
        const rect = particle.getBoundingClientRect();
        const particleX = rect.left + rect.width / 2;
        const particleY = rect.top + rect.height / 2;
        const distanceX = mouseX - particleX;
        const distanceY = mouseY - particleY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        if (distance < 200) {
          const strength = (200 - distance) / 200;
          const attractX = (distanceX / distance) * 30 * strength;
          const attractY = (distanceY / distance) * 30 * strength;

          gsap.to(particle, {
            x: attractX,
            y: attractY,
            duration: 0.5,
            ease: 'power2.out',
          });
        } else {
          gsap.to(particle, {
            x: 0,
            y: 0,
            duration: 1,
            ease: 'power2.out',
          });
        }
      });

      // Reset idle timeout
      clearTimeout(idleTimeout);
      idleTimeout = setTimeout(() => {
        setIsMoving(false);
        if (cursorGradientRef.current) {
          cursorGradientRef.current.classList.remove('active');
        }
      }, 500);
    };

    // Handle mouse down (clicking)
    const handleMouseDown = () => {
      if (cursorGlowRef.current) {
        cursorGlowRef.current.classList.add('clicking');
      }

      // Create ripple effect
      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      ripple.style.left = `${mouseX}px`;
      ripple.style.top = `${mouseY}px`;
      document.body.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    const handleMouseUp = () => {
      if (cursorGlowRef.current) {
        cursorGlowRef.current.classList.remove('clicking');
      }
    };

    // Tilt effect on hover
    const handleTiltHover = (e) => {
      const tiltElements = document.querySelectorAll('.tilt-effect');
      tiltElements.forEach((el) => {
        if (e.target.closest('.tilt-effect') === el) {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -10;
          const rotateY = ((x - centerX) / centerX) * 10;

          gsap.to(el, {
            rotateX: rotateX,
            rotateY: rotateY,
            duration: 0.3,
            ease: 'power2.out',
          });
        }
      });
    };

    const handleTiltLeave = (e) => {
      if (e.target.classList.contains('tilt-effect')) {
        gsap.to(e.target, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: 'elastic.out(1, 0.3)',
        });
      }
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleTiltHover);
    document.addEventListener('mouseout', handleTiltLeave);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleTiltHover);
      document.removeEventListener('mouseout', handleTiltLeave);
      clearTimeout(idleTimeout);
      particleContainer.remove();
    };
  }, []);

  return (
    <>
      {/* Cursor gradient background */}
      <div ref={cursorGradientRef} className="cursor-gradient" />

      {/* Custom cursor glow */}
      <div ref={cursorGlowRef} className="cursor-glow" />
    </>
  );
};

export default CursorEffects;
