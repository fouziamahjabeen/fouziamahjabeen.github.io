"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send, X } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xyezvbev", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Message could not be sent");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-grid">
          <label className="contact-field">
            <span>
              Your name <i>*</i>
            </span>
            <input autoComplete="name" name="name" placeholder="Your name" required />
          </label>
          <label className="contact-field">
            <span>
              Your email <i>*</i>
            </span>
            <input
              autoComplete="email"
              name="_replyto"
              type="email"
              placeholder="you@example.com"
              required
            />
          </label>
          <label className="contact-field">
            <span>
              Subject <i>*</i>
            </span>
            <input name="_subject" placeholder="Project inquiry" required />
          </label>
          <label className="contact-field">
            <span>Engagement type</span>
            <select name="engagement" defaultValue="Product design">
              <option>Product design</option>
              <option>Video editing</option>
              <option>Product design &amp; video</option>
              <option>Job opportunity</option>
              <option>Other</option>
            </select>
          </label>
        </div>
        <label className="contact-field contact-field-details">
          <span>
            Project details <i>*</i>
          </span>
          <textarea
            name="message"
            placeholder="Tell me about your project, goals, or opportunity..."
            rows={5}
            required
          />
        </label>
        <button className="contact-submit" type="submit" disabled={status === "sending"}>
          <Send size={17} aria-hidden="true" /> {status === "sending" ? "Sending…" : "Send message"}{" "}
          <ArrowRightIcon />
        </button>
      </form>
      {status === "success" && (
        <div className="contact-form-success" role="status" aria-live="polite">
          <CheckCircle2 size={18} aria-hidden="true" />
          <div>
            <strong>Message sent successfully.</strong>
            <p>Thanks for reaching out. I’ll get back to you as soon as possible.</p>
          </div>
          <button
            type="button"
            aria-label="Dismiss success message"
            onClick={() => setStatus("idle")}
          >
            <X size={17} aria-hidden="true" />
          </button>
        </div>
      )}
      {status === "error" && (
        <p className="contact-form-error" role="alert">
          Your message couldn’t be sent. Please try again or email me directly.
        </p>
      )}
    </>
  );
}

function ArrowRightIcon() {
  return <span aria-hidden="true">→</span>;
}
