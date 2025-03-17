'use client';

import { NavItem, useNavigation } from '@/app/hooks/useNavigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const navItems: NavItem[] = [
  { href: '#hero', icon: 'fas fa-home', label: 'Home' },
  { href: '#content', icon: 'fas fa-info-circle', label: 'Overview' },
  { href: '#features', icon: 'fas fa-list', label: 'Features' },
  { href: '#pricing', icon: 'fas fa-tags', label: 'Pricing' },
  { href: '#availability', icon: 'fas fa-mobile-alt', label: 'Availability' },
];

export function Header() {
  const { isScrolled, isMobileMenuOpen, handleNavClick, toggleMobileMenu } = useNavigation(navItems);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        (isScrolled || isMobileMenuOpen) && 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <Image src="/assets/logo.svg" alt="SELP - Self Help" width={93.5} height={40} priority />
          </motion.span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white hover:text-[#00f2fe] transition-colors"
              onClick={e => handleNavClick(e, item.href)}
            >
              <i className={`${item.icon} mr-2`}></i>
              {item.label}
            </a>
          ))}
        </nav>
        <Button variant="ghost" className="md:hidden text-white text-2xl p-2" onClick={toggleMobileMenu}>
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </Button>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4 flex flex-col items-center"
          >
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="block w-full text-center py-4 px-6 text-lg font-medium text-white hover:text-[#00f2fe] transition-colors"
                onClick={e => handleNavClick(e, item.href)}
              >
                <i className={`${item.icon} mr-2`}></i>
                {item.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
