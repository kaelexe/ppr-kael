import React, { useEffect, useRef } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import { DotCanvas } from "./styles/DotField.styles";

interface Dot {
  x: number;
  y: number;
  radius: number;
  phase: number;
}

const DotField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const color = useColorModeValue("100, 107, 118", "181, 188, 199");

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement;
    const context = canvas?.getContext("2d");

    if (!canvas || !container || !context) {
      return;
    }

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: -1000, y: -1000 };
    let dots: Dot[] = [];
    let width = 0;
    let height = 0;
    let frame = 0;
    let lastDraw = 0;
    let visible = true;

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);

      dots.forEach((dot) => {
        const distance = Math.hypot(dot.x - pointer.x, dot.y - pointer.y);
        const proximity = motion.matches ? 0 : Math.max(0, 1 - distance / 115);
        const breath = motion.matches ? 0 : Math.sin(time / 1800 + dot.phase) * 0.3;
        const target = 1.1 + breath + proximity * proximity * 5.5;
        dot.radius = motion.matches ? 1.1 : dot.radius + (target - dot.radius) * 0.16;

        // Keep the field quiet around the text; nearby dots stay neutral.
        const edgeFade = Math.min(1, dot.x / 100, (width - dot.x) / 100);
        const opacity = (0.18 + proximity * 0.3) * Math.max(0.15, edgeFade);
        context.fillStyle = `rgba(${color}, ${opacity})`;
        context.beginPath();
        context.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        context.fill();
      });
    };

    const animate = (time: number) => {
      // Thirty frames per second is enough for this slow, decorative effect.
      if (time - lastDraw >= 1000 / 30) {
        draw(time);
        lastDraw = time;
      }
      frame = window.requestAnimationFrame(animate);
    };

    const syncAnimation = () => {
      window.cancelAnimationFrame(frame);
      frame = 0;
      if (!document.hidden && visible && !motion.matches) {
        frame = window.requestAnimationFrame(animate);
      } else {
        draw(0);
      }
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      const scale = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * scale);
      canvas.height = Math.round(height * scale);
      context.setTransform(scale, 0, 0, scale, 0, 0);
      dots = [];

      for (let y = 18; y < height; y += 34) {
        for (let x = 18; x < width; x += 34) {
          dots.push({ x, y, radius: 1.1, phase: x * 0.014 + y * 0.02 });
        }
      }
      draw(0);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (motion.matches || event.pointerType === "touch") {
        return;
      }
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
    };

    const resetPointer = () => {
      pointer.x = -1000;
      pointer.y = -1000;
    };

    const onMotionChange = () => {
      resetPointer();
      syncAnimation();
    };

    const resizeObserver = new ResizeObserver(resize);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncAnimation();
    });

    resizeObserver.observe(canvas);
    visibilityObserver.observe(canvas);
    container.addEventListener("pointermove", onPointerMove, { passive: true });
    container.addEventListener("pointerleave", resetPointer);
    document.addEventListener("visibilitychange", syncAnimation);
    motion.addEventListener("change", onMotionChange);
    resize();
    syncAnimation();

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", resetPointer);
      document.removeEventListener("visibilitychange", syncAnimation);
      motion.removeEventListener("change", onMotionChange);
    };
  }, [color]);

  return <DotCanvas ref={canvasRef} aria-hidden="true" />;
};

export default DotField;
