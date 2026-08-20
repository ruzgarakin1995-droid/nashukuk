"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  ArrowRight, 
  Scale, 
  ShieldCheck, 
  Award, 
  Briefcase, 
  CheckCircle2, 
  Users 
} from "lucide-react";

function HeroCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const startTime = performance.now();

      const updateCount = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = Math.floor(easeOut * target);

        setCount(current);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(target);
        }
      };

      requestAnimationFrame(updateCount);
    }
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count.toLocaleString("tr-TR")}{suffix}
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-[#FDFBF7] overflow-hidden pt-24 pb-20 border-b border-slate-200/80">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src="/law/law_hero.jpg"
          alt="NAS Hukuk & Danışmanlık"
          className="w-full h-full object-cover filter blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7]/90 via-[#FDFBF7]/95 to-[#FDFBF7]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Actions */}
          <div className="lg:col-span-7 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 font-eyebrow text-amber-700 text-xs sm:text-sm tracking-[0.24em] mb-4"
            >
              <Scale className="w-4 h-4 text-amber-700" />
              <span>Av. Süleyman UĞUR • NAS Hukuk & Danışmanlık</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] mb-6 tracking-tight"
            >
              Hukuki Süreçlerinizde <br />
              <span className="text-amber-700">Stratejik & Kararlı</span> Çözüm
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-slate-600 mb-8 leading-relaxed font-normal"
            >
              Avukat Süleyman UĞUR liderliğinde; ağır ceza, ticaret hukuku, gayrimenkul ve iş davalarında müvekkillerimize şeffaf, güvenilir ve sonuç odaklı hukuki danışmanlık ve avukatlık hizmeti sunuyoruz.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <button 
                type="button"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.dispatchEvent(new CustomEvent("open-consultation-modal"));
                  }
                }}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl hover:bg-amber-800 transition-all text-base font-semibold shadow-lg hover:shadow-xl group cursor-pointer"
              >
                Ücretsiz Danışmanlık Al
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="#practices" 
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-800 px-8 py-4 rounded-xl border border-slate-300 hover:border-amber-700 hover:text-amber-800 transition-all text-base font-semibold shadow-sm"
              >
                Çalışma Alanlarımız
              </a>
            </motion.div>

            {/* Elevated Premium Trust Metric Trio Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xl shadow-slate-900/5 relative overflow-hidden"
            >
              {/* Subtle gold accent top line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700" />
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-150">
                
                {/* 1. Hukuki Tecrübe */}
                <div className="flex items-center gap-3.5 pt-2 sm:pt-0 sm:pr-3 group">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 shrink-0 group-hover:scale-105 group-hover:bg-amber-700 group-hover:text-white transition-all shadow-sm">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      <HeroCounter target={25} suffix="+" /> <span className="text-xs sm:text-sm font-bold text-amber-700">Yıl</span>
                    </div>
                    <div className="text-xs font-semibold text-slate-500 mt-0.5">
                      Hukuki Tecrübe
                    </div>
                  </div>
                </div>

                {/* 2. Kazanılan Dava */}
                <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-4 group">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-700 shrink-0 group-hover:scale-105 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-extrabold text-emerald-700 tracking-tight leading-tight">
                      <HeroCounter target={98} suffix="%" prefix="%" />
                    </div>
                    <div className="text-xs font-semibold text-slate-500 mt-0.5">
                      Kazanılan Dava Oranı
                    </div>
                  </div>
                </div>

                {/* 3. Müvekkil Güveni */}
                <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:pl-4 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-105 transition-all shadow-sm">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-tight">
                      <HeroCounter target={1500} suffix="+" />
                    </div>
                    <div className="text-xs font-semibold text-slate-500 mt-0.5">
                      Müvekkil Güveni
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          {/* Right Column: Prominent, High-Resolution Showcase Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Visual Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/5] group">
              <img
                src="/law/law_hero.jpg"
                alt="NAS Hukuk & Danışmanlık - Avukat Süleyman UĞUR"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-amber-400 text-xs font-semibold uppercase tracking-widest mb-1">
                  Avukat Süleyman UĞUR
                </div>
                <div className="text-lg font-bold text-white leading-snug">
                  Müvekkillerimiz İçin Tavizsiz Savunma & Hukuki Mükemmellik
                </div>
              </div>
            </div>

            {/* Floating Trust Badge Top-Left */}
            <div className="absolute -top-5 -left-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-200/80 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Gizlilik İlkemiz</div>
                <div className="text-sm font-bold text-slate-900">%100 Mahremiyet</div>
              </div>
            </div>

            {/* Floating Award Badge Bottom-Right */}
            <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-4 sm:p-5 rounded-2xl shadow-2xl border border-amber-700/40 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-amber-700/20 border border-amber-600/50 flex items-center justify-center text-amber-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-amber-400 font-semibold tracking-wider uppercase">Chambers & Legal 500</div>
                <div className="text-sm font-bold text-white">1. Kategori Hukuk Bürosu</div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
