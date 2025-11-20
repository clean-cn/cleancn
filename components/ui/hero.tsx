import * as React from "react";
import { cn } from "@/lib/utils";

const Hero = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(
        "flex min-h-[70vh] flex-col items-center justify-center bg-background px-6 py-32 text-center",
        "md:min-h-[80vh] md:py-40",
        className
      )}
      {...props}
    />
  )
);
Hero.displayName = "Hero";

const HeroTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
      className={cn(
        "font-bold leading-[1.1] tracking-tight text-foreground",
        "mb-6 max-w-4xl",
        "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
        className
      )}
    {...props}
  />
));
HeroTitle.displayName = "HeroTitle";

const HeroSubtitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "max-w-2xl text-lg leading-relaxed text-muted-foreground",
      "mb-10",
      "text-base sm:text-lg md:text-xl",
      className
    )}
    {...props}
  />
));
HeroSubtitle.displayName = "HeroSubtitle";

const HeroActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-wrap items-center justify-center gap-4",
      "mt-4",
      className
    )}
    {...props}
  />
));
HeroActions.displayName = "HeroActions";

export { Hero, HeroTitle, HeroSubtitle, HeroActions };

