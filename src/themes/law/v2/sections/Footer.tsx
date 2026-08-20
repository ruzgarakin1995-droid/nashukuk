"use client";
import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 border-t-4 border-amber-700 text-white font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-1">
            <Link href="/" className="flex flex-col items-start justify-center group shrink-0 mb-6">
              <div className="font-logo-brand text-2xl font-bold text-white tracking-[0.20em] leading-none uppercase group-hover:text-amber-400 transition-colors">
                NAS
              </div>
              <div className="font-logo-sub text-[8.5px] text-amber-400 font-semibold tracking-[0.32em] uppercase mt-1.5 whitespace-nowrap">
                HUKUK & DANIŞMANLIK
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Avukat Süleyman UĞUR liderliğinde NAS Hukuk & Danışmanlık; bireysel ve kurumsal müvekkillerine şeffaf, sonuç odaklı ve etik hukuki danışmanlık sağlamaktadır.
            </p>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Nurol Tower, İzzet Paşa, Yeni Yol Cd. No : 3 K : 32 D : 251, 34149 Şişli/İstanbul</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+905398211121" className="hover:text-amber-400 transition-colors font-semibold">0539 821 11 21</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:info@nashukuk.com" className="hover:text-amber-400 transition-colors">info@nashukuk.com</a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-tight text-base">Çalışma Alanları</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link href="/ceza-hukuku" className="hover:text-amber-400 transition-colors">Ceza & Ağır Ceza Hukuku</Link></li>
              <li><Link href="/is-hukuku" className="hover:text-amber-400 transition-colors">İş & Sosyal Güvenlik Hukuku</Link></li>
              <li><Link href="/ticaret-hukuku" className="hover:text-amber-400 transition-colors">Ticaret & Şirketler Hukuku</Link></li>
              <li><Link href="/aile-hukuku" className="hover:text-amber-400 transition-colors">Aile & Mal Rejimi Hukuku</Link></li>
              <li><Link href="/gayrimenkul-hukuku" className="hover:text-amber-400 transition-colors">Gayrimenkul & İmar Hukuku</Link></li>
              <li><Link href="/sozlesmeler-hukuku" className="hover:text-amber-400 transition-colors">Sözleşmeler Hukuku</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-tight text-base">Kurumsal & Bağlantılar</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="/#about" className="hover:text-amber-400 transition-colors">Hakkımızda</a></li>
              <li><a href="/#team" className="hover:text-amber-400 transition-colors">Avukatımız</a></li>
              <li><a href="/#cases" className="hover:text-amber-400 transition-colors">Örnek Başarılarımız</a></li>
              <li><a href="/#articles" className="hover:text-amber-400 transition-colors">Hukuki Makaleler</a></li>
              <li><a href="/#faq" className="hover:text-amber-400 transition-colors">Sıkça Sorulan Sorular</a></li>
              <li><a href="/#contact" className="hover:text-amber-400 transition-colors">İletişim</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-tight text-base">Çalışma Saatleri</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>Pazartesi - Cuma</span>
                <span className="text-white font-medium">09:00 - 18:30</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-2">
                <span>Cumartesi</span>
                <span className="text-white font-medium">10:00 - 14:00 (Randevulu)</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Pazar</span>
                <span className="text-amber-400 font-semibold">Acil Destek & WhatsApp</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} NAS Hukuk & Danışmanlık - Avukat Süleyman UĞUR. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-4 text-xs sm:text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-white transition-colors">Kullanım Şartları</a>
            <a href="#" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
