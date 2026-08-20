"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "Ceza Hukuku",
    message: ""
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `🏛️ *NAS HUKUK & DANIŞMANLIK - WEB İLETİŞİM FORMU* ⚖️
-----------------------------------
👤 *Ad Soyad:* ${formData.name}
📞 *Telefon:* ${formData.phone}
📌 *Konu:* ${formData.subject}
📝 *Mesaj:* ${formData.message}
-----------------------------------
🏢 *Adres:* Nurol Tower, Şişli/İstanbul`;

    const wpUrl = `https://wa.me/905398211121?text=${encodeURIComponent(text)}`;
    setSubmitted(true);
    if (typeof window !== "undefined") {
      window.open(wpUrl, "_blank");
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Business & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="font-eyebrow text-amber-700 text-xs sm:text-sm tracking-[0.24em] mb-2.5">İletişim & Randevu</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Bize Ulaşın</h2>
            <p className="text-slate-600 mb-8 text-base sm:text-lg">
              Hukuki sorunlarınızla ilgili ön değerlendirme yapmak, dava dosyası inceletmek ve randevu oluşturmak için Avukat Süleyman UĞUR ile iletişime geçebilirsiniz.
            </p>
            
            <div className="space-y-6 mb-8">
              {/* Address */}
              <div className="flex gap-4 items-start bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs">
                <div className="w-12 h-12 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-center text-amber-700 flex-shrink-0 shadow-2xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-sm sm:text-base">Ofis Adresimiz</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Nurol Tower, İzzet Paşa, Yeni Yol Cd. No : 3 K : 32 D : 251, 34149 Şişli/İstanbul
                  </p>
                </div>
              </div>
              
              {/* Phone & WhatsApp */}
              <div className="flex gap-4 items-start bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs">
                <div className="w-12 h-12 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-center text-amber-700 flex-shrink-0 shadow-2xs">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-sm sm:text-base">Telefon & WhatsApp</h4>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    <a href="tel:+905398211121" className="text-amber-800 font-bold hover:underline">0539 821 11 21</a>
                  </p>
                  <p className="text-slate-500 text-[11px] mt-0.5">Hafta içi 09:00 - 18:30 / Acil durumlar 7/24</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-start bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs">
                <div className="w-12 h-12 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-center text-amber-700 flex-shrink-0 shadow-2xs">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1 text-sm sm:text-base">E-Posta</h4>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    <a href="mailto:info@nashukuk.com" className="hover:text-amber-700 transition-colors">info@nashukuk.com</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout Banner */}
            <a
              href="https://wa.me/905398211121?text=Merhaba%20Avukat%20S%C3%BCleyman%20Bey,%20hukuki%20dan%C4%B1%C5%9Fmanl%C4%B1k%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-2xl font-bold text-sm shadow-md transition-all group cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp İle Hızlı Mesaj Gönder</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="backdrop-blur-2xl bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">Mesaj Gönderin</h3>
            <p className="text-xs text-slate-500 mb-6">Formu doldurarak doğrudan Avukat Süleyman UĞUR'a iletebilirsiniz.</p>

            {submitted ? (
              <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-slate-900">Mesajınız İletildi</h4>
                <p className="text-xs text-slate-600">WhatsApp hattımıza yönlendirildiniz. En kısa sürede geri dönüş sağlanacaktır.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Ad Soyad</label>
                    <input
                      type="text"
                      required
                      placeholder="Adınız Soyadınız"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-700 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Telefon</label>
                    <input
                      type="tel"
                      required
                      placeholder="05XX XXX XX XX"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-700 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Hukuki Konu</label>
                  <select
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-700 transition-colors"
                  >
                    <option value="Ceza Hukuku">Ceza & Ağır Ceza Hukuku</option>
                    <option value="Ticaret Hukuku">Ticaret & Şirketler Hukuku</option>
                    <option value="İş Hukuku">İş & Sosyal Güvenlik Hukuku</option>
                    <option value="Gayrimenkul Hukuku">Gayrimenkul & İmar Hukuku</option>
                    <option value="Aile Hukuku">Aile & Boşanma Hukuku</option>
                    <option value="Sözleşmeler Hukuku">Sözleşmeler Hukuku</option>
                    <option value="Diğer">Diğer Danışmanlık Talepleri</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Mesajınız</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Danışmak istediğiniz durum hakkında kısa bilgi..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-amber-700 transition-colors resize-y"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-amber-800 text-white font-bold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm uppercase tracking-wider"
                >
                  <MessageCircle className="w-4 h-4" />
                  Mesajı İlet & WhatsApp'a Aktar
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

