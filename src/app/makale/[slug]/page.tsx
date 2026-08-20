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
  Calendar, 
  Clock, 
  Share2, 
  BookOpen, 
  AlertCircle 
} from "lucide-react";
import { articlesData } from "@/themes/law/v2/article-data";
import { Navbar } from "@/themes/law/v2/sections/Navbar";
import { Footer } from "@/themes/law/v2/sections/Footer";
import { FloatingWhatsApp } from "@/themes/law/v2/components/FloatingWhatsApp";

export default function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const data = articlesData[slug];

  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!data) {
    return notFound();
  }

  const otherArticles = Object.values(articlesData).filter((a) => a.slug !== slug);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-900 font-sans selection:bg-amber-700 selection:text-white">
      
      {/* Universal Top Navbar with Desktop Dropdowns & Mobile Hamburger Menu */}
      <Navbar />

      {/* Article Header & Cover */}
      <article className="pt-12 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">

          {/* Metadata Tagline with font-eyebrow */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
            <span className="font-eyebrow text-amber-700 text-xs sm:text-sm tracking-[0.24em] font-bold">{data.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-slate-400" /> {data.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400" /> {data.readTime}</span>
          </div>

          {/* Article Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.2] mb-8 tracking-tight"
          >
            {data.title}
          </motion.h1>

          {/* Author Card Header */}
          <div className="flex items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm mb-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                <img 
                  src={data.author.image} 
                  alt={data.author.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">{data.author.name}</div>
                <div className="text-xs text-amber-700 font-medium">{data.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: data.title, url: window.location.href });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Makale bağlantısı panoya kopyalandı!");
                  }
                }}
                className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-amber-700 hover:border-amber-700 transition-colors"
                title="Makaleyi Paylaş"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hero Image Showcase */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/9] bg-slate-900 mb-12">
            <img
              src={data.heroImage}
              alt={data.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Main Grid: Content + Sidebar */}
          <div className="grid lg:grid-cols-12 gap-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8">
              
              {/* Lead Summary */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border-l-4 border-amber-700 border-y border-r border-slate-200 shadow-sm mb-10">
                <div className="font-eyebrow text-xs text-amber-700 tracking-[0.24em] font-bold mb-2">Hukuki Özet</div>
                <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                  {data.summary}
                </p>
              </div>

              {/* Dynamic Content Sections */}
              <div className="space-y-12">
                {data.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight pt-2">
                      {sec.heading}
                    </h2>
                    
                    {sec.content.map((p, pIdx) => (
                      <p key={pIdx} className="text-slate-700 leading-relaxed text-base">
                        {p}
                      </p>
                    ))}

                    {/* Legal Alert Callout */}
                    {sec.callout && (
                      <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-6 my-6">
                        <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-2">
                          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0" />
                          <span>{sec.callout.title}</span>
                        </div>
                        <p className="text-slate-700 text-sm leading-relaxed">
                          {sec.callout.text}
                        </p>
                      </div>
                    )}

                    {/* Bullet Points */}
                    {sec.points && (
                      <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
                        {sec.points.map((pt, ptIdx) => (
                          <div key={ptIdx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                            <span className="text-sm font-medium text-slate-700">{pt}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Key Takeaways Box */}
              <div className="mt-14 bg-slate-900 text-white rounded-2xl p-8 shadow-xl border border-amber-700/40">
                <div className="flex items-center gap-2 font-eyebrow text-amber-400 text-xs tracking-[0.24em] mb-4">
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                  <span>Önemli Çıkarımlar & Sonuç</span>
                </div>
                <div className="space-y-3">
                  {data.keyTakeaways.map((takeaway, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-3 text-sm text-slate-200">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-2" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mt-10 flex flex-wrap gap-2 pt-6 border-t border-slate-200">
                {data.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-3.5 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-600 hover:border-amber-700 hover:text-amber-800 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Table of Contents Box */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
                <div className="flex items-center gap-2 font-eyebrow text-xs text-amber-700 tracking-[0.24em] mb-4">
                  <BookOpen className="w-4 h-4" />
                  <span>İçindekiler</span>
                </div>
                <div className="space-y-3 text-xs sm:text-sm">
                  {data.tableOfContents.map((toc, tocIdx) => (
                    <div
                      key={tocIdx}
                      className="text-slate-600 hover:text-amber-700 font-medium leading-snug cursor-pointer transition-colors"
                    >
                      {toc}
                    </div>
                  ))}
                </div>

                {/* Direct Consultation Widget */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-900 mb-2">Hukuki Desteğe mi İhtiyacınız Var?</div>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                    Mevzuat ve dava süreçleriniz için Avukat Süleyman UĞUR ile hemen iletişime geçin.
                  </p>
                  <a
                    href="#consultation"
                    className="w-full py-3 bg-slate-900 hover:bg-amber-800 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    Danışmanlık Talep Et
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </article>

      {/* Consultation Booking Form Section */}
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
                  {data.category} Konusunda Danışmanlık Alın
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Sorularınızı ve dosyanızı iletin, Avukat Süleyman UĞUR en kısa sürede durumunuzu değerlendirerek dönüş sağlasın.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-amber-400/30">
                  <CheckCircle className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">Başvurunuz Alındı</h4>
                  <p className="text-slate-300 text-sm">
                    Departmanımız başvurunuzu inceleyerek en kısa sürede sizinle iletişime geçecektir.
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

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">Danışmak İstediğiniz Konu</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Konu hakkında kısa bilgi veriniz..."
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

      {/* Other Articles Grid */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <div className="font-eyebrow text-amber-700 text-xs sm:text-sm tracking-[0.24em] mb-2">Güncel Yazılar</div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Diğer Hukuki Makaleler</h3>
            </div>
            <Link href="/#articles" className="text-amber-700 font-semibold text-sm hover:underline">
              Tümünü Gör &rarr;
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {otherArticles.map((item, idx) => (
              <Link
                key={idx}
                href={`/makale/${item.slug}`}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-amber-700/40 transition-all group flex flex-col justify-between"
              >
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img 
                    src={item.heroImage} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="font-eyebrow text-amber-400 text-xs tracking-[0.2em]">{item.category}</div>
                    <div className="text-xs text-slate-300 mt-1">{item.date}</div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-amber-700 transition-colors tracking-tight line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-2 mb-4">
                    {item.summary}
                  </p>
                  <div className="text-amber-700 font-semibold text-xs inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Devamını Oku <span>→</span>
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
