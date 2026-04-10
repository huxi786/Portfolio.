import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const onMove = (e) => { pos.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener('mousemove', onMove);

    const onEnter = (e) => { if (e.target.closest('a, button, [role="button"]')) setHovering(true); };
    const onLeave = (e) => { if (e.target.closest('a, button, [role="button"]')) setHovering(false); };
    window.addEventListener('mouseover', onEnter);
    window.addEventListener('mouseout', onLeave);

    const loop = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
      }
      if (ringRef.current) {
        ring.current.x += (pos.current.x - ring.current.x) * 0.12;
        ring.current.y += (pos.current.y - ring.current.y) * 0.12;
        const size = hovering ? 48 : 32;
        ringRef.current.style.transform = `translate(${ring.current.x - size / 2}px, ${ring.current.y - size / 2}px)`;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onEnter);
      window.removeEventListener('mouseout', onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, [hovering]);

  // Hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-blue-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ willChange: 'transform' }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] border-2 transition-colors duration-200 ${
          hovering ? 'border-purple-400' : 'border-blue-400/60'
        }`}
        style={{ willChange: 'transform, width, height' }}
      />
    </>
  );
}
