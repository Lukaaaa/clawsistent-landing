"use client";

import { useState } from "react";
import { PROFESSION_OPTIONS } from "@/lib/constants";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

interface LeadFormProps {
  defaultPlan?: string;
  defaultBeruf?: string;
  utmSource?: string;
}

export default function LeadForm({ defaultPlan, defaultBeruf, utmSource }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profession: defaultBeruf || "",
    company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: utmSource || "website",
          plan: defaultPlan || null,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Ein Fehler ist aufgetreten.");
        return;
      }

      setIsSuccess(true);

      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead");
      }
    } catch {
      setError("Verbindungsfehler. Bitte versuchen Sie es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-navy-900 mb-2">Vielen Dank!</h3>
        <p className="text-navy-500">
          Sie sind jetzt auf der Warteliste. Wir melden uns in Kürze bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 pb-24 md:pb-0">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          placeholder="Max Mustermann"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1">
          E-Mail *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          placeholder="max@beispiel.at"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-navy-700 mb-1">
          Telefon
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          placeholder="+43 123 456 789"
        />
      </div>

      <div>
        <label htmlFor="profession" className="block text-sm font-medium text-navy-700 mb-1">
          Beruf *
        </label>
        <select
          id="profession"
          name="profession"
          required
          value={formData.profession}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
        >
          <option value="">Bitte wählen...</option>
          {PROFESSION_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
          <option value="sonstiges">Sonstiges</option>
        </select>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-navy-700 mb-1">
          Unternehmen
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          placeholder="Firma GmbH"
        />
      </div>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
          {error}
        </div>
      )}

      {/* Desktop submit button (inline) */}
      <div className="hidden md:block">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Wird gesendet...
            </span>
          ) : (
            "Jetzt voranmelden"
          )}
        </button>
      </div>

      {/* Mobile sticky submit button */}
      <div className="fixed bottom-0 inset-x-0 p-4 bg-white/80 backdrop-blur-lg border-t border-navy-100 md:hidden z-40">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Wird gesendet...
            </span>
          ) : (
            "Jetzt voranmelden"
          )}
        </button>
      </div>
    </form>
  );
}
