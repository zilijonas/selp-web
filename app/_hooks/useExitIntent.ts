"use client";

import { useState, useEffect } from "react";

export function useExitIntent() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if the mouse leaves from the top of the page
      if (e.clientY <= 0) {
        // Check if user has already subscribed
        const hasSubscribed = sessionStorage.getItem("newsletterSubscribed");
        const hasSeenPopup = sessionStorage.getItem("exitIntentShown");

        if (!hasSubscribed && !hasSeenPopup) {
          setShowPopup(true);
        }
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleClose = () => {
    setShowPopup(false);
    sessionStorage.setItem("exitIntentShown", "true");
  };

  return {
    showPopup,
    setShowPopup: handleClose,
  };
}
