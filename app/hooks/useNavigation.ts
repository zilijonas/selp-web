import type React from 'react';
import { useEffect, useState } from 'react';

export interface NavItem {
  href: string;
  icon: string;
  label: string;
}

export const useNavigation = (navItems: NavItem[]) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToElement = (elementId: string | null) => {
    if (!elementId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.getElementById(elementId);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const updateUrlHash = (hash: string | null) => {
    if (hash) {
      window.history.pushState(null, '', `#${hash}`);
    } else {
      window.history.pushState('', document.title, window.location.pathname + window.location.search);
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        scrollToElement(hash.substring(1));
      }, 100);
    }
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    const isHomeLink = href === '#hero';
    const targetId = isHomeLink ? null : href.substring(1);

    scrollToElement(targetId);
    updateUrlHash(targetId);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return {
    isScrolled,
    isMobileMenuOpen,
    handleNavClick,
    toggleMobileMenu,
    navItems,
  };
};
