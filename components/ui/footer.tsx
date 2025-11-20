import * as React from "react";
import { cn } from "@/lib/utils";

const Footer = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <footer
      ref={ref}
      className={cn(
        "border-t border-border bg-background px-6 py-12",
        className
      )}
      {...props}
    />
  )
);
Footer.displayName = "Footer";

const FooterContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mx-auto max-w-7xl", className)}
    {...props}
  />
));
FooterContent.displayName = "FooterContent";

const FooterSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("space-y-4", className)}
    {...props}
  />
));
FooterSection.displayName = "FooterSection";

const FooterTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-sm font-semibold text-foreground", className)}
    {...props}
  />
));
FooterTitle.displayName = "FooterTitle";

const FooterLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "text-sm text-muted-foreground transition-colors hover:text-foreground",
      className
    )}
    {...props}
  />
));
FooterLink.displayName = "FooterLink";

export { Footer, FooterContent, FooterSection, FooterTitle, FooterLink };

