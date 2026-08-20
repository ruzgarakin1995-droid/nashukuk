"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      q: "İlk görüşme ücretli mi?",
      a: "Avukatlık Kanunu uyarınca hukuki danışmanlık hizmetleri ücrete tabidir. Ancak davanın üstlenilmesi durumunda bu ücret vekalet ücretinden düşülebilir."
    },
    {
      q: "Dava süreci ne kadar sürer?",
      a: "Dava süresi; mahkemenin iş yüküne, davanın türüne ve toplanacak delillere göre değişiklik göstermektedir. Ön görüşmede tahmini bir süre verilmektedir."
    },
    {
      q: "Hangi şehirlerde hizmet veriyorsunuz?",
      a: "Merkezimiz İstanbul'da olmakla birlikte, Türkiye'nin tüm illerinde çözüm ortaklarımız aracılığıyla hukuki süreçlerinizi takip edebiliyoruz."
    },
    {
      q: "Vekaletnameyi nasıl çıkarabilirim?",
      a: "Size ileteceğimiz vekaletname bilgileri ile herhangi bir notere giderek adımıza vekaletname düzenletebilirsiniz. Yurtdışında iseniz konsolosluklardan işlem yapabilirsiniz."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <div className="font-eyebrow text-amber-700 text-xs sm:text-sm tracking-[0.24em] mb-2.5">Merak Edilenler</div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Sıkça Sorulan Sorular</h2>
          <p className="text-slate-600">Hukuki süreçler ve işleyişimiz hakkında en çok merak edilenler.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-slate-200 rounded-2xl overflow-hidden backdrop-blur-2xl bg-white/50"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 transition-transform ${openIndex === index ? "rotate-180" : ""}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-slate-600 border-t border-slate-100 mt-2 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
