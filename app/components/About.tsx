"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Handshake, ShieldCheck, Truck } from "lucide-react";

const features = [
  {
    icon: Handshake,
    title: "Trust & Support",
    desc: "A farmer-first approach with reliable guidance and long-term partnerships.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Safety",
    desc: "High-quality products and services built for real-world agriculture needs.",
  },
  {
    icon: Truck,
    title: "Speed & Convenience",
    desc: "Fast delivery and seamless service experiences across categories.",
  },
] as const;

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid gap-10 lg:grid-cols-2 lg:items-center"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur">
              About
              <span className="text-white/40">•</span>
              Agrocare Solution India Pvt Ltd
            </div>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              About Agrocare Solution India Pvt Ltd
            </h2>

            <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Agrocare Solution India Pvt Ltd is dedicated to supporting farmers
              and households by providing high-quality agricultural products,
              crop insurance solutions, and fresh home groceries. Our mission is
              to empower agriculture with technology, reliability, and trust.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {features.map((f, idx) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55, delay: idx * 0.06 }}
                    className="glass group rounded-2xl p-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-agro-400/70 to-sun-500/50 text-agro-900">
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">
                          {f.title}
                        </div>
                        <div className="mt-1 text-xs leading-5 text-white/65">
                          {f.desc}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 transition group-hover:opacity-100" />
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-br from-agro-400/15 via-transparent to-sun-500/10 blur-2xl" />
            <div className="glass overflow-hidden rounded-[28px] shadow-[0_28px_90px_rgba(0,0,0,0.45)]">
              <div className="relative aspect-[16/12]">
                <Image
                  src="/images/about-farmers.svg"
                  alt="Farmers and agriculture"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 sm:p-6">
                <div className="text-sm font-semibold text-white">
                  Technology + reliability for modern agriculture
                </div>
                <div className="mt-2 text-sm leading-6 text-white/70">
                  From inputs to protection to groceries—everything designed to
                  keep your farm and home resilient.
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

