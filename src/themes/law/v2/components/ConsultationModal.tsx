"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Scale, 
  Briefcase, 
  Building, 
  HeartPulse, 
  Home, 
  FileText, 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  X, 
  MapPin, 
  Check,
  MessageCircle
} from "lucide-react";

interface AttorneyOption {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  image: string;
  status: string;
}

const attorneysList: AttorneyOption[] = [
  {
    id: "suleyman-ugur",
    name: "Avukat Süleyman UĞUR",
    role: "Kurucu & Yönetici Avukat",
    experience: "25+ Yıl Tecrübe",
    specialty: "Ağır Ceza, Ticaret, İş & Gayrimenkul",
    image: "/law/attorney_robert.jpg",
    status: "Randevuya Açık"
  }
];

const practiceCategories = [
  { id: "ceza", name: "Ceza & Ağır Ceza", icon: Scale, desc: "Soruşturma & Ağır Ceza Savunması" },
  { id: "is", name: "İş & Sosyal Güvenlik", icon: Briefcase, desc: "İşe İade, Kıdem & Uyuşmazlık" },
  { id: "ticaret", name: "Ticaret & Şirketler", icon: Building, desc: "M&A, Ortaklık & Kurumsal" },
  { id: "aile", name: "Aile & Mal Rejimi", icon: HeartPulse, desc: "Boşanma, Velayet & Mal Paylaşımı" },
  { id: "gayrimenkul", name: "Gayrimenkul & İmar", icon: Home, desc: "Tapu İptal, Kira & Kentsel Dönüşüm" },
  { id: "sozlesmeler", name: "Sözleşmeler Hukuku", icon: FileText, desc: "Ticari Anlaşma & Risk Mimarisi" },
];

const meetingTypes = [
  { id: "office", label: "Nurol Tower Ofiste Yüz Yüze", icon: MapPin, desc: "Şişli Merkez Ofis Toplantı Salonu" },
  { id: "video", label: "Online Video Konferans", icon: Video, desc: "Şifreli Zoom / Teams Görüşmesi" },
  { id: "phone", label: "Öncelikli Telefon Görüşmesi", icon: Phone, desc: "Doğrudan Avukat İle İletişim" },
];

const availableDates = [
  { day: "Bugün", date: "19 Ağustos", isToday: true },
  { day: "Yarın", date: "20 Ağustos" },
  { day: "Perşembe", date: "21 Ağustos" },
  { day: "Cuma", date: "22 Ağustos" },
  { day: "Pazartesi", date: "25 Ağustos" },
];

const timeSlots = ["10:00", "11:30", "14:00", "15:30", "17:00", "18:15"];

