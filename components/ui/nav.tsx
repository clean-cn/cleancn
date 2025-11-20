"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Nav = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      className={cn(
        "flex items-center justify-between border-b border-border bg-background px-6 py-4",
        className
      )}
      {...props}
    />
  )
);
Nav.displayName = "Nav";

const NavBrand = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<typeof Link>
>(({ className, ...props }, ref) => (
  <Link
    ref={ref}
    className={cn("text-xl font-bold text-foreground", className)}
    {...props}
  />
));
NavBrand.displayName = "NavBrand";

const NavList = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn("flex items-center gap-6", className)}
      {...props}
    />
  )
);
NavList.displayName = "NavList";

const NavItem = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("", className)} {...props} />
  )
);
NavItem.displayName = "NavItem";

const NavLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<typeof Link>
>(({ className, ...props }, ref) => (
  <Link
    ref={ref}
    className={cn(
      "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
      className
    )}
    {...props}
  />
));
NavLink.displayName = "NavLink";

export { Nav, NavBrand, NavList, NavItem, NavLink };

