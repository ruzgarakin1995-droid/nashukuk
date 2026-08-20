"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Scale, 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck, 
  Phone, 
  Mail, 
  Briefcase, 
  Building, 
  HeartPulse, 
  Home, 
  FileText, 
  HelpCircle, 
  Clock, 
  Award 
} from "lucide-react";
import { practiceAreasData } from "@/themes/law/v2/practice-data";
import { Navbar } from "@/themes/law/v2/sections/Navbar";
import { Footer } from "@/themes/law/v2/sections/Footer";
import { FloatingWhatsApp } from "@/themes/law/v2/components/FloatingWhatsApp";

const iconsMap: Record<string, React.ReactNode> = {
  "ceza-hukuku": <Scale className="w-5 h-5 text-amber-700" />,
  "is-hukuku": <Briefcase className="w-5 h-5 text-amber-700" />,
  "ticaret-hukuku": <Building className="w-5 h-5 text-amber-700" />,
  "aile-hukuku": <HeartPulse className="w-5 h-5 text-amber-700" />,
  "gayrimenkul-hukuku": <Home className="w-5 h-5 text-amber-700" />,
  "sozlesmeler-hukuku": <FileText className="w-5 h-5 text-amber-700" />,
};

export default function PracticeAreaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const data = practiceAreasData[slug];

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!data) {
    return notFound();
  }

  const otherPractices = Object.values(practiceAreasData).filter((p) => p.slug !== slug);

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
              {/* Luxury Serif Eyebrow Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 font-eyebrow text-amber-700 text-xs sm:text-sm tracking-[0.24em] mb-4"
              >
                {iconsMap[slug] || <Scale className="w-4 h-4" />}
                <span>{data.badge}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.18] mb-5 tracking-tight"
              >
                {data.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg sm:text-xl text-amber-800 font-semibold mb-5 leading-relaxed"
              >
                {data.subtitle}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-base text-slate-600 leading-relaxed mb-8"
              >
                {data.summary}
              </motion.p>

              {/* Highlights Checkmarks */}
              <div className="grid sm:grid-cols-2 gap-3.5 mb-10">
                {data.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-700 leading-snug">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.dispatchEvent(new CustomEvent("open-consultation-modal"));
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-amber-800 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-md cursor-pointer"
                >
                  Dosyanızı İnceletin
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:+905398211121"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-300 hover:border-amber-700 hover:text-amber-800 text-slate-800 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4 text-amber-700" />
                  0539 821 11 21
                </a>
              </div>
            </div>

            {/* Right Showcase Image */}
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
                    Uzman Hukuki Temsil
                  </div>
                  <div className="text-base sm:text-lg font-bold">
                    {data.title} Departmanı
                  </div>
                </div>
              </div>

              {/* Floating Stat Card with Full Auto-Fit Width & Spacing */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-4">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-700 tracking-tight whitespace-nowrap">
                  {data.stats[0]?.value}
                </div>
                <div className="border-l border-slate-200 pl-4">
                  <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider whitespace-nowrap">
                    {data.stats[0]?.label}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    Kanıtlanmış Başarı
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-slate-900 text-white border-b border-amber-700/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            {data.stats.map((st, i) => (
              <div key={i} className="pt-4 sm:pt-0">
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 mb-1 tracking-tight">{st.value}</div>
                <div className="text-sm text-slate-300 font-medium tracking-wide">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Services Detail Grid */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="font-eyebrow text-amber-700 text-xs sm:text-sm tracking-[0.24em] mb-2.5">Kapsamlı Hizmet Yelpazesi</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              {data.title} Kapsamında Neler Sunuyoruz?
            </h2>
            <p className="text-slate-600 text-base">
              Müvekkillerimizin her türlü hukuki ihtiyacına yönelik özel uzmanlık modülleri ve koruyucu danışmanlık hizmetleri.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {data.subServices.map((sub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-amber-700/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 font-bold text-xs flex items-center justify-center border border-amber-200">
                      0{index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">{sub.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {sub.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  {sub.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-700 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="font-eyebrow text-amber-700 text-xs sm:text-sm tracking-[0.24em] mb-2.5">Çalışma Metodolojimiz</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Hukuki Sürecinizi Nasıl Yönetiyoruz?
            </h2>
            <p className="text-slate-600 text-base">
              İlk başvurunuzdan kesinleşen mahkeme kararına kadar şeffaf, öngörülebilir ve aşamalı strateji.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] border border-slate-200 rounded-2xl p-6 relative hover:border-amber-700 transition-colors"
              >
                <div className="text-3xl font-extrabold text-amber-700/40 mb-3 tracking-tight">{step.number}</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">{step.title}</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-14">
            <div className="font-eyebrow text-amber-700 text-xs sm:text-sm tracking-[0.24em] mb-2.5">Merak Edilenler</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
              {data.title} ile İlgili Sıkça Sorulan Sorular
            </h2>
            <p className="text-slate-600 text-sm">
              Müvekkillerimizin bu alanda en çok yönelttiği sorular ve hukuki cevapları.
            </p>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-bold text-slate-900 text-base sm:text-lg hover:text-amber-800 transition-colors"
                >
                  <span>{faq.question}</span>
                  <span className="text-amber-700 text-xl shrink-0 font-bold">
                    {openFaq === idx ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Booking Form Card */}
      <section id="consultation" className="py-20 bg-white border-t border-slate-200">
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
                  {data.title} İçin Ön Görüşme Talep Edin
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
                    {data.title} departmanımız dosyanızı inceleyerek en kısa sürede sizinle iletişime geçecektir.
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
                        value={data.title}
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
                    Gizli Başvuruyu İlet →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Other Practice Areas Carousel/Grid */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <div className="font-eyebrow text-amber-700 text-xs sm:text-sm tracking-[0.24em] mb-2">Diğer Uzmanlıklarımız</div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Diğer Çalışma Alanlarımız</h3>
            </div>
            <Link href="/#practices" className="text-amber-700 font-semibold text-sm hover:underline">
              Tümünü Gör &rarr;
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPractices.slice(0, 3).map((item, idx) => (
              <Link
                key={idx}
                href={`/${item.slug}`}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-amber-700/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4 group-hover:bg-amber-700 group-hover:text-white transition-colors">
                    {iconsMap[item.slug] || <Scale className="w-5 h-5" />}
                  </div>
                  <h4 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-amber-700 transition-colors tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-2 mb-4">
                    {item.summary}
                  </p>
                </div>
                <div className="text-amber-700 font-semibold text-xs inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Detaylı İncele <span>→</span>
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
