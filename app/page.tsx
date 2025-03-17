'use client';

import { FloatingIcons } from '@/app/components/floating-icons';
import { Footer } from '@/app/components/footer';
import { Header } from '@/app/components/header';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <FloatingIcons />
      <Header />
      <main className="flex-1">
        <section id="hero" className="flex min-h-screen flex-col items-center justify-center space-y-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-6 sm:px-8 md:px-12 flex flex-col items-center justify-center gap-6 text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <Image src="/assets/logo.svg" alt="" width={234} height={100} priority aria-hidden="true" />
              <h1 className="sr-only">SELP - Self Help</h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-[750px] text-center text-lg text-white sm:text-xl"
            >
              <strong>SELP</strong> is short for <em>Self Help</em>. Experience the future of medical assessments and
              wellness at your fingertips.
            </motion.p>
          </motion.div>
        </section>

        <section id="content" className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12 py-12 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-8 text-center"
          >
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl text-[#00f2fe]">
              A New Era in Self-Help
            </h2>
            <p className="max-w-[85%] leading-normal text-white sm:text-lg sm:leading-7 text-shadow-sm">
              With SELP, you&apos;ll soon be able to assess injuries, health problems, pain, and more – just like real
              doctors. Our advanced interactive system uses a 3D human model and personalized questionnaires to deliver
              tailored health assessments.
            </p>
            <p className="max-w-[85%] leading-normal text-white sm:text-lg sm:leading-7 text-shadow-sm">
              Experience a seamless integration of technology and healthcare, designed to empower you in understanding
              and managing your well-being.
            </p>
          </motion.div>
        </section>

        <section id="features" className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12 py-12 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-8 text-center"
          >
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl text-[#00f2fe]">Key Features</h2>
            <ul className="space-y-2 text-left text-white" aria-label="Key features of SELP">
              <li className="flex items-center">
                <span className="mr-2 text-[#00f2fe]" aria-hidden="true">
                  ✓
                </span>{' '}
                Touch interactive 3D human model
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[#00f2fe]" aria-hidden="true">
                  ✓
                </span>{' '}
                Personalized health questionnaires
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[#00f2fe]" aria-hidden="true">
                  ✓
                </span>{' '}
                Real-time injury & pain assessment
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-[#00f2fe]" aria-hidden="true">
                  ✓
                </span>{' '}
                Coming soon on App Store & Google Play
              </li>
            </ul>
          </motion.div>
        </section>

        <section id="pricing" className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12 py-12 md:py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-8 text-center"
          >
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl text-[#00f2fe]">Pricing Plans</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Free</h3>
                <p className="text-lg text-white mb-4">3 health analyses per day</p>
                <p className="text-3xl font-bold text-[#00f2fe] mb-6">$0/month</p>
                <Button className="w-full bg-background/60 hover:bg-background/80 text-white font-semibold py-2 px-4 rounded transition duration-300">
                  Get Started
                </Button>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-4">Pro</h3>
                <p className="text-lg text-white mb-4">10 analyses per day, multiple profiles</p>
                <p className="text-3xl font-bold text-[#00f2fe] mb-6">$3/month</p>
                <Button className="w-full bg-background/60 hover:bg-background/80 text-white font-semibold py-2 px-4 rounded transition duration-300">
                  Upgrade to Pro
                </Button>
              </div>
            </div>
          </motion.div>
        </section>

        <section
          id="availability"
          className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12 py-12 md:py-24 lg:py-32"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-8 text-center"
          >
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl text-[#00f2fe]">
              Available on Your Favorite Platforms
            </h2>
            <div className="flex space-x-8">
              <Link
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on App Store"
              >
                <Button size="lg" variant="ghost" className="text-4xl text-white w-20 h-20 p-0">
                  <i className="fab fa-apple" style={{ fontSize: '48px' }} aria-hidden="true"></i>
                </Button>
              </Link>
              <Link
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
              >
                <Button size="lg" variant="ghost" className="text-4xl text-white w-20 h-20 p-0">
                  <i className="fab fa-google-play" style={{ fontSize: '36px' }} aria-hidden="true"></i>
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
