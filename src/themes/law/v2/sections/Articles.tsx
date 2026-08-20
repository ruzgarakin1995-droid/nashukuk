"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";

export function Articles() {
  const articles = [
    {
      slug: "yeni-is-kanunu-duzenlemeleri",
      title: "Yeni İş Kanunu Düzenlemeleri Neleri Kapsıyor?",
      excerpt: "Son torba yasa ile birlikte işçi ve işveren haklarında yapılan önemli değişikliklerin detaylı analizi.",
      date: "12 Ekim 2023",
      category: "İş Hukuku"
    },
    {
      slug: "kisisel-verilerin-korunmasinda-yeni-donem",
      title: "Kişisel Verilerin Korunmasında Yeni Dönem",
      excerpt: "KVKK kurul kararları ışığında şirketlerin alması gereken yeni idari ve teknik tedbirler.",
      date: "05 Ekim 2023",
      category: "Bilişim Hukuku"
    },
    {
      slug: "kira-tespit-davalarinda-dikkat-edilmesi-gerekenler",
      title: "Kira Tespit Davalarında Dikkat Edilmesi Gerekenler",
      excerpt: "Artan kira bedelleri karşısında ev sahibi ve kiracıların yasal hakları ve dava süreçleri.",
      date: "28 Eylül 2023",
      category: "Gayrimenkul Hukuku"
    }
  ];

  return (
    <section id="articles" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-14 gap-4">
          <div>
            <div className="font-eyebrow text-amber-700 text-xs sm:text-sm tracking-[0.24em] mb-2.5">Hukuki Yayınlarımız</div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">Hukuki Makaleler</h2>
            <p className="text-slate-600 text-base sm:text-lg">Güncel mevzuat değişiklikleri, Yargıtay içtihatları ve hukuki değerlendirmelerimiz.</p>
          </div>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:block">
            *Yazıyı okumak için tıklayın
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/makale/${article.slug}`}
                className="bg-white border border-slate-200 rounded-2xl p-7 hover:shadow-xl hover:border-amber-700/40 transition-all group flex flex-col justify-between h-full block"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700">{article.category}</span>
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                      <Calendar className="w-3.5 h-3.5" /> {article.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors tracking-tight">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>
                <div className="text-slate-900 font-semibold text-sm inline-flex items-center gap-1 group-hover:text-amber-700 group-hover:gap-2 transition-all pt-4 border-t border-slate-100">
                  Devamını Oku <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
