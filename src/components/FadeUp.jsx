import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function FadeUp({ children, className = "", style }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={`fade-up-element ${className}`} style={style}>
      {children}
    </div>
  );
}
