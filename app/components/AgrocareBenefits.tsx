"use client";

import { motion } from "framer-motion";
import { BadgePercent, Gift, ShieldCheck } from "lucide-react";

const WHATSAPP_E164 = "918079932208";

const plans = [
  { amount: 300, claim: 10000, accent: "from-agro-400/35 via-white/[0.06] to-transparent" },
  { amount: 500, claim: 2500, accent: "from-sun-500/30 via-white/[0.06] to-transparent" },
  { amount: 1000, claim: 5000, accent: "from-earth-500/28 via-white/[0.06] to-transparent" },
] as const;

function rupees(n: number) {
  return n.toLocaleString("en-IN");
}

function waLink(text: string) {
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(text)}`;
}

export default function AgrocareBenefits() {
  return (
    <section id="benefits" className="relative py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur">
            Benefits
            <span className="text-white/40">•</span>
            Smart savings & rewards
          </div>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Agrocare Customer Benefits
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
            Smart savings, protection, and rewards for our customers.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Product offer */}
          <motion.a
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            href={waLink(
              "Hello Agrocare, I want to claim the Customer Product Offer (up to 30% OFF). Please share details.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block"
          >
            <div className="absolute -inset-[1px] rounded-[22px] bg-gradient-to-br from-agro-400/35 via-sun-500/10 to-transparent opacity-0 blur-sm transition group-hover:opacity-100" />
            <div className="glass relative rounded-[22px] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] cursor-pointer">
              <div className="flex items-start justify-between gap-4">
                <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 text-white shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
                  <BadgePercent className="size-6" />
                </div>
                <div className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-semibold text-white/85 backdrop-blur">
                  30% OFF
                </div>
              </div>

              <div className="mt-5 text-lg font-semibold text-white">
                Agrocare Customer Product Offer
              </div>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Customers can purchase Agrocare products with up to{" "}
                <span className="font-semibold text-white">30% discount</span>.
              </p>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent" />
              <div className="mt-4 text-xs text-white/55">
                Limited-time seasonal offers may apply.
              </div>
            </div>
          </motion.a>

          {/* Insurance plan cards (3) */}
          {plans.map((p, idx) => (
            <motion.a
              key={p.amount}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              whileHover={{ y: -6, scale: 1.01 }}
              href={waLink(
                `Hello Agrocare, I’m interested in the Insurance Plan: Amount ₹${rupees(
                  p.amount,
                )} with Claim Benefit ₹${rupees(p.claim)}. Please share details.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
            >
              <div
                className={[
                  "absolute -inset-[1px] rounded-[22px] opacity-0 blur-sm transition group-hover:opacity-100",
                  "bg-gradient-to-br",
                  p.accent,
                ].join(" ")}
              />
              <div className="glass relative rounded-[22px] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] cursor-pointer">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 text-white shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
                    <ShieldCheck className="size-6" />
                  </div>
                  <div className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-semibold text-white/85 backdrop-blur">
                    Insurance Plan
                  </div>
                </div>

                <div className="mt-5">
                  <div className="text-xs font-medium text-white/60">
                    Amount
                  </div>
                  <div className="mt-1 text-3xl font-semibold tracking-tight text-white">
                    ₹{rupees(p.amount)}
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur">
                  <div className="text-xs font-medium text-white/60">
                    Claim Benefit
                  </div>
                  <div className="mt-1 text-lg font-semibold text-white">
                    ₹{rupees(p.claim)}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between text-xs text-white/55">
                  <span>Premium protection</span>
                  <span className="text-white/45">Fast assistance</span>
                </div>
              </div>
            </motion.a>
          ))}

          {/* Referral highlight */}
          <motion.a
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            href={waLink(
              "Hello Agrocare, I want to join the Home Grocery Reward Program (₹2001 + refer 3 people) for 6 months free ration. Please share the process.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative lg:col-span-3 block"
          >
            <div className="absolute -inset-[1px] rounded-[22px] bg-gradient-to-r from-sun-500/25 via-agro-400/18 to-transparent opacity-0 blur-sm transition group-hover:opacity-100" />
            <div className="glass relative rounded-[22px] p-6 sm:p-7 shadow-[0_24px_80px_rgba(0,0,0,0.35)] cursor-pointer">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 text-white shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
                    <Gift className="size-6" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">
                      Home Grocery Reward Program
                    </div>
                    <p className="mt-2 max-w-3xl text-sm leading-6 text-white/70">
                      After paying{" "}
                      <span className="font-semibold text-white">₹2001</span> and
                      referring{" "}
                      <span className="font-semibold text-white">3 people</span>{" "}
                      to our company, you will receive{" "}
                      <span className="font-semibold text-white">
                        FREE ration for 6 months
                      </span>
                      .
                    </p>
                    <div className="mt-2 text-xs text-white/55">
                      <span className="italic">*T&amp;C Apply</span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0">
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-agro-400 to-sun-500 px-4 py-2 text-sm font-semibold text-agro-900 shadow-[0_18px_55px_rgba(247,201,72,0.20)]">
                    6 Months Free Grocery
                  </div>
                </div>
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

