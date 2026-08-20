"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[4/5] shadow-2xl border-4 border-white">
              <img 
                src="/law/law_about_firm.jpg" 
                alt="Hukuk Büromuz" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute -bottom-6 -right-6 backdrop-blur-2xl bg-white/95 border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-xl">
              <div className="text-4xl sm:text-5xl font-bold text-amber-700 mb-1">25+</div>
              <div className="text-slate-900 font-medium text-sm sm:text-base">Yıllık Tecrübe</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="font-eyebrow text-amber-700 text-xs sm:text-sm tracking-[0.24em] mb-3">NAS Hukuk & Danışmanlık</div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Adaletin Işığında,<br />Güçlü & Sonuç Odaklı Temsil
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              NAS Hukuk & Danışmanlık bünyesinde kurucu Avukat Süleyman UĞUR liderliğinde; müvekkillerimizin hukuki haklarını en üst düzeyde koruyor, her dosyayı derinlemesine inceleyerek somut ve koruyucu stratejiler kurguluyoruz.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "Şeffaf ve etik çalışma prensibi",
                "Güncel Yargıtay içtihatlarına hakim güçlü savunma",
                "Sonuç odaklı ve kararlı stratejik yaklaşım",
                "Gizlilik ve güven esaslı birebir müvekkil ilişkisi"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-700 shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-block bg-slate-900 text-white px-8 py-4 rounded-xl hover:bg-amber-800 transition-colors font-medium shadow-md">
              Detaylı Bilgi & Danışmanlık
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
