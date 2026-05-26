"use client";

import { useState, FormEvent } from "react";

type FormState = "idle" | "sending" | "success" | "error";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "var(--bg-2)",
  border: "1px solid rgba(201,169,110,0.18)",
  padding: "0.875rem 1rem",
  color: "var(--cream)",
  fontSize: "0.85rem",
  fontWeight: 300,
  outline: "none",
  transition: "border-color 0.2s ease",
  fontFamily: "var(--font-inter), system-ui, sans-serif",
};

const labelStyle: React.CSSProperties = {
  fontSize: "0.65rem",
  letterSpacing: "0.3em",
  textTransform: "uppercase" as const,
  color: "var(--cream-dim)",
  display: "block",
  marginBottom: "0.5rem",
};

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError(null);

    const form = e.currentTarget;
    const data = {
      name:    (form.elements.namedItem("name")    as HTMLInputElement).value,
      email:   (form.elements.namedItem("email")   as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        const body = await res.json().catch(() => ({}));
        setError((body as { error?: string }).error ?? "Something went wrong. Please try again.");
        setState("error");
      }
    } catch {
      setError("Network error. Please try again.");
      setState("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6"
      aria-label="Contact form"
    >
      <div>
        <label htmlFor="name" style={labelStyle}>Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your name"
          style={inputStyle}
          onFocus={e  => (e.currentTarget.style.borderColor = "var(--gold)")}
          onBlur={e   => (e.currentTarget.style.borderColor = "rgba(201,169,110,0.18)")}
        />
      </div>

      <div>
        <label htmlFor="email" style={labelStyle}>Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="your@email.com"
          style={inputStyle}
          onFocus={e  => (e.currentTarget.style.borderColor = "var(--gold)")}
          onBlur={e   => (e.currentTarget.style.borderColor = "rgba(201,169,110,0.18)")}
        />
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>Message</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          placeholder="What would you like to discuss?"
          style={{ ...inputStyle, resize: "none" }}
          onFocus={e  => (e.currentTarget.style.borderColor = "var(--gold)")}
          onBlur={e   => (e.currentTarget.style.borderColor = "rgba(201,169,110,0.18)")}
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={state === "sending"}
          className="transition-all duration-300"
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            padding: "0.875rem 2.5rem",
            background: "transparent",
            border: "1px solid var(--gold)",
            color: "var(--gold)",
            opacity: state === "sending" ? 0.4 : 1,
            cursor: state === "sending" ? "not-allowed" : "crosshair",
          }}
          onMouseEnter={e => {
            if (state !== "sending") {
              e.currentTarget.style.background = "var(--gold)";
              e.currentTarget.style.color = "var(--bg)";
            }
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "var(--gold)";
          }}
        >
          {state === "sending" ? "Sending…" : "Send Message"}
        </button>
      </div>

      {state === "success" && (
        <div
          role="status"
          style={{
            border: "1px solid rgba(201,169,110,0.4)",
            padding: "0.875rem 1rem",
            background: "rgba(201,169,110,0.06)",
          }}
        >
          <p style={{ fontSize: "0.75rem", color: "var(--gold)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Message sent
          </p>
          <p style={{ fontSize: "0.8rem", color: "var(--cream-dim)", marginTop: "0.25rem" }}>
            I&apos;ll be in touch.
          </p>
        </div>
      )}
      {state === "error" && error && (
        <div
          role="alert"
          style={{
            border: "1px solid rgba(192,113,106,0.4)",
            padding: "0.875rem 1rem",
            background: "rgba(192,113,106,0.06)",
          }}
        >
          <p style={{ fontSize: "0.75rem", color: "#c0716a", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Error
          </p>
          <p style={{ fontSize: "0.8rem", color: "var(--cream-dim)", marginTop: "0.25rem" }}>
            {error}
          </p>
        </div>
      )}
    </form>
  );
}
