import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full rounded-[var(--radius)] border border-input bg-background px-3 py-2 text-base shadow-sm",
        "placeholder:text-muted-foreground",
        "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
