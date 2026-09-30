import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "purple" | "outline" | "muted";
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className = "",
  variant = "purple",
  icon,
}) => {
  const variants = {
    purple:
      "bg-[rgba(109,40,217,0.15)] text-[#A78BFA] border border-[rgba(167,139,250,0.22)]",
    outline:
      "bg-transparent text-[#EDEAF5] border border-[rgba(167,139,250,0.15)]",
    muted:
      "bg-[#15101F] text-[#8C8799] border border-white/5",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase",
        variants[variant],
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
