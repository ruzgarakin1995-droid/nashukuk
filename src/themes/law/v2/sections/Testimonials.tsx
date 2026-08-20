"use client";
import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      text: "Ticari ihtilafımızda gösterdikleri profesyonel yaklaşım ve ürettikleri hızlı çözüm sayesinde şirketimiz büyük bir yükten kurtuldu.",
      author: "Ahmet K.",
      company: "Yönetim Kurulu Başkanı"
    },
    {
      text: "Kişisel davamdaki hassasiyetleri ve sürecin her adımında beni bilgilendirmeleri, kendimi güvende hissetmemi sağladı.",
      author: "Zeynep S.",
      company: "Müvekkil"
    },
    {
      text: "Sözleşmelerimizin hazırlanması ve hukuki danışmanlık süreçlerinde artık tek adresimiz. Kesinlikle tavsiye ediyorum.",
      author: "Burak M.",
      company: "Girişimci"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="font-eyebrow text-amber-700 text-xs sm:text-sm tracking-[0.24em] mb-2.5">Müvekkil Deneyimleri</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Müvekkil Yorumları</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="backdrop-blur-2xl bg-slate-50 border border-slate-200 p-8 rounded-2xl relative"
            >
              <Quote className="w-10 h-10 text-amber-700/20 absolute top-6 right-6" />
              <p className="text-slate-700 italic mb-8 relative z-10 leading-relaxed">"{test.text}"</p>
              <div>
                <div className="font-bold text-slate-900">{test.author}</div>
                <div className="text-sm text-slate-500">{test.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
