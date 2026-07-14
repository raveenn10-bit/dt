import { z } from "zod";

export const inquirySchema = z.object({
  travelStyle: z.string().min(2, "Choose a travel style."),
  destinations: z.array(z.string()).min(1, "Select at least one destination."),
  experiences: z.array(z.string()).min(1, "Select at least one experience."),
  accommodationType: z.string().min(2, "Choose an accommodation style."),
  approximateDates: z.string().min(2, "Tell us your approximate dates."),
  flexibleDates: z.boolean(),
  duration: z.string().min(1, "Choose a trip duration."),
  adults: z.number().int().min(1, "At least one adult is required.").max(20),
  children: z.number().int().min(0).max(20),
  budgetRange: z.string().min(1, "Choose a budget range."),
  fullName: z.string().min(2, "Enter your full name.").max(120),
  email: z.string().email("Enter a valid email."),
  phone: z.string().min(6, "Enter a phone or WhatsApp number.").max(40),
  country: z.string().min(2, "Enter your country."),
  preferredContactMethod: z.enum(["Email", "WhatsApp", "Phone"]),
  message: z.string().max(1200).optional().or(z.literal("")),
  privacyConsent: z.boolean().refine((value) => value, "Please accept the privacy consent."),
  website: z.string().max(0).optional()
});

export const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email."),
  website: z.string().max(0).optional()
});

export type InquiryInput = z.infer<typeof inquirySchema>;
