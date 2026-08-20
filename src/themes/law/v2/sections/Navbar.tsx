"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Scale, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown, 
  ArrowRight,
  Clock
} from "lucide-react";
import { ConsultationModal } from "../components/ConsultationModal";
import { LanguageSwitcher } from "../components/LanguageSwitcher";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [practicesDropdownOpen, setPracticesDropdownOpen] = useState(false);
  const [mobilePracticesOpen, setMobilePracticesOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Listen for global open consultation modal events
  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener("open-consultation-modal", handleOpenModal);
    return () => window.removeEventListener("open-consultation-modal", handleOpenModal);
  }, []);

  const practiceAreas = [
    { name: "Ceza Hukuku & Ağır Ceza", href: "/ceza-hukuku", desc: "Soruşturma ve duruşma savunması" },
    { name: "İş & Sosyal Güvenlik", href: "/is-hukuku", desc: "Tazminat ve işe iade davaları" },
    { name: "Ticaret & Şirketler", href: "/ticaret-hukuku", desc: "M&A ve kurumsal danışmanlık" },
    { name: "Aile & Mal Rejimi", href: "/aile-hukuku", desc: "Boşanma ve mal paylaşımı" },
    { name: "Gayrimenkul & İmar", href: "/gayrimenkul-hukuku", desc: "Tapu iptal ve kira uyuşmazlığı" },
    { name: "Sözleşmeler Hukuku", href: "/sozlesmeler-hukuku", desc: "Ticari anlaşma mimarisi" },
  ];

  return (
    <>
      {/* Top Contact Strip (Desktop) */}
      <div className="hidden lg:block bg-slate-900 text-slate-300 text-xs border-b border-amber-700/30 py-2 px-4 sm:px-6 lg:px-8 relative z-[60]">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Nurol Tower, İzzet Paşa, Yeni Yol Cd. No:3 K:32 D:251, Şişli/İstanbul</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Pzt - Cuma: 09:00 - 18:30</span>
            </div>
          </div>
          
          <div className="flex items-center gap-5">
            <a href="mailto:info@nashukuk.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>info@nashukuk.com</span>
            </a>
            <a href="tel:+905398211121" className="flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>0539 821 11 21</span>
            </a>

            {/* Top Bar Language Switcher */}
            <div className="pl-3 border-l border-slate-700">
              <LanguageSwitcher variant="topbar" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200" 
            : "bg-white/90 backdrop-blur-sm py-4 border-b border-slate-200/80"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Pure Typographic Luxury Logo */}
            <Link href="/" className="flex flex-col items-start justify-center group shrink-0 py-0.5">
              <div className="font-logo-brand text-2xl sm:text-[27px] font-bold text-slate-900 leading-none tracking-[0.20em] uppercase group-hover:text-amber-800 transition-colors">
                NAS
              </div>
              <div className="font-logo-sub text-[8.5px] sm:text-[9.5px] text-amber-800 font-semibold tracking-[0.32em] uppercase mt-1.5 whitespace-nowrap">
                HUKUK & DANIŞMANLIK
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7">
              <Link 
                href="/" 
                className="text-sm font-semibold text-slate-700 hover:text-amber-700 transition-colors"
              >
                Ana Sayfa
              </Link>
              
              <a 
                href="/#about" 
                className="text-sm font-semibold text-slate-700 hover:text-amber-700 transition-colors"
              >
                Hakkımızda
              </a>

              {/* Practice Areas Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setPracticesDropdownOpen(true)}
                onMouseLeave={() => setPracticesDropdownOpen(false)}
              >
                <a 
                  href="/#practices" 
                  className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-amber-700 transition-colors py-2"
                >
                  <span>Çalışma Alanlarımız</span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </a>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {practicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 grid gap-1.5 z-50"
                    >
                      {practiceAreas.map((area, idx) => (
                        <Link
                          key={idx}
                          href={area.href}
                          className="p-3 rounded-xl hover:bg-amber-50/70 transition-colors group/item block"
                        >
                          <div className="text-xs font-bold text-slate-900 group-hover/item:text-amber-800 transition-colors">
                            {area.name}
                          </div>
                          <div className="text-[11px] text-slate-500 font-normal">
                            {area.desc}
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a 
                href="/#cases" 
                className="text-sm font-semibold text-slate-700 hover:text-amber-700 transition-colors"
              >
                Başarılarımız
              </a>

              <a 
                href="/#team" 
                className="text-sm font-semibold text-slate-700 hover:text-amber-700 transition-colors"
              >
                Avukatımız
              </a>

              <a 
                href="/#articles" 
                className="text-sm font-semibold text-slate-700 hover:text-amber-700 transition-colors"
              >
                Makaleler
              </a>

              <a 
                href="/#contact" 
                className="text-sm font-semibold text-slate-700 hover:text-amber-700 transition-colors"
              >
                İletişim
              </a>
            </div>

            {/* Desktop Right Action Buttons */}
            <div className="hidden lg:flex items-center gap-3.5">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-amber-800 text-white px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm cursor-pointer"
              >
                Danışmanlık Al
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Actions (Language + Phone + Hamburger) */}
            <div className="flex lg:hidden items-center gap-2.5">
              <LanguageSwitcher variant="default" />

              <a
                href="tel:+905398211121"
                className="p-2.5 bg-amber-50 text-amber-700 rounded-xl border border-amber-200"
                title="Hemen Ara"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors focus:outline-none cursor-pointer"
                aria-label="Menüyü Aç"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Full Drawer Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-white border-b border-slate-200 overflow-hidden shadow-2xl"
            >
              <div className="container mx-auto px-4 py-6 space-y-4">
                
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-base font-bold text-slate-900 border-b border-slate-100"
                >
                  Ana Sayfa
                </Link>

                <a
                  href="/#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-base font-bold text-slate-900 border-b border-slate-100"
                >
                  Hakkımızda
                </a>

                {/* Mobile Practices Accordion */}
                <div className="border-b border-slate-100 pb-2.5">
                  <button
                    onClick={() => setMobilePracticesOpen(!mobilePracticesOpen)}
                    className="w-full flex items-center justify-between py-2.5 text-base font-bold text-slate-900 text-left cursor-pointer"
                  >
                    <span>Çalışma Alanlarımız</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${mobilePracticesOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {mobilePracticesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-2 mt-2"
                      >
                        {practiceAreas.map((area, idx) => (
                          <Link
                            key={idx}
                            href={area.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 text-sm font-semibold text-slate-600 hover:text-amber-700"
                          >
                            {area.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a
                  href="/#cases"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-base font-bold text-slate-900 border-b border-slate-100"
                >
                  Örnek Başarılarımız
                </a>

                <a
                  href="/#team"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-base font-bold text-slate-900 border-b border-slate-100"
                >
                  Avukatımız
                </a>

                <a
                  href="/#articles"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-base font-bold text-slate-900 border-b border-slate-100"
                >
                  Hukuki Makaleler
                </a>

                <a
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2.5 text-base font-bold text-slate-900 border-b border-slate-100"
                >
                  İletişim & Konum
                </a>

                {/* Mobile Language Switcher Row */}
                <div className="pt-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Dil Değiştir / Language</div>
                  <LanguageSwitcher variant="mobile" />
                </div>

                {/* Mobile Call-To-Action Button */}
                <div className="pt-4 space-y-3">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setIsModalOpen(true);
                    }}
                    className="w-full py-3.5 bg-slate-900 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    Ücretsiz Danışmanlık Al
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="p-4 bg-[#FAF8F5] rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                    <div className="font-bold text-slate-900">Merkez Ofisimiz</div>
                    <div>Nurol Tower, İzzet Paşa, Yeni Yol Cd. No : 3 K : 32 D : 251, 34149 Şişli/İstanbul</div>
                    <div className="text-amber-700 font-semibold pt-1">0539 821 11 21</div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>

      {/* Global Consultation Modal Window */}
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
