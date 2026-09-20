import { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSuccess: false,
    error: null,
  });

  const validateForm = () => {
    if (!formData.name.trim()) {
      return { valid: false, message: 'Please enter your name' };
    }
    if (!formData.email.trim()) {
      return { valid: false, message: 'Please enter your email' };
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return { valid: false, message: 'Please enter a valid email' };
    }
    if (!formData.subject.trim()) {
      return { valid: false, message: 'Please enter a subject' };
    }
    if (!formData.message.trim()) {
      return { valid: false, message: 'Please enter a message' };
    }
    if (formData.message.trim().length < 10) {
      return { valid: false, message: 'Message must be at least 10 characters' };
    }
    return { valid: true };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (formState.error) {
      setFormState((prev) => ({ ...prev, error: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = validateForm();
    if (!validation.valid) {
      setFormState((prev) => ({
        ...prev,
        error: validation.message,
      }));
      return;
    }

    setFormState((prev) => ({ ...prev, isSubmitting: true, error: null }));

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Create mailto link as fallback
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      // In production, you would send this to a backend service
      // For now, we'll show success and provide mailto fallback
      setFormState((prev) => ({
        ...prev,
        isSuccess: true,
        isSubmitting: false,
      }));

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormState((prev) => ({ ...prev, isSuccess: false }));
      }, 5000);

      // Log the mailto link (in production, send to backend)
      console.log('Form data to send:', formData);
      console.log('Mailto link:', mailtoLink);
    } catch (error) {
      setFormState((prev) => ({
        ...prev,
        error: 'Failed to send message. Please try again.',
        isSubmitting: false,
      }));
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Let's Build Something Together</span>
          </h2>
          <p className="text-dark-text2 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's talk about how I can help
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 animate-slideInLeft">
            <div className="space-y-6">
              {/* Email */}
              <div className="glass-card p-6 hover:shadow-glow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-400 mt-1">
                    <FaEnvelope className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-text mb-2">Email</h3>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-dark-text2 hover:text-blue-400 transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="glass-card p-6 hover:shadow-glow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-400 mt-1">
                    <FaMapMarkerAlt className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-text mb-2">Location</h3>
                    <p className="text-dark-text2">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card p-6 hover:shadow-glow-lg transition-all duration-300">
                <h3 className="font-semibold text-dark-text mb-4">Connect</h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target={social.url.startsWith('mailto') ? undefined : '_blank'}
                      rel={social.url.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      className="flex items-center gap-3 text-dark-text2 hover:text-blue-400 transition-colors group"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-400 group-hover:scale-150 transition-transform" />
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <div className="glass-card p-6 bg-blue-500/10 border border-blue-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <p className="font-semibold text-blue-400">Available Now</p>
                </div>
                <p className="text-sm text-dark-text2">
                  I typically respond within 24-48 hours
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slideInRight">
            <div className="glass-card p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark-text mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="RAJAN SM R"
                    className="w-full"
                    disabled={formState.isSubmitting}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-dark-text mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="smrrajan007@gmail.com"
                    className="w-full"
                    disabled={formState.isSubmitting}
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-dark-text mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Discussion"
                    className="w-full"
                    disabled={formState.isSubmitting}
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-dark-text mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or inquiry..."
                    rows="5"
                    className="w-full resize-none"
                    disabled={formState.isSubmitting}
                  />
                </div>

                {/* Error Message */}
                {formState.error && (
                  <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm animate-slideUp">
                    {formState.error}
                  </div>
                )}

                {/* Success Message */}
                {formState.isSuccess && (
                  <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm animate-slideUp">
                    Thanks for reaching out! I'll get back to you soon.
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formState.isSubmitting || formState.isSuccess}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState.isSubmitting ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                    </>
                  )}
                </button>

                {/* Note */}
                <p className="text-xs text-dark-text2 text-center">
                  This form validates your input. To ensure I can respond, please provide valid information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
