"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Shield, ShoppingBasket } from "lucide-react";

const WHATSAPP_E164 = "918079932208";
const WHATSAPP_QUOTE_URL = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(
  "Hello Agrocare, I’d like a quote for your services.",
)}`;

const services = [
  {
    icon: BadgeCheck,
    title: "Agro Product Selling",
    desc: "We provide high-quality agricultural products including seeds, fertilizers, pesticides, and modern farming tools to help farmers increase productivity and crop quality.",
    accent: "from-agro-400/70 to-agro-300/30",
  },
  {
    icon: Shield,
    title: "Crop Insurance",
    desc: "Protect your crops with our reliable crop insurance services. We help farmers secure their harvest against natural disasters, climate changes, and unforeseen losses.",
    accent: "from-sun-500/60 to-sun-400/20",
  },
  {
    icon: ShoppingBasket,
    title: "Home Grocery Delivery",
    desc: "We deliver fresh farm produce and essential groceries directly to your home, ensuring healthy and organic food for your family.",
    accent: "from-earth-500/55 to-agro-300/20",
  },
] as const;

export default function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur">
              Services
              <span className="text-white/40">•</span>
              Premium agriculture support
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Everything you need—from farm to home
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Inputs, protection, and delivery—packaged as premium services with
              quality assurance and a modern experience.
            </p>
          </div>

          <a
            href={WHATSAPP_QUOTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 backdrop-blur transition hover:bg-white/10"
          >
            Get a quote
          </a>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: idx * 0.06 }}
                whileHover={{ y: -6 }}
                className="group relative"
              >
                <div
                  className={[
                    "absolute -inset-[1px] rounded-[22px] opacity-0 blur-sm transition",
                    "bg-gradient-to-br",
                    s.accent,
                    "group-hover:opacity-100",
                  ].join(" ")}
                />
                <div className="glass relative rounded-[22px] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
                  <div className="flex items-center gap-3">
                    <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 text-white shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
                      <Icon className="size-6" />
                    </div>
                    <div className="text-base font-semibold text-white">
                      {s.title}
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-white/70">
                    {s.desc}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-xs font-medium text-white/55">
                      Premium support
                    </div>
                    <div className="h-px flex-1 mx-4 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                    <motion.a
                      whileHover={{ scale: 1.04 }}
                      href={`https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(
                        `Hello Agrocare, I’m interested in: ${s.title}. Please share details.`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 transition group-hover:bg-white/10"
                    >
                      Learn more
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

