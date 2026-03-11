"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue } from "framer-motion";
import { BadgeCheck, Clock, Leaf, Users } from "lucide-react";

function AnimatedCounter({
  value,
  suffix = "+",
  duration = 1.2,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, {
      duration,
      ease: "easeOut",
    });
    const unsub = mv.on("change", (latest) => setDisplay(Math.round(latest)));
    return () => {
      controls.stop();
      unsub();
    };
  }, [duration, inView, mv, value]);

  return (
    <div ref={ref} className="text-4xl font-semibold tracking-tight text-white">
      {display}
      <span className="text-white/70">{suffix}</span>
    </div>
  );
}

export default function WhyChooseUs() {
  const stats = useMemo(
    () => [
      { icon: Users, label: "Trusted by Farmers", value: 1200, suffix: "+" },
      { icon: BadgeCheck, label: "Quality Products", value: 500, suffix: "+" },
      { icon: Clock, label: "Fast Delivery", value: 24, suffix: "h" },
      { icon: Leaf, label: "Affordable Services", value: 99, suffix: "%" },
    ],
    [],
  );

  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass relative overflow-hidden rounded-[28px] p-6 sm:p-10 shadow-[0_30px_110px_rgba(0,0,0,0.5)]"
        >
          <div className="absolute -left-24 -top-24 size-[460px] rounded-full bg-agro-400/15 blur-3xl" />
          <div className="absolute -right-24 -bottom-24 size-[460px] rounded-full bg-sun-500/12 blur-3xl" />

          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur">
                Why choose us
                <span className="text-white/40">•</span>
                Reliable. Modern. Farmer-first.
              </div>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Designed for outcomes, not promises
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                We combine quality inputs, protection services, and fast
                logistics—so you can focus on growing with confidence.
              </p>
            </div>
          </div>

          <div className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: idx * 0.06 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-white/85">
                      {s.label}
                    </div>
                    <div className="grid size-10 place-items-center rounded-xl bg-white/5 text-white/80">
                      <Icon className="size-5" />
                    </div>
                  </div>
                  <div className="mt-5">
                    <AnimatedCounter
                      value={s.value}
                      suffix={s.suffix}
                      duration={1.1}
                    />
                  </div>
                  <div className="mt-3 text-xs text-white/60">
                    Growth-driven service experience
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

