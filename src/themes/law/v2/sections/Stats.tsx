"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
}

function Counter({ target, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (inView) {
      const duration = 2200; // 2.2 seconds smooth luxury duration
      const startTime = performance.now();

      const updateCount = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Luxury easeOutExpo easing
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = Math.floor(easeOut * target);

        setCount(current);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(target);
        }
      };

      requestAnimationFrame(updateCount);
    }
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums tracking-tight">
      {prefix}{count.toLocaleString("tr-TR")}{suffix}
    </span>
  );
}

export function Stats() {
  const stats = [
    { target: 25, suffix: "+", label: "Yıllık Tecrübe" },
    { target: 5000, suffix: "+", label: "Çözülen Dosya" },
    { target: 98, suffix: "%", label: "Müvekkil Memnuniyeti" },
    { target: 100, suffix: "%", label: "Birebir Temsil & Gizlilik" }
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-slate-900 border-y border-amber-700/30">
      {/* Background Gradient & Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-y-2 divide-slate-800/40 md:divide-y-0 md:divide-x-2 md:divide-slate-800/60">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="pt-6 md:pt-0 px-4 group"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-amber-500 group-hover:text-amber-400 transition-colors mb-3">
                <Counter target={stat.target} suffix={stat.suffix} />
              </div>
              <div className="text-slate-300 font-medium text-sm sm:text-base tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
