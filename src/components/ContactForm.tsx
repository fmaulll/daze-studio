'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'your_service_id'; // Replace with your EmailJS service ID
const TEMPLATE_ID = 'your_template_id'; // Replace with your EmailJS template ID
const USER_ID = 'your_public_key'; // Replace with your EmailJS public key

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!
      );
      setStatus({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      {status.type && (
        <div 
          className={`p-4 rounded-md ${
            status.type === 'success' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}
        >
          {status.message}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[#e0e0e0]">
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          className="mt-1 block w-full px-3 py-2 bg-[#1a1a1a] border border-gray-800 rounded-md text-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#9500ff]"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          disabled={isLoading}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#e0e0e0]">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 block w-full px-3 py-2 bg-[#1a1a1a] border border-gray-800 rounded-md text-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#9500ff]"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          disabled={isLoading}
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-[#e0e0e0]">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="mt-1 block w-full px-3 py-2 bg-[#1a1a1a] border border-gray-800 rounded-md text-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#9500ff]"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          disabled={isLoading}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#e0e0e0]">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          className="mt-1 block w-full px-3 py-2 bg-[#1a1a1a] border border-gray-800 rounded-md text-[#e0e0e0] focus:outline-none focus:ring-2 focus:ring-[#9500ff]"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          disabled={isLoading}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
          isLoading 
            ? 'bg-[#6b0bb8] cursor-not-allowed' 
            : 'bg-[#9500ff] hover:bg-[#7a00d1]'
        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9500ff]`}
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm; 