import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
}

export const ScrollReveal = ({ children, width = "100%", className, delay = 0 }: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: `opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
      }}
      className={className}
    >
      {children}
    </div>
  );
};
