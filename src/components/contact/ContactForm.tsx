"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const serviceOptions = [
  "AI Automation for Businesses",
  "Web Development (Next.js)",
  "App Development (iOS & Android)",
  "Graphic Design & Brand System",
  "Video Editing & Motion",
  "Growth Marketing Strategy",
  "IT Support & Cloud Consulting",
  "Free Strategic Consultation",
];

const budgetRanges = [
  "$5k - $10k",
  "$10k - $25k",
  "$25k - $50k",
  "$50k+",
  "Flexible / Not Sure",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: serviceOptions[0],
    budget: budgetRanges[1],
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    // Client Validation
    if (!formData.name.trim()) {
      setStatus({ type: "error", message: "Please enter your full name." });
      setLoading(false);
      return;
    }

    if (!formData.email.includes("@")) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      setLoading(false);
      return;
    }

    if (formData.message.trim().length < 10) {
      setStatus({
        type: "error",
        message: "Please include a brief message (at least 10 characters).",
      });
      setLoading(false);
      return;
    }

    try {
      // Direct Web3Forms submission with key 5c5d2c4f-f283-4b04-af99-57413583ae39 routed to muneebsaleem402@gmail.com
      const accessKey =
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
        "5c5d2c4f-f283-4b04-af99-57413583ae39";

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Free Consultation Request: ${formData.service} from ${formData.name}`,
          from_name: "Tyrosoft Dev Website",
          to_email: "muneebsaleem402@gmail.com",
          name: formData.name,
          email: formData.email,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          type: "success",
          message:
            "Thank you! Your inquiry has been sent directly to muneebsaleem402@gmail.com. Our senior team will get back to you within 12 hours.",
        });
        setFormData({
          name: "",
          email: "",
          service: serviceOptions[0],
          budget: budgetRanges[1],
          message: "",
        });
      } else {
        // Fallback to Next.js route handler
        const apiRes = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const apiData = await apiRes.json();
        if (apiRes.ok && apiData.success) {
          setStatus({
            type: "success",
            message: apiData.message || "Consultation request sent successfully!",
          });
          setFormData({
            name: "",
            email: "",
            service: serviceOptions[0],
            budget: budgetRanges[1],
            message: "",
          });
        } else {
          setStatus({
            type: "error",
            message: data.message || apiData.error || "Failed to submit request. Please try again.",
          });
        }
      }
    } catch (err) {
      console.error(err);
      setStatus({
        type: "error",
        message: "Network error occurred. Please check your connection and retry.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SpotlightCard className="p-8 sm:p-12 shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-xs font-mono uppercase text-[#A78BFA] mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="e.g. Alex Morgan"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#15101F] border border-[rgba(167,139,250,0.18)] text-[#EDEAF5] placeholder-[#8C8799]/60 focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-colors"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-xs font-mono uppercase text-[#A78BFA] mb-2">
            Work Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="alex@company.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#15101F] border border-[rgba(167,139,250,0.18)] text-[#EDEAF5] placeholder-[#8C8799]/60 focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-colors"
          />
        </div>

        {/* Service Interested In */}
        <div>
          <label htmlFor="service" className="block text-xs font-mono uppercase text-[#A78BFA] mb-2">
            Service Interested In *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#15101F] border border-[rgba(167,139,250,0.18)] text-[#EDEAF5] focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-colors"
          >
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-[#0F0B16] text-[#EDEAF5]">
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Budget Range Selection Pills */}
        <div>
          <label className="block text-xs font-mono uppercase text-[#A78BFA] mb-2">
            Estimated Budget Range
          </label>
          <div className="flex flex-wrap gap-2">
            {budgetRanges.map((range) => {
              const isSelected = formData.budget === range;
              return (
                <button
                  type="button"
                  key={range}
                  onClick={() => setFormData({ ...formData, budget: range })}
                  className={`px-3 py-2 rounded-xl text-xs font-mono transition-all ${
                    isSelected
                      ? "bg-[#6D28D9] text-white border border-[#8B5CF6]"
                      : "bg-[#15101F] text-[#8C8799] border border-[rgba(167,139,250,0.12)] hover:text-[#EDEAF5]"
                  }`}
                >
                  {range}
                </button>
              );
            })}
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-mono uppercase text-[#A78BFA] mb-2">
            Project Overview / Bottleneck Details *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="Tell us about your project requirements, timeline, or operational tasks you'd like to automate..."
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#15101F] border border-[rgba(167,139,250,0.18)] text-[#EDEAF5] placeholder-[#8C8799]/60 focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-colors"
          />
        </div>

        {/* Status Messages */}
        {status.type === "success" && (
          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-sm flex items-start gap-3 animate-fadeIn">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Consultation Request Received!</p>
              <p className="text-xs text-emerald-300/80 mt-0.5">{status.message}</p>
            </div>
          </div>
        )}

        {status.type === "error" && (
          <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-300 text-sm flex items-start gap-3 animate-fadeIn">
            <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Submission Error</p>
              <p className="text-xs text-rose-300/80 mt-0.5">{status.message}</p>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={loading}
          variant="primary"
          size="lg"
          className="w-full"
          icon={
            loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )
          }
        >
          {loading ? "Sending Request..." : "Submit Consultation Request"}
        </Button>
      </form>
    </SpotlightCard>
  );
}
