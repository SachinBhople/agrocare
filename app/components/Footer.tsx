"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  {
    label: "Services",
    href: `https://wa.me/918079932208?text=${encodeURIComponent(
      "Hello Agrocare, I want to know more about your services.",
    )}`,
  },
  { label: "Contact", href: "#contact" },
] as const;

const services = [
  "Agro Product Selling",
  "Crop Insurance",
  "Home Grocery Delivery",
] as const;

const socials = [
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
] as const;

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-agro-900/60 to-black" />
      <div className="absolute -left-24 bottom-0 size-[520px] rounded-full bg-agro-400/12 blur-3xl" />
      <div className="absolute -right-24 -bottom-24 size-[520px] rounded-full bg-sun-500/10 blur-3xl" />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-lg font-semibold text-white">
              Agrocare Solution India Pvt Ltd
            </div>
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/65">
              Empowering agriculture with quality products, reliable insurance,
              and fresh grocery delivery—built on trust and modern service.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/75 transition hover:bg-white/10 hover:text-white"
                    aria-label={s.label}
                  >
                    <Icon className="size-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Quick Links</div>
            <div className="mt-4 grid gap-2">
              {quickLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    l.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-sm text-white/65 transition hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Services</div>
            <div className="mt-4 grid gap-2">
              {services.map((s) => (
                <div key={s} className="text-sm text-white/65">
                  {s}
                </div>
              ))}
            </div>

            <div className="mt-7 grid gap-3 text-sm text-white/65">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 text-white/55" />
                <span>India (service locations vary)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4 text-white/55" />
                <span>+91 80799 32208</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4 text-white/55" />
                <span>support@agrocaresolution.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="mt-6 flex flex-col gap-2 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} Agrocare Solution India Pvt Ltd. All
            rights reserved.
          </div>
          <div className="text-white/45">
            Built with modern UI, motion, and responsive design.
          </div>
        </div>
      </div>
    </footer>
  );
}

