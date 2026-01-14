import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: "fade-in-up" | "fade-in-scale" | "slide-in-left" | "slide-in-right";
  delay?: number;
  className?: string;
}

/**
 * Componente wrapper che applica animazioni quando la sezione entra nel viewport
 */
export default function AnimatedSection({
  children,
  animation = "fade-in-up",
  delay = 0,
  className = "",
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
    triggerOnce: true,
  });

  const animationClass = isInView ? `animate-${animation}` : "opacity-0";

  return (
    <div
      ref={ref}
      className={`${animationClass} ${className}`}
      style={{
        animationDelay: isInView ? `${delay}s` : "0s",
        transition: "opacity 0.6s ease-out",
      }}
    >
      {children}
    </div>
  );
}
