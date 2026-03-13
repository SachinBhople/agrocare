"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Mail, Phone, Send, User, MapPin } from "lucide-react";

import { cn } from "@/app/lib/utils";

const WHATSAPP_E164 = "918079932208";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email."),
  phone: z
    .string()
    .min(7, "Please enter a valid phone number.")
    .max(20, "Please enter a valid phone number."),
  message: z.string().min(10, "Please write a short message (10+ chars)."),
});

type FormValues = z.infer<typeof schema>;

function Field({
  label,
  icon,
  error,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-white/85">{label}</label>
        {error ? <span className="text-xs text-sun-400">{error}</span> : null}
      </div>
      <div className="group relative">
        <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-white/45 transition group-focus-within:text-white/75">
          {icon}
        </div>
        {children}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-agro-300/30 transition group-focus-within:ring-4" />
      </div>
    </div>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);

  const defaultValues = useMemo<FormValues>(
    () => ({ name: "", email: "", phone: "", message: "" }),
    []
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onSubmit = async (values: FormValues) => {
    setSent(false);

    const text = [
      "Hello Agrocare,",
      "",
      "New contact form enquiry:",
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      "",
      `Message: ${values.message}`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");

    await new Promise((r) => setTimeout(r, 350));

    reset(defaultValues);
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 lg:grid-cols-2 lg:items-start"
        >
          {/* Left Section */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70 backdrop-blur">
              Contact
              <span className="text-white/40">•</span>
              Let’s talk
            </div>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Get in touch with Agrocare
            </h2>

            <p className="mt-3 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
              Share your requirement—products, insurance, or grocery delivery.
              We’ll respond with the fastest, most reliable option for your
              location.
            </p>

            <div className="mt-7 grid gap-3">

              {/* Email */}
              <div className="glass rounded-2xl p-4">
                <div className="text-xs font-semibold text-white/70 flex items-center gap-2">
                  <Mail className="size-4" /> Email
                </div>
                <div className="mt-1 text-sm font-medium text-white">
                  support@agrocaresolution.in
                </div>
              </div>

              {/* Phone */}
              <div className="glass rounded-2xl p-4">
                <div className="text-xs font-semibold text-white/70 flex items-center gap-2">
                  <Phone className="size-4" /> Phone
                </div>
                <div className="mt-1 text-sm font-medium text-white">
                  +91 80799 32208
                </div>
              </div>

              {/* Address */}
              <div className="glass rounded-2xl p-4">
                <div className="text-xs font-semibold text-white/70 flex items-center gap-2">
                  <MapPin className="size-4" /> Address
                </div>
                <div className="mt-1 text-sm font-medium text-white leading-relaxed">
                  Plot no 469/5179 <br />
                  Gangotri Nagar Lane 3(o) <br />
                  Sisupalgarh Bhubaneswar <br />
                  Odisha 751002
                </div>
              </div>

            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="glass rounded-[28px] p-6 sm:p-8">
            <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>

              <div className="grid gap-4 sm:grid-cols-2">

                <Field
                  label="Name"
                  icon={<User className="size-4" />}
                  error={errors.name?.message}
                >
                  <input
                    {...register("name")}
                    placeholder="Your name"
                    className={cn(
                      "h-12 w-full rounded-2xl border bg-white/[0.06] pl-10 pr-3 text-sm text-white placeholder:text-white/35 outline-none",
                      "border-white/10"
                    )}
                  />
                </Field>

                <Field
                  label="Email"
                  icon={<Mail className="size-4" />}
                  error={errors.email?.message}
                >
                  <input
                    {...register("email")}
                    placeholder="you@example.com"
                    className={cn(
                      "h-12 w-full rounded-2xl border bg-white/[0.06] pl-10 pr-3 text-sm text-white placeholder:text-white/35 outline-none",
                      "border-white/10"
                    )}
                  />
                </Field>

              </div>

              <Field
                label="Phone"
                icon={<Phone className="size-4" />}
                error={errors.phone?.message}
              >
                <input
                  {...register("phone")}
                  placeholder="+91..."
                  className={cn(
                    "h-12 w-full rounded-2xl border bg-white/[0.06] pl-10 pr-3 text-sm text-white placeholder:text-white/35 outline-none",
                    "border-white/10"
                  )}
                />
              </Field>

              <Field
                label="Message"
                icon={<Send className="size-4" />}
                error={errors.message?.message}
              >
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Tell us what you need..."
                  className={cn(
                    "w-full rounded-2xl border bg-white/[0.06] pl-10 pr-3 py-3 text-sm text-white placeholder:text-white/35 outline-none",
                    "border-white/10"
                  )}
                />
              </Field>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                type="submit"
                className="h-12 rounded-full bg-gradient-to-r from-agro-400 to-sun-500 text-agro-900 font-semibold"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </motion.button>

              {sent && (
                <div className="rounded-xl bg-white/10 p-3 text-sm text-white">
                  Message sent. We’ll contact you soon.
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}