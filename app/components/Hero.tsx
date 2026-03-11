"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Sprout, Wheat } from "lucide-react";

const floatTransition = {
  duration: 4.8,
  repeat: Infinity,
  repeatType: "mirror" as const,
  ease: [0.42, 0, 0.58, 1] as const,
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero-farm.svg"
          alt="Agriculture landscape"
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-agro-900/40 via-agro-900/70 to-agro-900" />
        <div className="absolute -left-24 top-24 size-[520px] rounded-full bg-agro-400/15 blur-3xl" />
        <div className="absolute -right-24 top-12 size-[520px] rounded-full bg-sun-500/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="relative py-16 sm:py-24 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
              <span className="inline-block size-2 rounded-full bg-agro-300 shadow-[0_0_0_4px_rgba(47,184,90,0.15)]" />
              Smart farming. Trusted delivery. Real protection.
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Empowering Farmers with{" "}
              <span className="bg-gradient-to-r from-agro-300 via-sun-400 to-agro-300 bg-clip-text text-transparent">
                Smart Agro Solutions
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              Agrocare Solution India Pvt Ltd supports farmers and households
              with high-quality agricultural products, reliable crop insurance
              solutions, and fresh home grocery delivery—powered by technology,
              reliability, and trust.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-agro-400 to-sun-500 px-6 text-sm font-semibold text-agro-900 shadow-[0_18px_50px_rgba(247,201,72,0.18)] transition hover:brightness-110"
              >
                Explore Services
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/18 bg-white/5 px-6 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur transition hover:bg-white/10"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>

          {/* Floating icons */}
          <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[520px] lg:block">
            <motion.div
              className="absolute right-16 top-24 grid size-14 place-items-center rounded-2xl border border-white/15 bg-white/5 text-agro-200 shadow-[0_22px_80px_rgba(0,0,0,0.35)] backdrop-blur"
              animate={{ y: [-10, 10] }}
              transition={{ ...floatTransition, delay: 0.2 }}
            >
              <Leaf className="size-7" />
            </motion.div>
            <motion.div
              className="absolute right-44 top-56 grid size-16 place-items-center rounded-2xl border border-white/15 bg-white/5 text-sun-400 shadow-[0_22px_80px_rgba(0,0,0,0.35)] backdrop-blur"
              animate={{ y: [12, -12] }}
              transition={{ ...floatTransition, delay: 0.45 }}
            >
              <Wheat className="size-8" />
            </motion.div>
            <motion.div
              className="absolute right-24 top-[440px] grid size-16 place-items-center rounded-2xl border border-white/15 bg-white/5 text-agro-300 shadow-[0_22px_80px_rgba(0,0,0,0.35)] backdrop-blur"
              animate={{ y: [-14, 14] }}
              transition={{ ...floatTransition, delay: 0.65 }}
            >
              <Sprout className="size-8" />
            </motion.div>

            <div className="absolute right-4 top-28 size-[520px] rounded-full bg-agro-400/10 blur-3xl" />
            <div className="absolute right-10 top-72 size-[420px] rounded-full bg-sun-500/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

