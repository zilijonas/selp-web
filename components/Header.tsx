import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center space-x-3"
          title="SELP - Home"
        >
          <Image
            src="/selp-logo.svg"
            alt="SELP"
            width={80}
            height={32}
            className="h-10 w-auto"
            title="SELP - Your Personal Health Assistant Logo"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/#features"
            className="text-sm font-medium hover:text-primary transition-colors"
            title="View SELP Features - AI Health Analysis and Privacy"
          >
            Features
          </Link>
          <Link
            href="/#how-it-works"
            className="text-sm font-medium hover:text-primary transition-colors"
            title="How SELP Works - Tap, Answer, Analyze"
          >
            How It Works
          </Link>
          <Link
            href="/#testimonials"
            className="text-sm font-medium hover:text-primary transition-colors"
            title="User Testimonials - What People Say About SELP"
          >
            Testimonials
          </Link>
          <Link
            href="/#newsletter"
            className="text-sm font-medium hover:text-primary transition-colors"
            title="Contact SELP - Get in Touch for Support"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          {/* <Button
            variant="ghost"
            size="sm"
            className="hover:text-primary hidden md:inline-flex"
          >
            Sign In
          </Button> */}
          <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
            <Link
              href="#newsletter"
              title="Register for SELP Beta - Get Early Access"
            >
              Get Early Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
