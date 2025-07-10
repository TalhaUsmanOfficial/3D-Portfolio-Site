/*
! Created On Tue July 08 11:45 PM 2025

! @author: Talha Usman
! Status: Developer
*/

import { useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { toast } from "react-toastify";

const Contact = () => {
  const notifySuccess = () => toast.success("Message Sent");
  const notifyError = () => toast.error("Message not Sent");
  const isMobile = useMediaQuery({
    maxWidth: 1200,
  });
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData);
    try {
      await fetch("https://formsubmit.co/ajax/talhau137@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formObject),
      });
      notifySuccess();
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      notifyError();
    }
    setLoading(false);
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        {!isMobile && (
          <img
            src="/assets/terminal.png"
            alt="Terminal Background"
            className="absolute inset-0 min-h-screen"
          />
        )}
        <div className="contact-container">
          <h3 className="head-text mt-6">Let's Connect</h3>
          <p className="text-lg text-neutral-500 mt-3">
            Whether You're Looking to Build a New Website, Improve Your Existing
            Platform, or Bring a Unique Project to Your Life, I'm Here to Help.
          </p>
          <form
            ref={formRef}
            className="mt-12 flex flex-col space-y-7"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name" className="space-y-3">
              <span className="field-label">Full Name</span>
            </label>
            <input
              type="text"
              className="field-input"
              placeholder="Talha Usman"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <label htmlFor="email" className="space-y-3">
              <span className="field-label">Email</span>
            </label>
            <input
              type="email"
              className="field-input"
              placeholder="talhau137@gmail.com"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <label htmlFor="message" className="space-y-3">
              <span className="field-label">Message</span>
            </label>
            <textarea
              className="field-input"
              placeholder="Hi, I'm interested in..."
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              autoComplete="off"
              rows={5}
            />
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="Arrow Up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
