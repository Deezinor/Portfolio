import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setIsLoading(false);
          setSuccessMessage("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form fields
        },
        (error) => {
          setIsLoading(false);
          setSuccessMessage(`Failed to send message: ${error.text}`);
        }
      );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="mb-2 font-bold">
          Name *
        </label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          className="min-w-80 border-gray-300 border-[1px] rounded-sm"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="email" className="mb-2 font-bold">
          Email *
        </label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          className="min-w-80 border-gray-300 border-[1px] rounded-sm"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="message" className="mb-2 font-bold">
          Message *
        </label>
        <br />
        <textarea
          id="message"
          name="message"
          className="min-w-80 border-gray-300 border-[1px] rounded-sm"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          style={{ resize: "both" }}
        ></textarea>
        <br />
        <br />

        <button
          type="submit"
          disabled={isLoading}
          className="button button--black"
        >
          {isLoading ? "Sending..." : "Submit"}
        </button>
      </form>
      {successMessage && <p aria-live="polite">{successMessage}</p>}
    </div>
  );
};

export default ContactForm;
