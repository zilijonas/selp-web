import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { resetCookieConsent } from "@/components/CookieConsentBanner";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center space-x-3"
              title="SELP - Home"
            >
              <Image
                src="/selp-logo.svg"
                alt="SELP"
                width={120}
                height={60}
                className="h-14 w-auto"
                title="SELP - Your Personal Health Assistant Logo"
              />
            </Link>
            <p className="text-gray-400">
              SELP is your self-help health assistant. Tap the body part that
              hurts, answer tailored questions, and get a doctor-level analysis
              — all in your pocket.
            </p>
            <div className="flex space-x-4">
              {/* <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link> */}
              <Link
                href="https://www.instagram.com/selp.life?igsh=YmR2bHBtaTFzb2x4&utm_source=qr"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Follow SELP on Instagram - Health Tips and Updates"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.facebook.com/selp.life"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Follow SELP on Facebook - Health Community and Updates"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Product</h3>
            <div className="space-y-2">
              <Link
                href="/#features"
                className="block text-gray-400 hover:text-white transition-colors"
                title="SELP Features - AI Health Analysis and Privacy Protection"
              >
                Features
              </Link>
              <Link
                href="/#how-it-works"
                className="block text-gray-400 hover:text-white transition-colors"
                title="How SELP Works - Simple 3-Step Health Analysis Process"
              >
                How It Works
              </Link>
              <Link
                href="/privacy-policy"
                className="block text-gray-400 hover:text-white transition-colors"
                title="SELP Privacy Policy - How We Protect Your Health Data"
              >
                Privacy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="block text-gray-400 hover:text-white transition-colors"
                title="SELP Terms of Service - User Agreement and Conditions"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <div className="space-y-2">
              <Link
                href="/about"
                className="block text-gray-400 hover:text-white transition-colors"
                title="About SELP - Our Mission to Democratize Healthcare"
              >
                About
              </Link>
              <Link
                href="/faq"
                className="block text-gray-400 hover:text-white transition-colors"
                title="Frequently Asked Questions - SELP"
              >
                FAQ
              </Link>
              <Link
                href="/#newsletter"
                className="block text-gray-400 hover:text-white transition-colors"
                title="Careers at SELP - Join Our Health Tech Team"
              >
                Careers
              </Link>
              <Link
                href="/#newsletter"
                className="block text-gray-400 hover:text-white transition-colors"
                title="SELP Press Releases - Latest Company News"
              >
                Press
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:lijonas.it@gmail.com"
                  title="Email SELP Support - Get Help with Health Questions"
                >
                  lijonas.it@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+370 6 0706360</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>Vilnius, Lithuania</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} SELP. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button
              onClick={resetCookieConsent}
              className="text-gray-400 hover:text-white text-sm transition-colors text-center sm:text-left"
              title="Change Cookie Preferences - Update Your Cookie Settings"
            >
              Cookie Preferences
            </button>
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-white text-sm transition-colors text-center sm:text-left"
              title="SELP Privacy Policy - Data Protection and Cookie Usage"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-gray-400 hover:text-white text-sm transition-colors text-center sm:text-left"
              title="SELP Terms of Service - Legal Agreement for App Usage"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors text-center sm:text-left"
              title="SELP Medical Disclaimer - Important Health Information Notice"
            >
              Medical Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
