import S from "./SectionTen.module.scss";
import React, { useState } from "react";
import Button from "../Button/Button";

type SectionTenProps = {
  windowWidth: number;
};

type FormspreeError = {
  field?: string;
  message: string;
  code?: string;
};

type FormspreeResponse = {
  ok?: boolean;
  next?: string;
  errors?: FormspreeError[];
};

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnjepyqe";

const SectionTen: React.FC<SectionTenProps> = ({ windowWidth }) => {
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FormspreeError[]>([]);
  const [formError, setFormError] = useState<string | null>(null);
  const scrollSpeed = windowWidth <= 1024 ? -2 : 2;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setFieldErrors([]);
    setFormError(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });

      const data: FormspreeResponse = await response.json().catch(() => ({}));

      if (response.ok) {
        setSucceeded(true);
      } else if (data.errors && data.errors.length) {
        setFieldErrors(data.errors);
        const firstFormError = data.errors.find((err) => !err.field);
        if (firstFormError) {
          setFormError(firstFormError.message);
        }
      } else {
        setFormError("Something went wrong. Please try again.");
      }
    } catch {
      setFormError("Something went wrong. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const fieldError = (name: string) => {
    const error = fieldErrors.find((e) => e.field === name);
    return error ? error.message : null;
  };

  if (succeeded) {
    return (
      <section id="section-ten" data-scroll-section>
        <div className={S.section}>
          <div className={S.success}>
            <h2 className={S.successTitle}>Thank you</h2>
            <p className={S.successText}>Your inquiry has been received. We’ll be in touch soon.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="section-ten" data-scroll-section>
      <div className={S.section}>
        <div className={S.left}>
          <div className={S.heading}>
            <p className={S.eyebrow}>Contact</p>
            <h2 className={S.title}>
              Say
              <br />
              <span className={S.accent}>Hello</span>
            </h2>
            <p className={S.description}>Available for artistic collaborations worldwide.</p>
          </div>

          <div className={S.details}>
            <div className={S.detail}>
              <p className={S.detailLabel}>General</p>
              <a className={S.detailLink} href="mailto:contact@szamusic.com">
                contact@szamusic.com
              </a>
            </div>
            <div className={S.detail}>
              <p className={S.detailLabel}>Booking</p>
              <a className={S.detailLink} href="mailto:booking@topdawg.com">
                booking@topdawg.com
              </a>
            </div>
          </div>
        </div>

        <div className={S.right}>
          <p className={S.outline} data-scroll data-scroll-direction="horizontal" data-scroll-speed={scrollSpeed}>
            Inquiries
          </p>

          <form className={S.form} onSubmit={handleSubmit}>
            {formError && (
              <p className={S.formError} role="alert">
                {formError}
              </p>
            )}

            <div className={S.field}>
              <label className={S.label} htmlFor="contact-name">
                Your Name
              </label>
              <input id="contact-name" name="name" type="text" placeholder="Full name or entity" required />
              {fieldError("name") && <p className={S.fieldError}>{fieldError("name")}</p>}
            </div>

            <div className={S.field}>
              <label className={S.label} htmlFor="contact-email">
                Email Address
              </label>
              <input id="contact-email" name="email" type="email" placeholder="example@studio.com" required />
              {fieldError("email") && <p className={S.fieldError}>{fieldError("email")}</p>}
            </div>

            <div className={S.field}>
              <label className={S.label} htmlFor="contact-nature">
                Project Nature
              </label>
              <select id="contact-nature" name="nature" defaultValue="Editorial / Runway">
                <option>Editorial / Runway</option>
                <option>Commercial Campaign</option>
                <option>Artistic Collaboration</option>
                <option>Press / Interview</option>
                <option>Other</option>
              </select>
            </div>

            <div className={S.field}>
              <label className={S.label} htmlFor="contact-message">
                The Narrative
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell us about your vision..."
                rows={4}
                required
              />
              {fieldError("message") && <p className={S.fieldError}>{fieldError("message")}</p>}
            </div>

            <div className={S.action}>
              <div className={S.buttonWrap}>
                <Button use="contact" text="send inquiry" type="submit" disabled={submitting} />
              </div>
              <p className={S.actionHint}>{submitting ? "Sending…" : "Transmit Inquiry"}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SectionTen;
