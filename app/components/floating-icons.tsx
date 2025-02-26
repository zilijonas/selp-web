'use client';

import { motion } from 'framer-motion';

const icons = [
  { icon: 'fas fa-stethoscope', top: '15%', left: '10%', duration: 7 },
  { icon: 'fas fa-file-medical', top: '5%', left: '5%', duration: 7 },
  { icon: 'fas fa-house-medical', top: '10%', left: '25%', duration: 8 },
  { icon: 'fas fa-notes-medical', top: '20%', left: '45%', duration: 6 },
  { icon: 'fas fa-laptop-medical', top: '30%', left: '65%', duration: 9 },
  { icon: 'fas fa-kit-medical', top: '40%', left: '15%', duration: 7 },
  { icon: 'fas fa-suitcase-medical', top: '50%', left: '80%', duration: 8 },
  { icon: 'fas fa-star-of-life', top: '60%', left: '35%', duration: 6 },
  { icon: 'fas fa-x-ray', top: '70%', left: '55%', duration: 7 },
  { icon: 'fas fa-user-nurse', top: '80%', left: '20%', duration: 8 },
  { icon: 'fas fa-dumbbell', top: '85%', left: '75%', duration: 9 },
  { icon: 'fas fa-heart', top: '90%', left: '50%', duration: 7 },
  { icon: 'fas fa-person-cane', top: '95%', left: '10%', duration: 8 },
  { icon: 'fas fa-person-running', top: '5%', left: '80%', duration: 6 },
  { icon: 'fas fa-mobile-alt', top: '15%', left: '90%', duration: 7 },
];

export function FloatingIcons() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {icons.map((icon, index) => (
        <motion.i
          key={index}
          className={`${icon.icon} text-2xl text-white/15 absolute`}
          style={{
            top: icon.top,
            left: icon.left,
          }}
          animate={{
            y: ['0%', '-20%', '0%'],
          }}
          transition={{
            duration: icon.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
