import React from "react";
import { cn } from "@/lib/utils";

type TextSize = "lg" | "md" | "sm" | "xs";

type Props<T extends React.ElementType> = {
  as?: T;
  size?: TextSize;
  className?: string;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

const sizeVariants: Record<TextSize, string> = {
  lg: "text-lg",
  md: "text-base",
  sm: "text-sm",
  xs: "text-xs",
};

const TextBody = <T extends React.ElementType = "p">({
  as,
  size = "md",
  className,
  children,
  ...props
}: Props<T>) => {
  const Component = as || "p";

  return (
    <Component
      className={cn(
        "text-muted-foreground leading-relaxed",
        sizeVariants[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default TextBody;