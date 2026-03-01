"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { waitlist } from "@/content/copy";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WaitlistForm() {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const formLoadTime = useRef<number>(0);
  useEffect(() => {
    formLoadTime.current = Date.now();
  }, []);

  const validate = useCallback(() => {
    const errors: Record<string, string> = {};
    if (!fullName.trim()) errors.full_name = "Full name is required";
    if (!company.trim()) errors.company = "Company is required";
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!EMAIL_REGEX.test(email)) {
      errors.email = "Please enter a valid email";
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }, [fullName, company, email]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);

      if (!validate()) return;

      if (honeypot) {
        setSuccess(true);
        return;
      }

      const startTime = Date.now();
      setLoading(true);

      try {
        const params = new URLSearchParams(window.location.search);
        const res = await fetch("/api/waitlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            full_name: fullName.trim(),
            company: company.trim(),
            email: email.trim().toLowerCase(),
            website_url: websiteUrl.trim() || undefined,
            utm_source: params.get("utm_source") || undefined,
            utm_medium: params.get("utm_medium") || undefined,
            utm_campaign: params.get("utm_campaign") || undefined,
            utm_term: params.get("utm_term") || undefined,
            utm_content: params.get("utm_content") || undefined,
            _form_load_time: formLoadTime.current,
            _honeypot: honeypot || undefined,
          }),
        });

        const elapsed = Date.now() - startTime;
        if (elapsed < 800) {
          await new Promise((r) => setTimeout(r, 800 - elapsed));
        }

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || waitlist.error);
        }

        setSuccess(true);
        setFullName("");
        setCompany("");
        setEmail("");
        setWebsiteUrl("");
      } catch (err) {
        setError(err instanceof Error ? err.message : waitlist.error);
      } finally {
        setLoading(false);
      }
    },
    [fullName, company, email, websiteUrl, honeypot, validate]
  );

  if (success) {
    return (
      <div
        className="rounded-lg border border-green-200 bg-green-50 p-6 text-center"
        role="status"
        aria-live="polite"
      >
        <p className="text-green-800 font-medium">{waitlist.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          label={waitlist.fields.fullName}
          name="full_name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          error={fieldErrors.full_name}
          disabled={loading}
          autoComplete="name"
        />
        <Input
          label={waitlist.fields.company}
          name="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
          error={fieldErrors.company}
          disabled={loading}
          autoComplete="organization"
        />
      </div>
      <Input
        label={waitlist.fields.email}
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        error={fieldErrors.email}
        disabled={loading}
        autoComplete="email"
      />
      <Input
        label={waitlist.fields.websiteUrl}
        name="website_url"
        type="url"
        value={websiteUrl}
        onChange={(e) => setWebsiteUrl(e.target.value)}
        disabled={loading}
        autoComplete="url"
        placeholder="https://"
      />

      {/* Honeypot - hidden from users, visible to bots */}
      <div className="absolute -left-[9999px] top-0" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      <Button
        type="submit"
        variant="gradient"
        size="lg"
        className="w-full sm:w-auto"
        disabled={loading}
      >
        {loading ? waitlist.submitting : waitlist.submit}
      </Button>
    </form>
  );
}
