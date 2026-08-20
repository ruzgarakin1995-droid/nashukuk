"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const phone = "905398211121";
  const message = encodeURIComponent("Merhaba Avukat Süleyman Bey, hukuki danışmanlık almak istiyorum.");
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9990] flex items-end gap-3 pointer-events-auto">
      {/* Tooltip Badge */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="hidden sm:flex items-center gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-2xl shadow-2xl border border-amber-600/30 text-xs font-semibold"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>
              <strong>Av. Süleyman UĞUR</strong> • WhatsApp Hattı
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-slate-400 hover:text-white ml-1 p-0.5"
              aria-label="Kapat"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 border-2 border-white cursor-pointer relative group transition-colors"
        title="WhatsApp ile Mesaj Gönder (0539 821 11 21)"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-600 border border-white"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
      </motion.a>
    </div>
  );
}

export default FloatingWhatsApp;
