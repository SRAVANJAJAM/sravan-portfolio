import { useState } from "react";
import { toast } from "react-toastify";
import { FaPaperPlane } from "react-icons/fa";
import { DotLoader } from "react-spinners";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const submissions =
        JSON.parse(localStorage.getItem("contactSubmissions")) || [];
      const newSubmission = {
        ...formData,
        date: new Date().toISOString(),
      };

      localStorage.setItem(
        "contactSubmissions",
        JSON.stringify([...submissions, newSubmission])
      );
      toast.success("Message stored successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
      toast.error("Failed to save message!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="pt-20 pb-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Get in Touch</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-[#34495e] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2ecc71] transition-all duration-300"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full bg-[#34495e] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2ecc71] transition-all duration-300"
              required
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full bg-[#34495e] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2ecc71] transition-all duration-300"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#2ecc71] text-[#2c3e50] px-6 py-3 rounded-lg font-medium hover:bg-[#27ae60] transition-colors duration-300 flex items-center justify-center"
          >
            {isLoading ? (
              <DotLoader color="#2c3e50" size={24} />
            ) : (
              <>
                <FaPaperPlane className="mr-2" /> Save Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
