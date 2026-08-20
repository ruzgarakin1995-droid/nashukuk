"use client";
import React from "react";
import { motion } from "framer-motion";

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Ön Görüşme ve Analiz",
      desc: "Dosyanızı detaylıca dinliyor, hukuki durum tespiti ve risk analizi yapıyoruz."
    },
    {
      num: "02",
      title: "Strateji Belirleme",
      desc: "Mevcut yasal çerçevede en etkili ve hızlı sonuç verecek hukuki rotayı çiziyoruz."
    },
    {
      num: "03",
      title: "Hukuki Aksiyon",
      desc: "Dava, arabuluculuk veya sözleşme süreçlerini uzman ekibimizle başlatıyoruz."
    },
    {
      num: "04",
      title: "Raporlama ve Sonuç",
      desc: "Sürecin her aşamasında şeffaf bilgi veriyor ve süreci başarıyla sonlandırıyoruz."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="font-eyebrow text-amber-700 text-xs sm:text-sm tracking-[0.24em] mb-2.5">Çalışma Metodolojimiz</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Çalışma Sürecimiz</h2>
          <p className="text-slate-600 text-lg">Hukuki sorunlarınızı çözerken izlediğimiz sistematik ve şeffaf adımlar.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 -translate-y-1/2"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="w-16 h-16 bg-white border-2 border-amber-700 rounded-full flex items-center justify-center text-2xl font-bold text-amber-700 mb-6 mx-auto shadow-lg backdrop-blur-2xl">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">{step.title}</h3>
              <p className="text-slate-600 text-center">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
