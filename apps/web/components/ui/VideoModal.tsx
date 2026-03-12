"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { colorStyles, radiusStyles } from "@/lib/token";

// ─── Spring presets ───────────────────────────────────────────────────────────

const SPRING_SNAP = { type: "spring", stiffness: 380, damping: 30 } as const;

// ─── Props ────────────────────────────────────────────────────────────────────

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

// ─── Component ────────────────────────────────────────────────────────────────

const VideoModal = ({ isOpen, onClose, videoUrl }: VideoModalProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Auto-focus close button for keyboard accessibility
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isYouTube = videoUrl.includes("youtu");

  return (
    <AnimatePresence>
      {isOpen && (
        /* ── Backdrop ── */
        <motion.div
          key="video-backdrop"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          aria-modal="true"
          role="dialog"
          aria-label="Video player"
        >
          {/* ── Modal card ── */}
          <motion.div
            className={`relative w-full max-w-5xl ${radiusStyles.card} overflow-hidden shadow-2xl`}
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={SPRING_SNAP}
            // Prevent backdrop click from propagating through card
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <motion.button
              ref={closeButtonRef}
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={SPRING_SNAP}
              aria-label="Close video"
              className={`absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full ${colorStyles.bg.dark} ${colorStyles.text.white} backdrop-blur-sm`}
            >
              <X className="h-4 w-4" />
            </motion.button>

            {/* Video / iframe */}
            {isYouTube ? (
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src={videoUrl}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                  title="Englexa video"
                />
              </div>
            ) : (
              <video
                src={videoUrl}
                controls
                autoPlay
                className="w-full block"
                style={{ maxHeight: "80vh" }}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
