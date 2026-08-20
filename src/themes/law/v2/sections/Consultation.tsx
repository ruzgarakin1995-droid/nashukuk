"use client";

import React, { useState } from "react";
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
  UserCheck, 
  Sparkles,
  MapPin,
  ChevronRight,
  Info
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
  { id: "is", name: "İş & Sosyal Güvenlik", icon: Briefcase, desc: "İşe İade, Kıdem & Toplu Uyuşmazlık" },
  { id: "ticaret", name: "Ticaret & Şirketler", icon: Building, desc: "M&A, Ortaklık & Kurumsal Hukuk" },
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

export function Consultation() {
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

  const currentAttorney = attorneysList.find(a => a.id === selectedAttorney) || attorneysList[0];
  const currentPractice = practiceCategories.find(p => p.id === selectedPractice) || practiceCategories[0];
  const currentMeeting = meetingTypes.find(m => m.id === selectedMeetingType) || meetingTypes[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = "NAS-" + Math.floor(10000 + Math.random() * 90000);
    setBookingCode(randomCode);
    setIsSubmitted(true);
  };

  return (
    <section id="consultation" className="py-24 bg-[#FAF8F5] relative overflow-hidden border-t border-slate-200">
      
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="font-eyebrow text-amber-700 text-xs sm:text-sm tracking-[0.24em] mb-2.5">
            İnteraktif Randevu Stüdyosu
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Danışmanlık Simülasyonu & Randevu
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Hukuki konunuza uygun uzman departmanı ve avukatınızı seçin; yüz yüze veya online ön görüşme tarihinizi belirleyin.
          </p>
        </div>

        {isSubmitted ? (
          /* Confirmation Success Card */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-2xl text-center"
          >
            <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-6 shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold uppercase tracking-wider mb-4">
              Randevu Başvurunuz Kaydedildi
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
              Ön Danışmanlık Randevunuz Oluşturuldu
            </h3>

            <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto mb-8">
              Sayın <strong>{formData.name || "Müvekkilimiz"}</strong>, seçtiğiniz avukatımız randevu saatinden önce dosyanızın ön incelemesini tamamlayarak sizinle iletişime geçecektir.
            </p>

            {/* Appointment Summary Box */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 text-left mb-8 space-y-4 border border-amber-700/40">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Randevu Takip Kodu</div>
                  <div className="text-xl font-extrabold text-amber-400 font-mono tracking-wider">{bookingCode}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Danışman Avukat</div>
                  <div className="text-base font-bold text-white">{currentAttorney.name}</div>
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 pt-2 text-xs sm:text-sm">
                <div>
                  <div className="text-slate-400 mb-1">Uzmanlık Alanı:</div>
                  <div className="font-semibold text-white">{currentPractice.name}</div>
                </div>
                <div>
                  <div className="text-slate-400 mb-1">Tarih & Saat:</div>
                  <div className="font-semibold text-amber-400">{selectedDate} - {selectedTime}</div>
                </div>
                <div>
                  <div className="text-slate-400 mb-1">Görüşme Türü:</div>
                  <div className="font-semibold text-white">{currentMeeting.label}</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: "", phone: "", email: "", notes: "" });
                }}
                className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-xl transition-all shadow-md"
              >
                Yeni Simülasyon Başlat
              </button>
              <a
                href="tel:+905398211121"
                className="px-6 py-3 bg-white border border-slate-300 hover:border-amber-700 text-slate-800 font-semibold text-sm rounded-xl transition-all shadow-sm"
              >
                Acil Çağrı: 0539 821 11 21
              </a>
            </div>
          </motion.div>
        ) : (
          /* Interactive 2-Column Booking Studio */
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Selection Wizard */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* STEP 1: Practice Area Selector */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="w-7 h-7 rounded-lg bg-amber-700 text-white font-bold text-xs flex items-center justify-center">1</span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Hukuki Konu / Çalışma Alanı Seçiniz</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {practiceCategories.map((p) => {
                    const IconComponent = p.icon;
                    const isSelected = selectedPractice === p.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setSelectedPractice(p.id)}
                        className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                          isSelected
                            ? "bg-amber-50/80 border-amber-700 ring-2 ring-amber-700/20 shadow-sm"
                            : "bg-[#FDFBF7] border-slate-200 hover:border-amber-300 hover:bg-white"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className={`p-2.5 rounded-xl ${isSelected ? "bg-amber-700 text-white" : "bg-white text-amber-700 border border-slate-200"}`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                          {isSelected && <CheckCircle2 className="w-5 h-5 text-amber-700" />}
                        </div>
                        <div>
                          <div className="font-bold text-sm text-slate-900 mb-1 leading-tight">{p.name}</div>
                          <div className="text-[11px] text-slate-500 line-clamp-1">{p.desc}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* STEP 2: Attorney / Consultant Selector */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-7 h-7 rounded-lg bg-amber-700 text-white font-bold text-xs flex items-center justify-center">2</span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Danışman Avukatınız</h3>
                </div>

                <div className="p-5 rounded-2xl border bg-amber-50/80 border-amber-700 ring-2 ring-amber-700/20 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden bg-slate-900 shrink-0 border border-slate-200 shadow-xs">
                      <img src="/law/attorney_robert.jpg" alt="Avukat Süleyman UĞUR" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-extrabold text-base text-slate-900 leading-tight">Avukat Süleyman UĞUR</div>
                      <div className="text-xs text-amber-800 font-bold mt-0.5">Kurucu Avukat • 25+ Yıl Tecrübe</div>
                      <div className="text-[11px] text-slate-600 mt-1">Ağır Ceza, Ticaret, Gayrimenkul, İş Hukuku</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-white border border-emerald-200 px-3.5 py-2 rounded-xl shadow-2xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Doğrudan Temsil & Randevu Açık</span>
                  </div>
                </div>
              </div>

              {/* STEP 3: Meeting Format & Date/Time Selector */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8">
                
                {/* Meeting Type */}
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="w-7 h-7 rounded-lg bg-amber-700 text-white font-bold text-xs flex items-center justify-center">3</span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">Görüşme Formatı & Tarih Seçimi</h3>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-3.5">
                    {meetingTypes.map((m) => {
                      const IconComp = m.icon;
                      const isSelected = selectedMeetingType === m.id;
                      return (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setSelectedMeetingType(m.id)}
                          className={`p-4 rounded-2xl border text-left transition-all ${
                            isSelected
                              ? "bg-slate-900 text-white border-slate-900 shadow-md"
                              : "bg-[#FDFBF7] text-slate-900 border-slate-200 hover:border-slate-400"
                          }`}
                        >
                          <div className="flex items-center gap-2.5 mb-2">
                            <IconComp className={`w-4 h-4 ${isSelected ? "text-amber-400" : "text-amber-700"}`} />
                            <span className="font-bold text-xs">{m.label}</span>
                          </div>
                          <div className={`text-[11px] ${isSelected ? "text-slate-300" : "text-slate-500"}`}>{m.desc}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Date & Time Grid */}
                <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                  {/* Dates */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <CalendarIcon className="w-3.5 h-3.5 text-amber-700" />
                      Randevu Günü
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {availableDates.map((d, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedDate(d.date)}
                          className={`p-2.5 rounded-xl border text-left transition-all ${
                            selectedDate === d.date
                              ? "bg-amber-700 text-white border-amber-700 shadow-sm"
                              : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100"
                          }`}
                        >
                          <div className="text-[10px] uppercase font-semibold opacity-80">{d.day}</div>
                          <div className="text-xs font-bold">{d.date}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-700" />
                      Randevu Saati
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`py-2.5 px-3 rounded-xl border text-center font-bold text-xs transition-all ${
                            selectedTime === time
                              ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                              : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* STEP 4: Client Contact & Confirmation Form */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="w-7 h-7 rounded-lg bg-amber-700 text-white font-bold text-xs flex items-center justify-center">4</span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">İletişim Bilgileri & Başvuru Tamamlama</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Adınız ve Soyadınız</label>
                      <input
                        type="text"
                        required
                        placeholder="Örn: Av. Selim Korkmaz"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-amber-700 focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Telefon Numarası</label>
                      <input
                        type="tel"
                        required
                        placeholder="+90 (5XX) XXX XX XX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-amber-700 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">E-posta Adresi</label>
                    <input
                      type="email"
                      required
                      placeholder="eposta@ornek.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-amber-700 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">Dava / Uyuşmazlık Konusu Hakkında Kısa Not</label>
                    <textarea
                      rows={3}
                      placeholder="Danışmak istediğiniz durumun ana hatları..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-amber-700 focus:bg-white transition-colors resize-y"
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-2.5 pt-2">
                    <input
                      type="checkbox"
                      id="privacyConsent"
                      required
                      defaultChecked
                      className="mt-1 accent-amber-700 w-4 h-4 rounded cursor-pointer"
                    />
                    <label htmlFor="privacyConsent" className="text-xs text-slate-600 cursor-pointer leading-relaxed">
                      Avukatlık Kanunu ve KVKK Aydınlatma Metni uyarınca bilgilerimin gizlilik protokolü kapsamında işlenmesini onaylıyorum.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-slate-900 hover:bg-amber-800 text-white font-bold tracking-wider uppercase text-sm rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 mt-4"
                  >
                    Randevuyu Onayla & Danışmanlığı Başlat
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>

            </div>

            {/* Right Column: Live Dynamic Simulation Summary Card */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              
              <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-amber-700/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-amber-400 font-eyebrow text-[11px] tracking-[0.24em] mb-4">
                    <Sparkles className="w-4 h-4" />
                    <span>Canlı Simülasyon Kartı</span>
                  </div>

                  <h4 className="text-xl font-bold mb-6 tracking-tight">
                    Seçilen Danışmanlık Özeti
                  </h4>

                  {/* Selected Attorney Showcase */}
                  <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 mb-6">
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-slate-800 shrink-0 border border-amber-400/40">
                      <img src={currentAttorney.image} alt={currentAttorney.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">{currentAttorney.name}</div>
                      <div className="text-xs text-amber-400 font-semibold">{currentAttorney.role}</div>
                      <div className="text-[10px] text-slate-400">{currentAttorney.specialty}</div>
                    </div>
                  </div>

                  {/* Breakdown Details */}
                  <div className="space-y-3.5 text-xs border-y border-slate-800 py-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Çalışma Alanı:</span>
                      <span className="font-bold text-white text-right">{currentPractice.name}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Görüşme Şekli:</span>
                      <span className="font-bold text-amber-400 text-right">{currentMeeting.label}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Randevu Zamanı:</span>
                      <span className="font-bold text-white text-right">{selectedDate} / {selectedTime}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Temsil Departmanı:</span>
                      <span className="font-semibold text-slate-300 text-right">Nurol Tower Yönetici Ofisi</span>
                    </div>
                  </div>

                  {/* Trust Guarantee Box */}
                  <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-600/30 flex items-start gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div className="text-[11px] text-slate-300 leading-relaxed">
                      <strong className="text-white block font-semibold">Tavizsiz Mahremiyet İlkesi</strong>
                      Görüşme kayıtlarınız ve ilettiğiniz dosya bilgileri TBB Meslek Kuralları uyarınca 3. şahıslara karşı korunur.
                    </div>
                  </div>

                </div>
              </div>

              {/* Quick Helpline Box */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">Acil Hukuki Destek Hattı</div>
                <div className="text-xs text-slate-500 mb-3">Mesai saatleri dışında acil ceza ve yakalama durumları için:</div>
                <a
                  href="tel:+905398211121"
                  className="inline-flex items-center gap-2 text-base font-extrabold text-amber-700 hover:text-amber-800 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  0539 821 11 21
                </a>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
