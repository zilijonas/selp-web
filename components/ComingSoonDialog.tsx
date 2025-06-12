"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ComingSoonDialogProps {
  triggerText: string;
  title?: string;
  description?: string;
  buttonClassName?: string;
  size?: "default" | "sm" | "lg" | "icon";
}

export default function ComingSoonDialog({
  triggerText,
  title = "Coming Soon!",
  description = "The SELP app is still being built! Please register for our newsletter to be the first to know when it's available for download.",
  buttonClassName,
  size = "lg",
}: ComingSoonDialogProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          size={size}
          className={cn(
            "text-lg bg-primary hover:bg-primary/90 disabled:opacity-50",
            buttonClassName
          )}
          onClick={() => setIsDialogOpen(true)}
        >
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-primary">{title}</DialogTitle>
          <DialogDescription className="text-center py-4">
            {description}
          </DialogDescription>
        </DialogHeader>
        <Button
          onClick={() => setIsDialogOpen(false)}
          className="bg-primary hover:bg-primary/90"
        >
          Got it
        </Button>
      </DialogContent>
    </Dialog>
  );
}
