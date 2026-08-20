"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Scale, Briefcase, Building, HeartPulse, Home, FileText, ArrowRight } from "lucide-react";

export function PracticeAreas() {
  const areas = [
    {
      slug: "ceza-hukuku",
      icon: <Scale />,
      title: "Ceza Hukuku",
      description: "Soruşturma ve kovuşturma aşamalarında, müvekkillerimizin savunma hakkını etkin şekilde kullanmasını sağlıyoruz."
    },
    {
      slug: "is-hukuku",
      icon: <Briefcase />,
      title: "İş Hukuku",
      description: "İşçi ve işveren uyuşmazlıkları, iş sözleşmelerinin hazırlanması ve tazminat davalarında danışmanlık veriyoruz."
    },
    {
      slug: "ticaret-hukuku",
      icon: <Building />,
      title: "Ticaret Hukuku",
      description: "Şirket kuruluşları, birleşme ve devralmalar ile ticari sözleşmelerin düzenlenmesi süreçlerini yönetiyoruz."
    },
    {
      slug: "aile-hukuku",
      icon: <HeartPulse />,
      title: "Aile Hukuku",
      description: "Boşanma, nafaka, velayet ve mal paylaşımı davalarında hassas ve çözüm odaklı yaklaşım sergiliyoruz."
    },
    {
      slug: "gayrimenkul-hukuku",
      icon: <Home />,
      title: "Gayrimenkul Hukuku",
      description: "Tapu iptal davaları, kiralama süreçleri ve mülkiyet uyuşmazlıklarında hukuki destek sağlıyoruz."
    },
    {
      slug: "sozlesmeler-hukuku",
      icon: <FileText />,
      title: "Sözleşmeler Hukuku",
      description: "Her türlü hukuki sözleşmenin hazırlanması, incelenmesi ve risk analizlerinin yapılması."
    }
  ];

  return (
    <section id="practices" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="font-eyebrow text-amber-700 text-xs sm:text-sm tracking-[0.24em] mb-2.5">Hukuki Uzmanlıklarımız</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Çalışma Alanlarımız</h2>
            <p className="text-base sm:text-lg text-slate-600">Geniş yelpazede sunduğumuz hukuki hizmetlerle, her alandaki ihtiyaçlarınıza özel ve kapsamlı çözümler üretiyoruz.</p>
          </div>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider hidden sm:block">
            *Detayları görüntülemek için tıklayın
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/${area.slug}`}
                className="backdrop-blur-2xl bg-white border border-slate-200 p-8 rounded-2xl hover:shadow-xl hover:border-amber-700/50 transition-all group flex flex-col justify-between h-full block"
              >
                <div>
                  <div className="w-14 h-14 bg-slate-50 text-amber-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-700 group-hover:text-white transition-colors shadow-sm">
                    {React.cloneElement(area.icon, { className: "w-6 h-6" })}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight group-hover:text-amber-700 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                    {area.description}
                  </p>
                </div>
                <div className="text-amber-700 font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all pt-4 border-t border-slate-100 text-sm">
                  Detayları İncele
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
