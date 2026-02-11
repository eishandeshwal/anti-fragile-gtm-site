import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useWindowScroll } from "react-use";

const Navbar = () => {
  const navContainerRef = useRef(null);
  const logoRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let lastTime = Date.now();
    let timeoutId = null;

    const handleMouseMove = (e) => {
      const now = Date.now();
      const dt = now - lastTime;

      // Calculate speed (px/ms)
      const dx = Math.abs(e.screenX - lastX);
      const dy = Math.abs(e.screenY - lastY);
      const speed = Math.hypot(dx, dy) / (dt || 1);

      // Calculate distance from logo
      if (logoRef.current) {
        const logoRect = logoRef.current.getBoundingClientRect();
        const logoCenterX = logoRect.left + logoRect.width / 2;
        const logoCenterY = logoRect.top + logoRect.height / 2;
        const distanceX = e.clientX - logoCenterX;
        const distanceY = e.clientY - logoCenterY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

        // Normalize speed (adjust divisor to tune sensitivity)
        // 0.0 = Black Swan (#000000)
        // 1.0 = Visceral Red (#8A0303)
        const speedIntensity = Math.min(speed / 4, 1);

        // Proximity intensity (stronger when cursor is closer)
        const proximityIntensity = Math.max(0, 1 - distance / 300);

        // Combine both effects
        const totalIntensity = Math.min(speedIntensity + proximityIntensity, 1);

        // Interpolate color
        // Black: 0, 0, 0
        // Red: 138, 3, 3
        const r = Math.round(138 * totalIntensity);
        const g = Math.round(3 * totalIntensity);
        const b = Math.round(3 * totalIntensity);

        // Add scale effect based on proximity
        const scale = 1 + (proximityIntensity * 0.15);

        gsap.to(logoRef.current, {
          color: `rgb(${r}, ${g}, ${b})`,
          scale: scale,
          duration: 0.2,
          ease: "power1.out",
          overwrite: "auto",
        });

        // Add text shadow when intense
        if (totalIntensity > 0.5) {
          const shadowBlur = totalIntensity * 20;
          logoRef.current.style.textShadow = `0 0 ${shadowBlur}px rgba(138, 3, 3, ${totalIntensity * 0.8})`;
        } else {
          logoRef.current.style.textShadow = 'none';
        }
      }

      lastX = e.screenX;
      lastY = e.screenY;
      lastTime = now;

      // Reset to black when mouse stops
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (logoRef.current) {
          gsap.to(logoRef.current, {
            color: "rgb(0, 0, 0)",
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          });
          logoRef.current.style.textShadow = 'none';
        }
      }, 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  // Floating Nav Logic - Enhanced visibility on scroll
  useEffect(() => {
    if (currentScrollY > 50) {
      navContainerRef.current.classList.add("floating-nav");
      navContainerRef.current.classList.add("bg-bone-white/95");
    } else {
      navContainerRef.current.classList.remove("floating-nav");
      navContainerRef.current.classList.remove("bg-bone-white/95");
    }
  }, [currentScrollY]);

  const navItems = ["Solution", "Pricing", "FAQ"];

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-0 z-50 h-20 transition-all duration-700 border-b border-black-swan/30 bg-bone-white shadow-sm sm:inset-x-0"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2 px-6 md:px-10">
        <nav className="flex size-full items-center justify-between">
          {/* Logo with "Wish for the Wind" interaction */}
          <div className="flex items-center gap-7">
            <a
              href="#"
              ref={logoRef}
              className="font-garamond text-3xl font-bold tracking-tighter text-black-swan transition-colors"
              style={{ color: '#000000' }}
            >
              Anti-Fragile GTM
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-hover-btn font-garamond text-black-swan hover:text-visceral-red transition-colors uppercase tracking-widest text-sm magnetic"
              >
                {item}
              </a>
            ))}

            <a
              href="#cta"
              className="ml-4 px-6 py-2 bg-black-swan text-bone-white font-garamond uppercase tracking-widest text-sm hover:bg-visceral-red transition-colors duration-300 magnetic glow-pulse"
            >
              Get Audit
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