export function ConsultationModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selectedPractice, setSelectedPractice] = useState("ceza");
  const [selectedAttorney, setSelectedAttorney] = useState("suleyman-ugur");
  const [selectedMeetingType, setSelectedMeetingType] = useState("office");
  const [selectedDate, setSelectedDate] = useState("19 Ağustos");
  const [selectedTime, setSelectedTime] = useState("14:00");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingCode, setBookingCode] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const currentAttorney = attorneysList.find(a => a.id === selectedAttorney) || attorneysList[0];
  const currentPractice = practiceCategories.find(p => p.id === selectedPractice) || practiceCategories[0];
  const currentMeeting = meetingTypes.find(m => m.id === selectedMeetingType) || meetingTypes[0];

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = "NAS-" + Math.floor(10000 + Math.random() * 90000);
    setBookingCode(randomCode);

    // Build Emoji-rich WhatsApp message
    const message = `🏛️ *NAS HUKUK & DANIŞMANLIK - ÖN DANIŞMANLIK TALEBİ* ⚖️
-----------------------------------
📋 *Randevu Takip Kodu:* #${randomCode}

👤 *Müvekkil Bilgileri:*
• *Ad Soyad:* ${formData.name || "Belirtilmedi"}
• *Telefon:* ${formData.phone || "Belirtilmedi"}
• *E-Posta:* ${formData.email || "Belirtilmedi"}

⚖️ *Talep Edilen Hukuki Hizmet:*
• *Çalışma Alanı:* ${currentPractice.name}
• *Danışman Avukat:* ${currentAttorney.name} (${currentAttorney.role})
• *Görüşme Şekli:* ${currentMeeting.label}
• *Tercih Edilen Zaman:* 📅 ${selectedDate} | ⏰ ${selectedTime}

📝 *Dava / Uyuşmazlık Özeti:*
"${formData.notes || "Ön görüşmede detaylandırılacaktır."}"

-----------------------------------
🏢 *Ofis:* Nurol Tower, İzzet Paşa, Yeni Yol Cd. No : 3 K : 32 D : 251, Şişli/İstanbul
🔒 _Bu randevu talebi Avukatlık Kanunu ve KVKK Gizlilik Protokolü kapsamında iletilmiştir._`;

    const wpPhone = "905398211121";
    const encodedUrl = `https://wa.me/${wpPhone}?text=${encodeURIComponent(message)}`;
    setWhatsappUrl(encodedUrl);
    setIsSubmitted(true);

    // Direct WhatsApp redirect in new tab
    if (typeof window !== "undefined") {
      window.open(encodedUrl, "_blank");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 25 }}
            transition={{ type: "spring", duration: 0.45, bounce: 0.1 }}
            className="relative w-full max-w-3xl bg-[#FAF8F5] rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden z-10 my-8 max-h-[92vh] flex flex-col"
          >
            {/* Modal Top Header */}
            <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between">
              <div>
                <div className="font-logo-brand text-lg sm:text-xl font-bold text-slate-900 leading-tight tracking-[0.18em] uppercase">
                  NAS
                </div>
                <div className="font-logo-sub text-[8px] text-amber-800 font-semibold tracking-[0.28em] uppercase mt-0.5">
                  HUKUK & DANIŞMANLIK
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors focus:outline-none cursor-pointer"
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="overflow-y-auto p-6 sm:p-8 flex-1">
              
              {isSubmitted ? (
                /* Success Screen with Direct WhatsApp Button */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg text-center max-w-xl mx-auto my-4"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-4">
                    WhatsApp Randevu Talebiniz Hazırlandı
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
                    WhatsApp Yönlendirmesi Yapıldı 💬
                  </h3>

                  <p className="text-slate-600 text-sm max-w-md mx-auto mb-8 leading-relaxed">
                    Sayın <strong>{formData.name || "Müvekkilimiz"}</strong>, randevu detaylarınız WhatsApp hattımıza aktarıldı. Açılmadıysa aşağıdaki yeşil butona tıklayabilirsiniz.
                  </p>

                  {/* Summary card with warm theme styling */}
                  <div className="bg-[#FAF8F5] text-slate-900 rounded-2xl p-6 text-left mb-8 space-y-3.5 border border-amber-200 shadow-sm">
                    <div className="flex justify-between items-center border-b border-amber-200/80 pb-3">
                      <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Takip Kodu</span>
                      <span className="text-lg font-extrabold text-amber-700 font-mono tracking-wide">{bookingCode}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-slate-500 font-medium">Danışman Avukat:</span>
                      <span className="font-bold text-slate-900">{currentAttorney.name}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-slate-500 font-medium">Uzmanlık Dalı:</span>
                      <span className="font-semibold text-slate-900">{currentPractice.name}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-slate-500 font-medium">Randevu Zamanı:</span>
                      <span className="font-bold text-amber-800">{selectedDate} / {selectedTime}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-slate-500 font-medium">Görüşme Türü:</span>
                      <span className="font-semibold text-slate-900">{currentMeeting.label}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp İle Mesajı Gönder
                    </a>
                    <button
                      onClick={onClose}
                      className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl transition-all shadow-md cursor-pointer"
                    >
                      Pencereyi Kapat
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Focused Clean 4-Step Form Flow */
                <div className="space-y-6 max-w-2xl mx-auto">
                  
                  {/* 1. Practice Area */}
                  <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-6 h-6 rounded-md bg-amber-700 text-white font-bold text-xs flex items-center justify-center">1</span>
                      <h4 className="text-base font-bold text-slate-900 tracking-tight">Hukuki Alan Seçiniz</h4>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {practiceCategories.map((p) => {
                        const IconC = p.icon;
                        const isSelected = selectedPractice === p.id;
                        return (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => setSelectedPractice(p.id)}
                            className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                              isSelected
                                ? "bg-amber-50/90 border-amber-700 ring-2 ring-amber-700/20"
                                : "bg-[#FDFBF7] border-slate-200 hover:border-amber-300"
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <IconC className={`w-4 h-4 ${isSelected ? "text-amber-700" : "text-slate-500"}`} />
                              {isSelected && <Check className="w-3.5 h-3.5 text-amber-700" />}
                            </div>
                            <div className="font-bold text-xs text-slate-900 leading-tight">{p.name}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. Attorney Selection */}
                  <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-6 h-6 rounded-md bg-amber-700 text-white font-bold text-xs flex items-center justify-center">2</span>
                      <h4 className="text-base font-bold text-slate-900 tracking-tight">Danışman Avukatınız</h4>
                    </div>

                    <div className="p-4 rounded-xl border bg-amber-50/80 border-amber-700 ring-2 ring-amber-700/20 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3.5">
                        <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-900 shrink-0 border border-slate-200 shadow-xs">
                          <img src="/law/attorney_robert.jpg" alt="Avukat Süleyman UĞUR" className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div className="font-extrabold text-sm text-slate-900">Avukat Süleyman UĞUR</div>
                          <div className="text-xs text-amber-800 font-bold">Kurucu Avukat • 25+ Yıl Hukuki Tecrübe</div>
                          <div className="text-[11px] text-slate-600 mt-0.5">Ağır Ceza, Ticaret, Gayrimenkul, İş Hukuku</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-white border border-emerald-200 px-3 py-1.5 rounded-lg shadow-2xs self-end sm:self-center">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Doğrudan Temsil</span>
                      </div>
                    </div>
                  </div>

                  {/* 3. Meeting Format & Date/Time */}
                  <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-md bg-amber-700 text-white font-bold text-xs flex items-center justify-center">3</span>
                      <h4 className="text-base font-bold text-slate-900 tracking-tight">Görüşme Şekli & Zamanı</h4>
                    </div>

                    {/* Format Options */}
                    <div className="grid grid-cols-3 gap-2">
                      {meetingTypes.map((m) => {
                        const IconM = m.icon;
                        const isSelected = selectedMeetingType === m.id;
                        return (
                          <button
                            key={m.id}
                            type="button"
                            onClick={() => setSelectedMeetingType(m.id)}
                            className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                              isSelected
                                ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                                : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                            }`}
                          >
                            <IconM className={`w-4 h-4 mx-auto mb-1 ${isSelected ? "text-amber-400" : "text-amber-700"}`} />
                            <div className="text-[11px] font-bold leading-tight">{m.label}</div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Date & Time Selectors */}
                    <div className="grid sm:grid-cols-2 gap-4 pt-2">
                      <div>
                        <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">Gün Seçimi</div>
                        <div className="grid grid-cols-2 gap-1.5">
                          {availableDates.slice(0, 4).map((d, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setSelectedDate(d.date)}
                              className={`p-2 rounded-lg border text-left text-xs cursor-pointer ${
                                selectedDate === d.date
                                  ? "bg-amber-700 text-white border-amber-700 font-bold"
                                  : "bg-slate-50 border-slate-200 text-slate-700"
                              }`}
                            >
                              <div className="text-[9px] opacity-75">{d.day}</div>
                              <div>{d.date}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">Saat Seçimi</div>
                        <div className="grid grid-cols-3 gap-1.5">
                          {timeSlots.map((time, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setSelectedTime(time)}
                              className={`py-2 px-1 rounded-lg border text-center text-xs font-bold cursor-pointer ${
                                selectedTime === time
                                  ? "bg-slate-900 text-white border-slate-900"
                                  : "bg-slate-50 border-slate-200 text-slate-700"
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 4. Client Form */}
                  <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-6 h-6 rounded-md bg-amber-700 text-white font-bold text-xs flex items-center justify-center">4</span>
                      <h4 className="text-base font-bold text-slate-900 tracking-tight">İletişim & WhatsApp Entegrasyonu</h4>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-700 mb-1">Ad Soyad</label>
                          <input
                            type="text"
                            required
                            placeholder="Adınız Soyadınız"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 text-xs focus:outline-none focus:border-amber-700"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-700 mb-1">Telefon</label>
                          <input
                            type="tel"
                            required
                            placeholder="+90 (5XX) XXX XX XX"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 text-xs focus:outline-none focus:border-amber-700"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 mb-1">E-posta</label>
                        <input
                          type="email"
                          required
                          placeholder="eposta@ornek.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-900 text-xs focus:outline-none focus:border-amber-700"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 mb-1">Dava / Danışmanlık Konusu</label>
                        <textarea
                          rows={2}
                          placeholder="Kısaca bahsetmek istediğiniz detaylar..."
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-slate-900 text-xs focus:outline-none focus:border-amber-700 resize-y"
                        ></textarea>
                      </div>

                      <div className="flex items-start gap-2 pt-1">
                        <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                        <span className="text-[11px] text-slate-500">Tüm bilgileriniz Avukatlık Kanunu uyarınca %100 gizlilik protokolü ile korunur.</span>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mt-3 cursor-pointer"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Randevuyu Onayla & WhatsApp'a Aktar
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </form>
                  </div>

                </div>
              )}

            </div>

          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
