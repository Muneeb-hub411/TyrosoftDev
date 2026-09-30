import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      icon,
      iconPosition = "right",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07050B] disabled:opacity-50 disabled:pointer-events-none rounded-xl active:scale-[0.98]";

    const variants = {
      primary:
        "bg-[#6D28D9] hover:bg-[#8B5CF6] text-white shadow-lg shadow-[rgba(109,40,217,0.3)] hover:shadow-[rgba(139,92,246,0.45)] border border-[rgba(167,139,250,0.3)]",
      secondary:
        "bg-[#15101F] hover:bg-[#1E172E] text-[#EDEAF5] border border-[rgba(167,139,250,0.18)] hover:border-[rgba(167,139,250,0.4)] shadow-sm",
      outline:
        "bg-transparent text-[#EDEAF5] border border-[rgba(167,139,250,0.25)] hover:bg-[#15101F] hover:border-[#8B5CF6]",
      ghost:
        "bg-transparent text-[#A78BFA] hover:text-white hover:bg-[rgba(109,40,217,0.12)]",
    };

    const sizes = {
      sm: "text-xs px-3.5 py-2 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
    };

    const combinedClassName = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    const content = (
      <>
        {icon && iconPosition === "left" && (
          <span className="shrink-0">{icon}</span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="shrink-0">{icon}</span>
        )}
      </>
    );

    if (href) {
      return (
        <Link href={href} className={combinedClassName}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={combinedClassName}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
