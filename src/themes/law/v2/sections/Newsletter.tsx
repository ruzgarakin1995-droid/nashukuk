"use client";
import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-700/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hukuki Gelişmelerden Haberdar Olun</h2>
            <p className="text-slate-300 mb-8">Aylık e-bültenimize kayıt olarak önemli yasal düzenlemelerden ve makalelerimizden anında haberdar olabilirsiniz.</p>
            
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="E-posta adresiniz" 
                className="flex-grow bg-white/10 border border-slate-700 text-white rounded-xl px-6 py-4 focus:outline-none focus:border-amber-500 placeholder:text-slate-400"
              />
              <button className="bg-amber-700 text-white px-8 py-4 rounded-xl hover:bg-amber-600 transition-colors font-medium flex items-center justify-center gap-2 whitespace-nowrap">
                Abone Ol <Send className="w-4 h-4" />
              </button>
            </form>
            <p className="text-slate-500 text-sm mt-4">Kişisel verileriniz KVKK kapsamında korunmaktadır.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
