import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FaUser, FaEnvelope, FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    emailjs.init("ByKrV7PsZWVg5lCOO");
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validateForm = () => {
    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+]?[\d\s\-()]{10,20}$/;

    if (!form.name.trim()) return "Name is required";
    if (!nameRegex.test(form.name))
      return "Name must contain only letters";

    if (!form.email.trim()) return "Email is required";
    if (!emailRegex.test(form.email))
      return "Enter valid email";

    if (!form.phone.trim()) return "Phone is required";
    if (!phoneRegex.test(form.phone))
      return "Enter valid phone number";

    if (!form.message.trim()) return "Message is required";
    if (form.message.length < 10)
      return "Message must be at least 10 characters";

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      toast.error(error);
      return;
    }

    try {
      await emailjs.send(
        "service_abcd123",
        "template_dkk9dtn",
        form
      );

      toast.success("Message sent successfully 🚀");
      setForm(initialState);

    } catch (error) {
      console.log("EMAIL ERROR:", error);
      toast.error("Failed to send message!");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-transparent py-3 pl-12 pr-4 outline-none focus:border-primary";

  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">

        <h2 className="mb-6 text-4xl font-bold">
          Contact With Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-3xl border border-white/10 p-6 backdrop-blur-md"
        >

          <div className="relative">
            <FaUser className="absolute left-4 top-4 text-gray-400" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={inputClass}
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-4 text-gray-400" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={inputClass}
            />
          </div>

          <div className="relative">
            <FaPhoneAlt className="absolute left-4 top-4 text-gray-400" />
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className={inputClass}
            />
          </div>

          <textarea
            rows="5"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full rounded-xl border border-white/10 bg-transparent p-4 outline-none focus:border-primary"
          />

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-purple-500 to-indigo-500 py-4 font-semibold transition hover:scale-105"
          >
            <FaPaperPlane />
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;