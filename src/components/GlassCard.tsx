import { ReactNode, CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: CSSProperties;
}

const GlassCard = ({ children, className, hover = false, style }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass-card p-8",
        hover && "glass-card-hover",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlassCard;
