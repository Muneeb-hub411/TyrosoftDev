import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
  hasHairlineBorder?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = "",
  hasHairlineBorder = true,
  ...props
}) => {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-24 lg:py-32 relative",
        hasHairlineBorder && "border-b border-[rgba(167,139,250,0.12)]",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
