"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Scale, 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck, 
  Phone, 
  Briefcase, 
  Building, 
  Home, 
  FileText, 
  Calendar, 
  Clock, 
  Award, 
  AlertCircle, 
  Quote 
} from "lucide-react";
import { caseStudiesData } from "@/themes/law/v2/case-data";
import { Navbar } from "@/themes/law/v2/sections/Navbar";
import { Footer } from "@/themes/law/v2/sections/Footer";
import { FloatingWhatsApp } from "@/themes/law/v2/components/FloatingWhatsApp";

export default function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const data = caseStudiesData[slug];

  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!data) {
    return notFound();
  }

  const otherCases = Object.values(caseStudiesData).filter((c) => c.slug !== slug);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-900 font-sans selection:bg-amber-700 selection:text-white">
      
      {/* Universal Top Navbar with Desktop Dropdowns & Mobile Hamburger Menu */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 lg:py-20 overflow-hidden bg-white border-b border-slate-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              {/* Category & Year Tag with luxury font-eyebrow */}
              <div className="flex items-center gap-3 font-eyebrow text-amber-700 text-xs sm:text-sm tracking-[0.24em] mb-4">
                <span>{data.category}</span>
                <span className="text-slate-300">•</span>
                <span>{data.year} VAKA İNCELEMESİ</span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.2] mb-6 tracking-tight"
              >
                {data.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 font-normal"
              >
                {data.summary}
              </motion.p>

              {/* Case Metadata Details */}
              <div className="grid sm:grid-cols-2 gap-4 p-5 bg-[#FAF8F5] rounded-2xl border border-slate-200 mb-8">
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Müvekkil / Sektör</div>
                  <div className="text-sm font-bold text-slate-800">{data.clientSector}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Dava / Süreç Zamanı</div>
                  <div className="text-sm font-bold text-slate-800">{data.duration}</div>
                </div>
              </div>

              {/* Lead Attorney Card */}
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                  <img 
                    src={data.leadAttorney.image} 
                    alt={data.leadAttorney.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-eyebrow text-amber-700 text-[10px] tracking-[0.2em] mb-0.5">Davayı Yöneten Lider Avukat</div>
                  <div className="text-base font-bold text-slate-900">{data.leadAttorney.name}</div>
                  <div className="text-xs text-slate-500">{data.leadAttorney.role}</div>
                </div>
              </div>
            </div>

            {/* Right Visual Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11] bg-slate-900 group">
                <img
                  src={data.heroImage}
                  alt={data.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-amber-400 font-eyebrow text-[11px] tracking-[0.2em] mb-1">
                    Emsal Karar & Başarı
                  </div>
                  <div className="text-base sm:text-lg font-bold">
                    {data.valueOrImpact}
                  </div>
                </div>
              </div>

              {/* Floating Outcome Stat Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-4">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-700 tracking-tight whitespace-nowrap">
                  {data.metrics[0]?.value}
                </div>
                <div className="border-l border-slate-200 pl-4">
                  <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider whitespace-nowrap">
                    {data.metrics[0]?.label}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    Kayıtlara Geçen Sonuç
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="py-12 bg-slate-900 text-white border-b border-amber-700/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            {data.metrics.map((st, i) => (
              <div key={i} className="pt-4 sm:pt-0">
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 mb-1 tracking-tight">{st.value}</div>
                <div className="text-sm text-slate-300 font-medium tracking-wide">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep-Dive 3-Column Content: Challenge, Strategy, Outcome */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="font-eyebrow text-amber-700 text-xs sm:text-sm tracking-[0.24em] mb-2.5">Vaka Analizi</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Sürecin Zorlukları ve Hukuki Mücadele
            </h2>
            <p className="text-slate-600 text-base">
              Müvekkilimizin karşılaştığı kritik risklerin tespiti, uygulanan strateji ve elde edilen kesin sonuçlar.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* 1. The Challenge */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-6 border border-red-100">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-2">1. Adım: Karşılaşılan Riskler</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{data.challenge.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {data.challenge.description}
                </p>
              </div>
              <div className="space-y-2.5 pt-4 border-t border-slate-100">
                {data.challenge.keyIssues.map((issue, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                    <span>{issue}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. The Strategy */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-6 border border-amber-200">
                  <Scale className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">2. Adım: Hukuki Strateji</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{data.strategy.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {data.strategy.description}
                </p>
              </div>
              <div className="space-y-2.5 pt-4 border-t border-slate-100">
                {data.strategy.steps.map((st, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-700 shrink-0 mt-1.5" />
                    <span>{st}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. The Outcome */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-6 border border-emerald-200">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">3. Adım: Kazanılan Sonuç</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{data.outcome.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {data.outcome.description}
                </p>
              </div>
              <div className="space-y-2.5 pt-4 border-t border-slate-100">
                {data.outcome.achievements.map((ach, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-semibold">{ach}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonial / Quote Card */}
      {data.testimonial && (
        <section className="py-16 bg-white border-y border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-[#FAF8F5] border border-amber-700/20 rounded-3xl p-8 sm:p-12 relative">
              <Quote className="w-12 h-12 text-amber-700/20 absolute top-6 right-6 pointer-events-none" />
              <p className="text-lg sm:text-xl text-slate-800 italic leading-relaxed mb-6">
                "{data.testimonial.quote}"
              </p>
              <div className="border-t border-slate-200 pt-4">
                <div className="text-base font-bold text-slate-900">{data.testimonial.author}</div>
                <div className="text-xs text-amber-700 font-semibold uppercase tracking-wider">{data.testimonial.title}</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Consultation Booking Form Card */}
      <section id="consultation" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-amber-700/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-700/10 rounded-full filter blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 font-eyebrow text-amber-400 text-[11px] tracking-[0.24em] mb-3">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>%100 Gizlilik & Mahremiyet Garantisi</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-tight">
                  Benzer Bir Uyuşmazlığınız veya Davanız mı Var?
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Dosyanız hakkında bilgi verin, Avukat Süleyman UĞUR en kısa sürede durumunuzu değerlendirerek dönüş sağlasın.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-amber-400/30">
                  <CheckCircle className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Başvurunuz Alındı</h4>
                  <p className="text-slate-300 text-sm">
                    Dava departmanımız dosyanızı inceleyerek en kısa sürede sizinle iletişime geçecektir.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">Ad Soyad</label>
                      <input
                        type="text"
                        required
                        placeholder="Adınız ve Soyadınız"
                        className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">Telefon Numarası</label>
                      <input
                        type="tel"
                        required
                        placeholder="+90 (5XX) XXX XX XX"
                        className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">E-posta Adresi</label>
                      <input
                        type="email"
                        required
                        placeholder="eposta@ornek.com"
                        className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">İlgili Alan</label>
                      <input
                        type="text"
                        readOnly
                        value={data.category}
                        className="w-full bg-slate-850 border border-slate-700 rounded-xl px-4 py-3 text-amber-400 font-semibold text-sm cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">Hukuki Durum Özeti</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Davanız veya uyuşmazlığınız hakkında kısa bilgi veriniz..."
                      className="w-full bg-slate-800/90 border border-slate-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors resize-y"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-amber-700 hover:bg-amber-600 text-white font-bold tracking-widest uppercase text-sm rounded-xl transition-all shadow-lg mt-2"
                  >
                    Gizli Dosya İncelemesi Talep Et →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Other Cases Carousel/Grid */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <div className="font-eyebrow text-amber-700 text-xs sm:text-sm tracking-[0.24em] mb-2">Diğer Emsal Vakalar</div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Diğer Örnek Başarılarımız</h3>
            </div>
            <Link href="/#cases" className="text-amber-700 font-semibold text-sm hover:underline">
              Tümünü Gör &rarr;
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {otherCases.map((item, idx) => (
              <Link
                key={idx}
                href={`/vaka/${item.slug}`}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-amber-700/40 transition-all group flex flex-col justify-between"
              >
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img 
                    src={item.heroImage} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs text-amber-400 font-semibold uppercase">{item.category}</div>
                    <div className="text-sm font-bold truncate">{item.valueOrImpact}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-amber-700 transition-colors tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-2 mb-4">
                    {item.summary}
                  </p>
                  <div className="text-amber-700 font-semibold text-xs inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Vaka İncelemesi <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Direct WhatsApp Quick Contact Button */}
      <FloatingWhatsApp />
    </div>
  );
}
