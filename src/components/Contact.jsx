import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef(); // Tambahkan useRef untuk form
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [messageSent, setMessageSent] = useState(false); // Untuk status pengiriman pesan

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_91aj0lh", // ID Service
        "template_8685xju", // ID Template
        form.current,
        "PjYr1LHCuT0G0NV0g" // User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFormData({ from_name: "", from_email: "", message: "" });
  };

  return (
    <div className="flex justify-center items-center py-14 ">
      <div className="w-full max-w-4xl rounded-lg shadow-lg p-8 lg:p-12 text-stone border">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>

        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg mb-2" htmlFor="from_name">
              Your Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name} // Perbaikan sesuai dengan template EmailJS
              onChange={handleInputChange}
              className="w-full p-4 rounded-lg bg-slate-50 text-black border border-stone-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="What's your name?"
              required
            />
          </div>
          <div>
            <label className="block text-lg mb-2" htmlFor="from_email">
              Your Email
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              value={formData.from_email} // Perbaikan sesuai dengan template EmailJS
              onChange={handleInputChange}
              className="w-full p-4 rounded-lg bg-slate-50 text-black border border-stone-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="What's your email?"
              required
            />
          </div>
          <div>
            <label className="block text-lg mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message} // Perbaikan sesuai dengan template EmailJS
              onChange={handleInputChange}
              className="w-full p-4 h-40 rounded-lg bg-slate-50 text-black border border-stone-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="What do you want to say?"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-white text-black font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out hover:bg-slate-600 hover:text-white"
            >
              Send
            </button>
          </div>
        </form>

        {messageSent && (
          <p className="text-center text-green-500 mt-4">
            Message Sent Successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;
