"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, ShieldCheck, Award, ArrowRight, MapPin } from "lucide-react";

export function Attorneys() {
  const attorney = {
    name: "Avukat Süleyman UĞUR",
    title: "Kurucu & Yönetici Avukat",
    firm: "NAS Hukuk & Danışmanlık",
    image: "/law/attorney_robert.jpg",
    phone: "0539 821 11 21",
    phoneLink: "tel:+905398211121",
    whatsappLink: "https://wa.me/905398211121?text=Merhaba%20Avukat%20S%C3%BCleyman%20Bey,%20hukuki%20dan%C4%B1%C5%9Fmanl%C4%B1k%20almak%20istiyorum.",
    email: "info@nashukuk.com",
    address: "Nurol Tower, İzzet Paşa, Yeni Yol Cd. No : 3 K : 32 D : 251, 34149 Şişli/İstanbul",
    experience: "25+ Yıl Hukuki Tecrübe",
    bio: "NAS Hukuk & Danışmanlık kurucusu Avukat Süleyman UĞUR; ceza ve ağır ceza hukuku, ticaret & şirketler hukuku, gayrimenkul ihtilafları ve iş hukuku başta olmak üzere karmaşık uyuşmazlıklarda bireysel ve kurumsal müvekkillerine şeffaf, stratejik ve sonuç odaklı avukatlık ve hukuki danışmanlık hizmeti sunmaktadır.",
    expertise: [
      "Ağır Ceza & Soruşturma Savunması",
      "Ticaret & Şirketler Hukuku / M&A",
      "Gayrimenkul, İmar & Kira Uyuşmazlıkları",
      "İş & Sosyal Güvenlik Davaları",
      "Sözleşmeler Mimarisi & Risk Yönetimi",
      "Zorunlu ve İhtiyari Arabuluculuk"
    ]
  };

  return (
    <section id="team" className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="font-eyebrow text-amber-700 text-xs sm:text-sm tracking-[0.24em] mb-2.5">
            Kurucu Avukatımız
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Avukat Süleyman UĞUR
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Hukuki süreçlerinizde doğrudan kurucu avukatımız ile birebir görüşme, tam mahremiyet ve tavizsiz savunma garantisi.
          </p>
        </div>

        {/* Featured Single Attorney Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#FAF8F5] border border-slate-200/90 rounded-3xl overflow-hidden shadow-xl"
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-12">
            
            {/* Left Image & Trust Box */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-slate-900 group">
                <img
                  src={attorney.image}
                  alt={attorney.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                    {attorney.title}
                  </div>
                  <div className="text-xl font-extrabold">
                    {attorney.name}
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    {attorney.firm}
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-xl border border-amber-600/40 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <div>
                  <div className="text-[10px] text-amber-400 font-semibold uppercase tracking-wider">Danışmanlık Durumu</div>
                  <div className="text-xs font-bold">Randevular Açık</div>
                </div>
              </div>
            </div>

            {/* Right Details & Direct Actions */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/70 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
                  <Award className="w-4 h-4 text-amber-700" />
                  <span>{attorney.experience}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {attorney.name}
                </h3>
                <div className="text-amber-700 font-semibold text-sm sm:text-base mt-1">
                  {attorney.title} • {attorney.firm}
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {attorney.bio}
              </p>

              {/* Expertise Pills */}
              <div>
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Başlıca Uzmanlık Alanları:
                </div>
                <div className="grid sm:grid-cols-2 gap-2">
                  {attorney.expertise.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 px-3 py-2 rounded-xl shadow-2xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-700 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Location Snippet */}
              <div className="flex items-start gap-2.5 p-3.5 bg-white rounded-2xl border border-slate-200 text-xs text-slate-600">
                <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span><strong>Ofis:</strong> {attorney.address}</span>
              </div>

              {/* Action Buttons: WhatsApp & Phone & Modal */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={attorney.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp İle Doğrudan Yaz
                </a>

                <a
                  href={attorney.phoneLink}
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-amber-800 text-white px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  {attorney.phone}
                </a>

                <button
                  type="button"
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.dispatchEvent(new CustomEvent("open-consultation-modal"));
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 bg-white border border-slate-300 hover:border-amber-700 hover:text-amber-800 text-slate-800 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-2xs cursor-pointer"
                >
                  Randevu Oluştur
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

