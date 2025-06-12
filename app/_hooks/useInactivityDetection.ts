import { useState, useEffect } from "react";

interface UseInactivityDetectionProps {
  timeoutMs?: number; // Default: 30 seconds
  events?: string[]; // Default: ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart']
}

export function useInactivityDetection({
  timeoutMs = 30000, // 30 seconds
  events = ["mousedown", "mousemove", "keypress", "scroll", "touchstart"],
}: UseInactivityDetectionProps = {}) {
  const [isInactive, setIsInactive] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const resetTimer = () => {
      setIsInactive(false);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsInactive(true);
      }, timeoutMs);
    };

    // Set initial timer
    resetTimer();

    // Add event listeners
    events.forEach((event) => {
      window.addEventListener(event, resetTimer);
    });

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      events.forEach((event) => {
        window.removeEventListener(event, resetTimer);
      });
    };
  }, [timeoutMs, events]);

  return isInactive;
}
