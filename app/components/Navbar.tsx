"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { cn } from "@/app/lib/utils";

const WHATSAPP_E164 = "918079932208";
const WHATSAPP_SERVICES_URL = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(
  "Hello Agrocare, I want to know more about your services.",
)}`;

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: WHATSAPP_SERVICES_URL },
  { label: "Contact", href: "#contact" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const desktopLinks = useMemo(
    () =>
      navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="text-sm font-medium text-white/80 transition hover:text-white"
        >
          {item.label}
        </a>
      )),
    [],
  );

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "mx-auto w-full max-w-6xl px-4 sm:px-6",
          "pt-3 sm:pt-4",
        )}
      >
        <div
          className={cn(
            "glass relative flex items-center justify-between rounded-2xl px-4 py-3",
            "shadow-[0_18px_60px_rgba(0,0,0,0.35)]",
            scrolled && "border-white/20 bg-white/[0.10]",
          )}
        >
          <a
            href="#home"
            className="group inline-flex items-center gap-2 rounded-xl px-2 py-1 transition hover:bg-white/5"
            onClick={() => setOpen(false)}
          >
            <span className="grid size-8 place-items-center rounded-xl bg-gradient-to-br from-agro-400/90 to-sun-500/70 text-agro-900 shadow-[0_10px_30px_rgba(47,184,90,0.25)]">
              A
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight text-white">
                Agrocare Solution
              </div>
              <div className="text-[11px] text-white/60">
                India Pvt Ltd
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {desktopLinks}
            <a
              href="#services"
              className="rounded-full bg-gradient-to-r from-agro-400 to-sun-500 px-4 py-2 text-sm font-semibold text-agro-900 shadow-[0_12px_30px_rgba(247,201,72,0.18)] transition hover:brightness-110"
            >
              Explore
            </a>
          </nav>

          <button
            type="button"
            aria-label="Open menu"
            className="md:hidden inline-flex size-11 items-center justify-center rounded-xl text-white/80 transition hover:bg-white/5 hover:text-white"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-50"
          >
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: -12, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -12, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="absolute left-3 right-3 top-3 glass rounded-2xl p-4 shadow-[0_22px_80px_rgba(0,0,0,0.55)]"
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-white">
                  Menu
                </div>
                <button
                  type="button"
                  className="inline-flex size-10 items-center justify-center rounded-xl text-white/80 transition hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="size-5" />
                </button>
              </div>

              <div className="mt-4 grid gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="rounded-xl px-3 py-3 text-sm font-medium text-white/85 transition hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="mt-4 grid gap-2">
                <a
                  href="#services"
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-gradient-to-r from-agro-400 to-sun-500 px-4 py-3 text-center text-sm font-semibold text-agro-900 transition hover:brightness-110"
                >
                  Explore Services
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

