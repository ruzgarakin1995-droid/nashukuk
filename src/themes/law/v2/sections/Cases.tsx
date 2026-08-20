"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Cases() {
  const cases = [
    {
      slug: "uluslararasi-sirket-birlesmesi",
      category: "Ticaret Hukuku",
      title: "Uluslararası Şirket Birleşmesi",
      description: "İki büyük teknoloji firmasının hukuki altyapısının birleştirilmesi ve sözleşmelerinin düzenlenmesi süreci başarıyla tamamlandı.",
      year: "2023"
    },
    {
      slug: "toplu-is-sozlesmesi-ihtilafi",
      category: "İş Hukuku",
      title: "Toplu İş Sözleşmesi İhtilafı",
      description: "Sendika ile işveren arasında yaşanan uyuşmazlık, arabuluculuk sürecinde müvekkilimiz lehine sonuçlandırıldı.",
      year: "2024"
    },
    {
      slug: "karmasik-tapu-iptal-davasi",
      category: "Gayrimenkul Hukuku",
      title: "Karmaşık Tapu İptal Davası",
      description: "Miras kaynaklı, çok taraflı gayrimenkul uyuşmazlığı, Yargıtay aşamasında kesinleşerek kazanıldı.",
      year: "2023"
    }
  ];

  return (
    <section id="cases" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="font-eyebrow text-amber-700 text-xs sm:text-sm tracking-[0.24em] mb-2.5">Emsal Kararlarımız</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Örnek Başarılarımız</h2>
          <p className="text-slate-600 text-base sm:text-lg">Müvekkillerimiz için elde ettiğimiz emsal niteliğindeki hukuki başarılar ve sonuçlandırdığımız önemli projeler.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href={`/vaka/${item.slug}`}
                className="backdrop-blur-2xl bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-amber-700/40 transition-all flex flex-col h-full group p-8"
              >
                <div className="flex justify-between items-center mb-5">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">{item.category}</span>
                  <span className="text-slate-400 text-xs font-semibold">{item.year}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-8 flex-grow text-sm leading-relaxed">{item.description}</p>
                <div className="flex items-center gap-2 text-slate-900 text-sm font-semibold group-hover:text-amber-700 transition-colors mt-auto pt-4 border-t border-slate-100">
                  Vaka İncelemesi <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
