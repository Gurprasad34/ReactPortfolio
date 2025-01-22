import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required.";
    if (!form.email.includes("@")) newErrors.email = "Valid email is required.";
    if (!form.message) newErrors.message = "Message is required.";
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Contact</h2>
      <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="p-2 border"
        />
        {errors.name && <span className="text-red-500">{errors.name}</span>}
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="p-2 border"
        />
        {errors.email && <span className="text-red-500">{errors.email}</span>}
        <textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="p-2 border"
        />
        {errors.message && <span className="text-red-500">{errors.message}</span>}
        <button type="submit" className="bg-blue-500 text-white p-2">
          Submit
        </button>
      </form>
    </div>
  );
}
