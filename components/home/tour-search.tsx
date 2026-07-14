"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const schema = z.object({
  destination: z.string().optional(),
  category: z.string().optional(),
  duration: z.string().optional(),
  travelDate: z.string().optional(),
  travellers: z.number().min(1, "At least one traveller").max(20)
});

type SearchValues = z.infer<typeof schema>;

export function TourSearch() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<SearchValues>({
    resolver: zodResolver(schema),
    defaultValues: { travellers: 2 }
  });

  function onSubmit(values: SearchValues) {
    const params = new URLSearchParams();
    if (values.destination) params.set("destination", values.destination);
    if (values.category) params.set("category", values.category.toLowerCase());
    if (values.duration) params.set("duration", values.duration);
    router.push(`/tours?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container relative z-20 -mt-12 rounded-[2rem] bg-white p-4 shadow-premium lg:-mt-16"
      aria-label="Find your Sri Lanka tour"
    >
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr_.8fr_auto]">
        <label className="grid gap-2 text-sm font-bold text-forest">
          Destination
          <select {...register("destination")} className="focus-ring min-h-12 rounded-2xl border border-sand bg-ivory px-4 text-charcoal">
            <option value="">Any destination</option>
            {["sigiriya", "kandy", "ella", "yala", "galle", "mirissa", "trincomalee"].map((item) => <option key={item} value={item}>{item.replace("-", " ")}</option>)}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-forest">
          Tour type
          <select {...register("category")} className="focus-ring min-h-12 rounded-2xl border border-sand bg-ivory px-4 text-charcoal">
            <option value="">Any type</option>
            {["Cultural", "Wildlife", "Beach", "Honeymoon", "Family", "Luxury"].map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-forest">
          Duration
          <select {...register("duration")} className="focus-ring min-h-12 rounded-2xl border border-sand bg-ivory px-4 text-charcoal">
            <option value="">Any length</option>
            <option value="1-7">1-7 days</option>
            <option value="7-10">7-10 days</option>
            <option value="10-14">10-14 days</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-forest">
          Travel date
          <input {...register("travelDate")} type="month" className="focus-ring min-h-12 rounded-2xl border border-sand bg-ivory px-4 text-charcoal" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-forest">
          Travellers
          <input {...register("travellers", { valueAsNumber: true })} type="number" min="1" max="20" className="focus-ring min-h-12 rounded-2xl border border-sand bg-ivory px-4 text-charcoal" />
        </label>
        <Button className="self-end px-5" type="submit"><Search className="mr-2 h-4 w-4" /> Search</Button>
      </div>
      <p className="mt-2 min-h-5 text-sm text-terracotta" aria-live="polite">{errors.travellers?.message}</p>
    </form>
  );
}
