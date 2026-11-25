"use client";
import { useState } from "react";
export function ContactForm() {
  const [ready, setReady] = useState(false);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nProject: ${data.get("type")}\n\n${data.get("message")}`;
    window.location.href = `mailto:info@inoxdecor.com?subject=${encodeURIComponent("Building Systems project enquiry")}&body=${encodeURIComponent(body)}`;
    setReady(true);
  }
  return (
    <form onSubmit={submit} className="contact-form">
      <div className="form-row">
        <label>
          Your name
          <input
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Name"
          />
        </label>
        <label>
          Email address
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={200}
            placeholder="you@studio.com"
          />
        </label>
      </div>
      <label>
        Project type
        <select name="type" required defaultValue="">
          <option value="" disabled>
            Select your project
          </option>
          <option>Residential</option>
          <option>Commercial</option>
          <option>Hospitality</option>
          <option>Retail</option>
          <option>Other</option>
        </select>
      </label>
      <label>
        A little about your project
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={4000}
          rows={3}
          placeholder="The space, the system, the possibilities…"
        />
      </label>
      <div className="form-submit">
        <button className="button" type="submit">
          Start a conversation
        </button>
        <span>Opens your email app.</span>
      </div>
      {ready && (
        <p role="status">
          Your enquiry is ready in your email app. Please send it there to
          contact <span className="inox-text">INOX</span>. You can also email
          info@inoxdecor.com directly.
        </p>
      )}
    </form>
  );
}
