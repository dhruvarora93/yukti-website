import { Title } from "@solidjs/meta";
import { action, useAction } from "@solidjs/router";
import { createSignal } from "solid-js";
import "./contact.css";

const sendMessage = action(async (formData: FormData) => {
  "use server";
  const { Resend } = await import("resend");
  const { saveEnquiry } = await import("~/data/enquiries");

  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const about = formData.get("about") as string;
  const message = formData.get("message") as string;

  await saveEnquiry({ first_name: firstName, last_name: lastName, email, phone, about, message });

  try {
    await new Resend(process.env.RESEND_API_KEY).emails.send({
      from: "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL!,
      subject: `[Contact] ${about} — ${firstName} ${lastName}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "—"}</p>
        <p><strong>Contacting about:</strong> ${about}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });
  } catch (e) {
    console.error("Email sending failed:", e);
  }

  return { success: true };
}, "send-message");

export default function Contact() {
  const send = useAction(sendMessage);
  const [status, setStatus] = createSignal<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    setStatus("sending");
    try {
      await send(new FormData(form));
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div class="contact-page">
      <Title>Contact me - Yukti Arora</Title>

      <div class="contact-left">
        <h1>Connect</h1>
        <p>Ready to begin? Get in touch to start the conversation.</p>
        <img src="/contact-illustration.png" alt="" class="contact-illustration" />
      </div>

      <div class="contact-right">
        {status() === "success" ? (
          <div class="contact-success">
            <p>Thanks for reaching out! I'll get back to you within 24–48 hours.</p>
          </div>
        ) : (
          <form class="contact-form" onSubmit={handleSubmit}>
            <div class="contact-field">
              <label for="firstName">First name (Required)</label>
              <input id="firstName" name="firstName" type="text" required />
            </div>

            <div class="contact-field">
              <label for="lastName">Last name</label>
              <input id="lastName" name="lastName" type="text" />
            </div>

            <div class="contact-field">
              <label for="email">Email (Required)</label>
              <input id="email" name="email" type="email" required />
            </div>

            <div class="contact-field">
              <label for="phone">Phone</label>
              <input id="phone" name="phone" type="tel" placeholder="+1 234 567 8900" />
            </div>

            <div class="contact-field">
              <label for="about">I am contacting you about (Required)</label>
              <select id="about" name="about" required>
                <option value="" disabled selected></option>
                <option value="Therapy">Therapy</option>
                <option value="Study Abroad">Study Abroad</option>
                <option value="Research">Research</option>
                <option value="General Enquiry">General Enquiry</option>
              </select>
            </div>

            <div class="contact-field">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows={5} />
            </div>

            <div class="contact-checkbox">
              <input id="disclaimer" name="disclaimer" type="checkbox" required />
              <label for="disclaimer">
                <em>I understand this form is not monitored 24/7 and is not suitable for emergencies. (Required)</em>
              </label>
            </div>

            {status() === "error" && (
              <p class="contact-error">Something went wrong. Please try again.</p>
            )}

            <button type="submit" class="contact-submit" disabled={status() === "sending"}>
              {status() === "sending" ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
