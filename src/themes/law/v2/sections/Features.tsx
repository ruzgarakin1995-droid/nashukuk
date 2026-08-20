"use client";
import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Award, Users } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Güvenilir Temsil",
      description: "Müvekkillerimizin haklarını en üst düzeyde koruyor, her aşamada şeffaf iletişim sağlıyoruz."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Hızlı Aksiyon",
      description: "Hukuki süreçlerde zamanın önemini biliyor, vakit kaybetmeden stratejik adımlar atıyoruz."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Uzman Kadro",
      description: "Farklı hukuk dallarında uzmanlaşmış deneyimli avukatlarımızla tam kapsamlı hizmet veriyoruz."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Birebir İlgi",
      description: "Her dosyanın benzersiz olduğunun bilinciyle, müvekkillerimize özel hukuki çözümler üretiyoruz."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Neden Bizi Seçmelisiniz?</h2>
          <p className="text-slate-600 text-lg">Yılların verdiği tecrübe ve modern hukukun dinamiklerini birleştirerek, en karmaşık hukuki sorunlarda bile yanınızdayız.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="backdrop-blur-2xl bg-white/90 border border-slate-200 p-8 rounded-2xl hover:border-amber-700/50 transition-colors group"
            >
              <div className="w-16 h-16 bg-slate-50 text-amber-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
