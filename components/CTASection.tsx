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

export default function CTASection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDownloadClick = () => {
    setIsDialogOpen(true);
  };

  return (
    <section id="cta" className="py-20 md:py-32">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 text-center">
        <div className="space-y-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            Take control of your health today
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of users who trust SELP for their health
            self-assessment needs. Download the app and start your journey to
            better health insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="text-lg bg-primary hover:bg-primary/90 disabled:opacity-50"
                  onClick={handleDownloadClick}
                >
                  Download for iOS
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-primary">
                    Coming Soon!
                  </DialogTitle>
                  <DialogDescription className="text-center py-4">
                    The SELP app is still being built! Please register for our
                    newsletter to be the first to know when it's available for
                    download.
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
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="text-lg bg-primary hover:bg-primary/90 disabled:opacity-50"
                  onClick={handleDownloadClick}
                >
                  Download for Android
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-primary">
                    Coming Soon!
                  </DialogTitle>
                  <DialogDescription className="text-center py-4">
                    The SELP app is still being built! Please register for our
                    newsletter to be the first to know when it's available for
                    download.
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
          </div>
          <p className="text-sm text-muted-foreground">
            Free download • Privacy-first • Doctor-approved
          </p>
        </div>
      </div>
    </section>
  );
}
