"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";
import { ChevronDown, Globe } from "lucide-react";

// Dil listesi ve bayrak kodları (flagcdn.com destekli)
const languages = [
  { code: "tr", label: "TR", title: "Türkçe", flag: "tr" },
  { code: "en", label: "EN", title: "English", flag: "gb" },
  { code: "de", label: "DE", title: "Deutsch", flag: "de" },
  { code: "fr", label: "FR", title: "Français", flag: "fr" },
  { code: "ru", label: "RU", title: "Русский", flag: "ru" },
  { code: "ar", label: "AR", title: "العربية", flag: "sa" }
];

export function LanguageSwitcher({ variant = "default" }: { variant?: "default" | "topbar" | "mobile" }) {
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("tr");

  useEffect(() => {
    // Sayfa yüklendiğinde mevcut çeviri çerezini kontrol et
    const match = document.cookie.match(/googtrans=\/tr\/([a-z]{2})/);
    if (match && match[1]) {
      setActiveLang(match[1]);
    }
  }, []);

  const handleLanguageChange = (lang: string) => {
    setActiveLang(lang);
    setLangDropdownOpen(false);
    
    // Google Translate'in dil çerezini ayarla
    document.cookie = `googtrans=/tr/${lang}; path=/; domain=${window.location.hostname}`;
    document.cookie = `googtrans=/tr/${lang}; path=/`; // Localhost desteği için
    
    // Çevirinin aktif olması için sayfayı yenile
    window.location.reload();
  };

  const currentLangObj = languages.find(l => l.code === activeLang) || languages[0];

  return (
    <>
      <div className="relative inline-block text-left notranslate" translate="no">
        {/* Ana Tetikleyici Buton */}
        <button 
          type="button"
          onClick={() => setLangDropdownOpen(!langDropdownOpen)}
          className={`flex items-center gap-2 transition-all cursor-pointer select-none notranslate ${
            variant === "topbar"
              ? "text-slate-200 hover:text-white text-xs font-semibold py-1 px-2.5 rounded-lg bg-slate-800/90 border border-slate-700 hover:border-amber-500/60 shadow-xs"
              : variant === "mobile"
              ? "w-full justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-bold"
              : "px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 hover:border-amber-700 text-xs font-bold shadow-xs"
          }`}
          translate="no"
          aria-expanded={langDropdownOpen}
        >
          <div className="flex items-center gap-2 notranslate" translate="no">
            <div className="w-4 h-4 rounded-full overflow-hidden border border-black/10 shrink-0 shadow-xs">
              <img 
                src={`https://flagcdn.com/${currentLangObj.flag}.svg`} 
                alt={currentLangObj.label} 
                className="w-full h-full object-cover" 
              />
            </div>
            <span className="tracking-wider uppercase font-bold text-xs notranslate" translate="no">{currentLangObj.label}</span>
          </div>

          <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${langDropdownOpen ? "rotate-180 text-amber-400" : ""}`} />
        </button>

        {/* Açılır Menü */}
        <AnimatePresence>
          {langDropdownOpen && (
            <>
              {/* Dışarı tıklandığında kapatmak için görünmez katman */}
              <div 
                className="fixed inset-0 z-[9990]" 
                onClick={() => setLangDropdownOpen(false)} 
              />

              <motion.div 
                initial={{ opacity: 0, y: 6, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden w-44 p-1.5 flex flex-col gap-1 z-[9999] notranslate"
                translate="no"
              >
                <div className="px-2.5 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 flex items-center gap-1.5 notranslate" translate="no">
                  <Globe className="w-3 h-3 text-amber-700" />
                  <span>DİL SEÇİMİ / LANGUAGE</span>
                </div>

                {languages.map((l) => {
                  const isSelected = activeLang === l.code;
                  return (
                    <button
                      key={l.code}
                      type="button"
                      onClick={() => handleLanguageChange(l.code)}
                      className={`px-3 py-2 text-xs font-semibold rounded-xl flex items-center justify-between w-full text-left transition-colors cursor-pointer notranslate ${
                        isSelected 
                          ? "bg-amber-700 text-white font-bold shadow-xs" 
                          : "text-slate-700 hover:bg-amber-50 hover:text-amber-900"
                      }`}
                      translate="no"
                    >
                      <div className="flex items-center gap-2.5 notranslate" translate="no">
                        <div className="w-4 h-4 rounded-full overflow-hidden shrink-0 border border-black/10 shadow-xs">
                          <img src={`https://flagcdn.com/${l.flag}.svg`} alt={l.code} className="w-full h-full object-cover" />
                        </div>
                        <span className="notranslate" translate="no">{l.title}</span>
                      </div>
                      <span className={`text-[10px] font-bold uppercase notranslate ${isSelected ? "text-amber-200" : "text-slate-400"}`} translate="no">{l.label}</span>
                    </button>
                  );
                })}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Google Translate Entegrasyon Kodları (Gizli) */}
      <div id="google_translate_element" style={{ display: "none" }}></div>
      <style dangerouslySetInnerHTML={{__html: `
        /* Google Translate'in orijinal çirkin barını ve arayüzünü gizleyen CSS */
        body { top: 0 !important; }
        .skiptranslate, .goog-te-banner-frame { display: none !important; }
        .goog-tooltip { display: none !important; }
        .goog-tooltip:hover { display: none !important; }
        .goog-text-highlight { background-color: transparent !important; border: none !important; box-shadow: none !important; }
        #goog-gt-tt { display: none !important; }
      `}} />
      <Script 
        id="google-translate-init-script" 
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function googleTranslateElementInit() {
              if (window.google && window.google.translate) {
                new window.google.translate.TranslateElement({
                  pageLanguage: 'tr',
                  includedLanguages: 'tr,en,de,fr,ru,ar',
                  autoDisplay: false
                }, 'google_translate_element');
              }
            }
          `
        }}
      />
      <Script 
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" 
        strategy="afterInteractive" 
      />
    </>
  );
}

export default LanguageSwitcher;
