import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    suggestion: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_2lgiemh",      // Replace with your Service ID
        "template_n155gva",     // Replace with your Template ID
        formData,
        "JaHSUHUm5IPjcdWpf"       // Replace with your Public Key
      )
      .then(
        (result) => {
          alert("आपका सुझाव सफलतापूर्वक प्राप्त हुआ।🙏");
          setFormData({ name: "", mobile: "", suggestion: "" });
        },
        (error) => {
          alert("संदेश भेजने में समस्या आई। कृपया पुनः प्रयास करें।");
          console.error(error);
        }
      );
  };

  return (
    <div className="contact-container">
      <h2 className="form-title">संपर्क करें</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          आपका नाम:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          मोबाइल नंबर:
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />
        </label>

        <label>
          आपका सुझाव:
          <textarea
            name="suggestion"
            value={formData.suggestion}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </label>

        <button type="submit" className="submit-btn">सुझाव भेजें</button>
      </form>
    </div>
  );
}
