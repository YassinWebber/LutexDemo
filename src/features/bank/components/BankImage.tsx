"use client";

import * as React from "react";
import * as BankImagePrimitive from "@radix-ui/react-avatar";

import { cn } from "@/src/lib/utils";

const BankImageComponent = React.forwardRef<
  React.ElementRef<typeof BankImagePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof BankImagePrimitive.Root>
>(({ className, ...props }, ref) => (
  <BankImagePrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className,
    )}
    {...props}
  />
));
BankImageComponent.displayName = BankImagePrimitive.Root.displayName;

const BankImage = React.forwardRef<
  React.ElementRef<typeof BankImagePrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof BankImagePrimitive.Image>
>(({ className, ...props }, ref) => (
  <BankImagePrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
BankImage.displayName = BankImagePrimitive.Image.displayName;

const BankImageFallback = React.forwardRef<
  React.ElementRef<typeof BankImagePrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof BankImagePrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <BankImagePrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className,
    )}
    {...props}
  />
));
BankImageFallback.displayName = BankImagePrimitive.Fallback.displayName;

export { BankImageComponent, BankImage, BankImageFallback };
