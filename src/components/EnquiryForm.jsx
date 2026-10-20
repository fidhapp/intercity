import { useEffect, useState } from "react";
import { useQuote } from "../context/QuoteContext";
import { briefText } from "../brief";
import { company } from "../data";

const empty = { name: "", company: "", email: "", phone: "", service: "", message: "" };

function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Please add your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Enter a valid email address.";
  const digits = values.phone.replace(/\D/g, "");
  if (values.phone.trim() && digits.length < 8) errors.phone = "Enter a phone number with at least 8 digits, or leave it blank.";
  if (!values.service) errors.service = "Choose a service line.";
  if (values.message.trim().length < 12) errors.message = "Add a short note about the site or the support you need.";
  return errors;
}

export default function EnquiryForm({ initial, compact = false, onChange, idPrefix = "enquiry" }) {
  const { clearPicks } = useQuote();
  const [values, setValues] = useState({ ...empty, ...initial });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    onChange?.(values);
  }, [values, onChange]);

  function update(field, value) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function onSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 650);
  }

  if (status === "sent") {
    return (
      <div className="form-success" role="status">
        <p className="kicker">Brief prepared</p>
        <h3>Thank you, {values.name.split(" ")[0]}.</h3>
        <p>
          Your brief is ready. Email it to {company.email}, or call {company.phones[0].display}.
        </p>
        <pre>{briefText(values)}</pre>
        <div className="form-success-actions">
          <a className="btn btn-gold" href={`mailto:${company.email}?subject=${encodeURIComponent("Project brief from " + values.name)}&body=${encodeURIComponent(briefText(values))}`}>
            Email this brief
          </a>
          <button
            type="button"
            className="btn btn-line"
            onClick={() => {
              setStatus("idle");
              clearPicks();
            }}
          >
            Write another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className={`form ${compact ? "form-compact" : ""}`} onSubmit={onSubmit} noValidate>
      <div className="form-grid">
        <Field id={`${idPrefix}-name`} label="Name" error={errors.name}>
          <input id={`${idPrefix}-name`} value={values.name} autoComplete="name" onChange={(e) => update("name", e.target.value)} />
        </Field>
        <Field id={`${idPrefix}-company`} label="Company" optional error={errors.company}>
          <input id={`${idPrefix}-company`} value={values.company} autoComplete="organization" onChange={(e) => update("company", e.target.value)} />
        </Field>
        <Field id={`${idPrefix}-email`} label="Email" error={errors.email}>
          <input id={`${idPrefix}-email`} type="email" value={values.email} autoComplete="email" onChange={(e) => update("email", e.target.value)} />
        </Field>
        <Field id={`${idPrefix}-phone`} label="Phone" optional error={errors.phone}>
          <input id={`${idPrefix}-phone`} value={values.phone} autoComplete="tel" onChange={(e) => update("phone", e.target.value)} />
        </Field>
      </div>
      <Field id={`${idPrefix}-service`} label="Primary service" error={errors.service}>
        <select id={`${idPrefix}-service`} value={values.service} onChange={(e) => update("service", e.target.value)}>
          <option value="">Select a service</option>
          <option>Construction</option>
          <option>Civil & Infrastructure</option>
          <option>Earthworks</option>
          <option>Utilities</option>
          <option>Equipment Rental</option>
          <option>Manpower</option>
          <option>Procurement</option>
          <option>Interior & Maintenance</option>
          <option>A combined brief</option>
        </select>
      </Field>
      <Field id={`${idPrefix}-message`} label="Project note" error={errors.message}>
        <textarea id={`${idPrefix}-message`} rows={compact ? 6 : 7} value={values.message} onChange={(e) => update("message", e.target.value)} />
      </Field>
      <button className="btn btn-gold" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Preparing brief…" : "Prepare project brief"}
      </button>
    </form>
  );
}

function Field({ id, label, error, optional, children }) {
  return (
    <label className={`field ${error ? "has-error" : ""}`} htmlFor={id}>
      <span>
        {label}
        {optional ? <em> Optional</em> : null}
      </span>
      {children}
      {error ? <small>{error}</small> : null}
    </label>
  );
}
