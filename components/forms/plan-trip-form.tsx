"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import type React from "react";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { inquirySchema, type InquiryInput } from "@/lib/validation";

const destinationOptions = ["Sigiriya", "Kandy", "Ella", "Nuwara Eliya", "Yala", "Galle", "Mirissa", "Trincomalee"];
const experienceOptions = ["Wildlife Safaris", "Scenic Train Journeys", "Tea Country", "Whale Watching", "Local Cuisine", "Ayurveda and Wellness"];

export function PlanTripForm() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const form = useForm<InquiryInput>({
    resolver: zodResolver(inquirySchema),
    mode: "onBlur",
    defaultValues: {
      travelStyle: "",
      destinations: [],
      experiences: [],
      accommodationType: "",
      approximateDates: "",
      flexibleDates: true,
      duration: "",
      adults: 2,
      children: 0,
      budgetRange: "",
      fullName: "",
      email: "",
      phone: "",
      country: "",
      preferredContactMethod: "Email",
      message: "",
      privacyConsent: false,
      website: ""
    }
  });

  useEffect(() => {
    const saved = localStorage.getItem("cth-plan-trip");
    if (saved) form.reset(JSON.parse(saved));
    const subscription = form.watch((value) => localStorage.setItem("cth-plan-trip", JSON.stringify(value)));
    return () => subscription.unsubscribe();
  }, [form]);

  const progress = useMemo(() => `${Math.round((step / 3) * 100)}%`, [step]);

  async function next() {
    const fields = step === 1
      ? ["travelStyle", "destinations", "experiences", "accommodationType"]
      : ["approximateDates", "duration", "adults", "children", "budgetRange"];
    const valid = await form.trigger(fields as Array<keyof InquiryInput>);
    if (valid) setStep((value) => Math.min(3, value + 1));
  }

  async function onSubmit(values: InquiryInput) {
    setStatus("loading");
    const response = await fetch("/api/inquiry", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" }
    });
    if (response.ok) {
      localStorage.removeItem("cth-plan-trip");
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[2rem] bg-white p-8 text-center shadow-premium">
        <CheckCircle2 className="mx-auto h-14 w-14 text-terracotta" />
        <h2 className="mt-4 font-display text-4xl text-forest">Your inquiry has arrived.</h2>
        <p className="mt-3 text-charcoal/70">A local planner will reply with practical next steps and route ideas.</p>
      </div>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="rounded-[2rem] bg-white p-6 shadow-premium md:p-8">
      <div className="h-2 overflow-hidden rounded-full bg-sand" aria-hidden>
        <div className="h-full rounded-full bg-terracotta transition-all" style={{ width: progress }} />
      </div>
      <p className="mt-3 text-sm font-bold text-charcoal/65">Step {step} of 3</p>

      <AnimatePresence mode="wait">
      {step === 1 ? (
        <motion.div key="step-1" className="mt-8 grid gap-6" initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -28 }} transition={{ duration: 0.32 }}>
          <SelectField label="Travel style" error={form.formState.errors.travelStyle?.message} {...form.register("travelStyle")} options={["", "Classic discovery", "Luxury and boutique", "Adventure", "Honeymoon", "Family", "Slow travel"]} />
          <CheckboxGroup label="Preferred destinations" options={destinationOptions} values={form.watch("destinations")} onChange={(values) => form.setValue("destinations", values, { shouldValidate: true })} error={form.formState.errors.destinations?.message} />
          <CheckboxGroup label="Experiences" options={experienceOptions} values={form.watch("experiences")} onChange={(values) => form.setValue("experiences", values, { shouldValidate: true })} error={form.formState.errors.experiences?.message} />
          <SelectField label="Accommodation type" error={form.formState.errors.accommodationType?.message} {...form.register("accommodationType")} options={["", "Boutique comfort", "Luxury", "Family-friendly", "Eco and character stays", "Best value"]} />
        </motion.div>
      ) : null}

      {step === 2 ? (
        <motion.div key="step-2" className="mt-8 grid gap-5 md:grid-cols-2" initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -28 }} transition={{ duration: 0.32 }}>
          <InputField label="Approximate dates" placeholder="March 2027 or flexible winter trip" error={form.formState.errors.approximateDates?.message} {...form.register("approximateDates")} />
          <SelectField label="Duration" error={form.formState.errors.duration?.message} {...form.register("duration")} options={["", "5-7 days", "8-10 days", "11-14 days", "15+ days"]} />
          <InputField label="Adults" type="number" min={1} error={form.formState.errors.adults?.message} {...form.register("adults", { valueAsNumber: true })} />
          <InputField label="Children" type="number" min={0} error={form.formState.errors.children?.message} {...form.register("children", { valueAsNumber: true })} />
          <SelectField label="Budget range" error={form.formState.errors.budgetRange?.message} {...form.register("budgetRange")} options={["", "Under USD 1,500 pp", "USD 1,500-2,500 pp", "USD 2,500-4,000 pp", "USD 4,000+ pp"]} />
          <label className="flex items-center gap-3 rounded-2xl border border-sand bg-ivory px-4 py-3 text-sm font-bold text-forest">
            <input type="checkbox" {...form.register("flexibleDates")} /> Flexible dates
          </label>
        </motion.div>
      ) : null}

      {step === 3 ? (
        <motion.div key="step-3" className="mt-8 grid gap-5 md:grid-cols-2" initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -28 }} transition={{ duration: 0.32 }}>
          <InputField label="Full name" error={form.formState.errors.fullName?.message} {...form.register("fullName")} />
          <InputField label="Email" type="email" error={form.formState.errors.email?.message} {...form.register("email")} />
          <InputField label="Phone / WhatsApp" error={form.formState.errors.phone?.message} {...form.register("phone")} />
          <InputField label="Country" error={form.formState.errors.country?.message} {...form.register("country")} />
          <SelectField label="Preferred contact method" error={form.formState.errors.preferredContactMethod?.message} {...form.register("preferredContactMethod")} options={["Email", "WhatsApp", "Phone"]} />
          <label className="grid gap-2 text-sm font-bold text-forest md:col-span-2">
            Message
            <textarea {...form.register("message")} rows={5} className="focus-ring rounded-2xl border border-sand bg-ivory px-4 py-3 text-charcoal" />
          </label>
          <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden {...form.register("website")} />
          <label className="flex gap-3 text-sm text-charcoal/70 md:col-span-2">
            <input type="checkbox" {...form.register("privacyConsent")} />
            <span>I agree to be contacted about my trip and understand my details will be handled securely.</span>
          </label>
          {form.formState.errors.privacyConsent?.message ? <p className="text-sm text-terracotta md:col-span-2">{form.formState.errors.privacyConsent.message}</p> : null}
        </motion.div>
      ) : null}
      </AnimatePresence>

      <div className="mt-8 flex flex-wrap justify-between gap-3">
        <Button type="button" variant="ghost" onClick={() => setStep((value) => Math.max(1, value - 1))} disabled={step === 1}>Back</Button>
        {step < 3 ? <Button type="button" onClick={next}>Next</Button> : <Button type="submit" disabled={status === "loading"}>{status === "loading" ? "Sending..." : "Submit inquiry"}</Button>}
      </div>
      <p className="mt-4 min-h-5 text-sm text-terracotta" aria-live="polite">{status === "error" ? "Something went wrong. Please email us or try again." : ""}</p>
    </form>
  );
}

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string };
function InputField({ label, error, ...props }: FieldProps) {
  return (
    <label className="grid gap-2 text-sm font-bold text-forest">
      {label}
      <input className="focus-ring min-h-12 rounded-2xl border border-sand bg-ivory px-4 text-charcoal" {...props} />
      <AnimatePresence>{error ? <motion.span className="text-xs text-terracotta" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>{error}</motion.span> : null}</AnimatePresence>
    </label>
  );
}

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & { label: string; options: string[]; error?: string };
function SelectField({ label, options, error, ...props }: SelectProps) {
  return (
    <label className="grid gap-2 text-sm font-bold text-forest">
      {label}
      <select className="focus-ring min-h-12 rounded-2xl border border-sand bg-ivory px-4 text-charcoal" {...props}>
        {options.map((option) => <option key={option || "empty"} value={option}>{option || "Select"}</option>)}
      </select>
      <AnimatePresence>{error ? <motion.span className="text-xs text-terracotta" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>{error}</motion.span> : null}</AnimatePresence>
    </label>
  );
}

function CheckboxGroup({ label, options, values, onChange, error }: { label: string; options: string[]; values: string[]; onChange: (values: string[]) => void; error?: string }) {
  return (
    <fieldset className="grid gap-3">
      <legend className="text-sm font-bold text-forest">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const checked = values.includes(option);
          return (
            <label key={option} className={`focus-within:ring-2 focus-within:ring-terracotta rounded-full border px-4 py-2 text-sm font-bold ${checked ? "border-forest bg-forest text-white" : "border-sand bg-ivory text-charcoal"}`}>
              <input
                type="checkbox"
                checked={checked}
                onChange={() => onChange(checked ? values.filter((value) => value !== option) : [...values, option])}
                className="sr-only"
              />
              {option}
            </label>
          );
        })}
      </div>
      {error ? <p className="text-xs text-terracotta">{error}</p> : null}
    </fieldset>
  );
}
