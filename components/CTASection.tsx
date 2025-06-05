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
    <section className="py-20 md:py-32 bg-[#186B52] text-white">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 text-center">
        <div className="space-y-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Take control of your health today
          </h2>
          <p className="text-xl text-[#35C998]">
            Join thousands of users who trust SELP for their health
            self-assessment needs. Download the app and start your journey to
            better health insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 bg-white text-[#186B52] hover:bg-gray-100"
                  onClick={handleDownloadClick}
                >
                  Download for iOS
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-[#186B52]">
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
                  className="bg-[#186B52] hover:bg-[#2A8E72]"
                >
                  Got it
                </Button>
              </DialogContent>
            </Dialog>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 bg-white text-[#186B52] hover:bg-gray-100"
                  onClick={handleDownloadClick}
                >
                  Download for Android
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-[#186B52]">
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
                  className="bg-[#186B52] hover:bg-[#2A8E72]"
                >
                  Got it
                </Button>
              </DialogContent>
            </Dialog>
          </div>
          <p className="text-sm text-[#35C998]">
            Free download • Privacy-first • Doctor-approved
          </p>
        </div>
      </div>
    </section>
  );
}
