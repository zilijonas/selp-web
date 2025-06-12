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

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/selp-logo.svg"
                alt="SELP"
                width={120}
                height={60}
                className="h-14 w-auto"
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
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.facebook.com/selp.life"
                className="text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
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
              >
                Features
              </Link>
              <Link
                href="/#how-it-works"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="/privacy-policy"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="block text-gray-400 hover:text-white transition-colors"
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
              >
                About
              </Link>
              <Link
                href="https://www.facebook.com/selp.life"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/#newsletter"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Careers
              </Link>
              <Link
                href="/#newsletter"
                className="block text-gray-400 hover:text-white transition-colors"
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
                <a href="mailto:lijonas.it@gmail.com">lijonas.it@gmail.com</a>
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
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-white text-sm transition-colors text-center sm:text-left"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-gray-400 hover:text-white text-sm transition-colors text-center sm:text-left"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white text-sm transition-colors text-center sm:text-left"
            >
              Medical Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
