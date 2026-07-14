"use client";

import type React from "react";
import { useMemo, useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { vehicles } from "@/data/vehicles";
import { whatsappUrl } from "@/lib/utils";

type TaxiFormState = {
  name: string;
  country: string;
  phone: string;
  email: string;
  vehicle: string;
  pickup: string;
  drop: string;
  pickupDate: string;
  pickupTime: string;
  notes: string;
};

const initialState: TaxiFormState = {
  name: "",
  country: "",
  phone: "",
  email: "",
  vehicle: "",
  pickup: "",
  drop: "",
  pickupDate: "",
  pickupTime: "",
  notes: ""
};

export function TaxiBookingForm() {
  const [values, setValues] = useState<TaxiFormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const message = useMemo(() => {
    const selectedVehicle = vehicles.find((vehicle) => vehicle.id === values.vehicle)?.name || values.vehicle || "Not selected";
    return [
      "Hello Ceylon Travel Holidays, I want to book a taxi.",
      `Name: ${values.name || "-"}`,
      `Country: ${values.country || "-"}`,
      `Phone: ${values.phone || "-"}`,
      `Email: ${values.email || "-"}`,
      `Vehicle: ${selectedVehicle}`,
      `Pickup: ${values.pickup || "-"}`,
      `Drop: ${values.drop || "-"}`,
      `Date: ${values.pickupDate || "-"}`,
      `Time: ${values.pickupTime || "-"}`,
      `Notes: ${values.notes || "-"}`
    ].join("\n");
  }, [values]);

  function update(field: keyof TaxiFormState, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    if (!values.name || !values.phone || !values.vehicle || !values.pickup || !values.drop || !values.pickupDate) return;
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={submit} className="rounded-[2rem] bg-white p-6 shadow-premium md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <InputField label="Name" value={values.name} required submitted={submitted} onChange={(value) => update("name", value)} />
        <InputField label="Country" value={values.country} onChange={(value) => update("country", value)} />
        <InputField label="Phone Number" value={values.phone} required submitted={submitted} onChange={(value) => update("phone", value)} />
        <InputField label="Email Address" type="email" value={values.email} onChange={(value) => update("email", value)} />
        <label className="grid gap-2 text-sm font-bold text-forest">
          Select Vehicle
          <select value={values.vehicle} onChange={(event) => update("vehicle", event.target.value)} className="focus-ring min-h-12 rounded-2xl border border-sand bg-ivory px-4 text-charcoal">
            <option value="">Choose Vehicle</option>
            {vehicles.map((vehicle) => <option key={vehicle.id} value={vehicle.id}>{vehicle.name}</option>)}
          </select>
          {submitted && !values.vehicle ? <span className="text-xs text-terracotta">Choose a vehicle.</span> : null}
        </label>
        <InputField label="Pickup Location" value={values.pickup} required submitted={submitted} onChange={(value) => update("pickup", value)} />
        <InputField label="Drop Location" value={values.drop} required submitted={submitted} onChange={(value) => update("drop", value)} />
        <InputField label="Pickup Date" type="date" value={values.pickupDate} required submitted={submitted} onChange={(value) => update("pickupDate", value)} />
        <InputField label="Pickup Time" type="time" value={values.pickupTime} onChange={(value) => update("pickupTime", value)} />
        <label className="grid gap-2 text-sm font-bold text-forest md:col-span-2">
          Additional Notes
          <textarea value={values.notes} onChange={(event) => update("notes", event.target.value)} rows={5} className="focus-ring rounded-2xl border border-sand bg-ivory px-4 py-3 text-charcoal" />
        </label>
      </div>
      <Button type="submit" className="mt-8">
        <MessageCircle className="h-4 w-4" />
        Book Now on WhatsApp
      </Button>
      <p className="mt-4 text-sm text-charcoal/60">This opens WhatsApp with your taxi details pre-filled for fast confirmation.</p>
    </form>
  );
}

function InputField({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  submitted = false
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  submitted?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-forest">
      {label}
      <input type={type} value={value} onChange={(event) => onChange(event.target.value)} className="focus-ring min-h-12 rounded-2xl border border-sand bg-ivory px-4 text-charcoal" />
      {submitted && required && !value ? <span className="text-xs text-terracotta">This field is required.</span> : null}
    </label>
  );
}
