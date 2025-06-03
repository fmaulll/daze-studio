import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#e0e0e0] mb-4">Contact Us</h1>
        <p className="text-gray-400">
          Have a question or want to work with us? Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="bg-[#1a1a1a] p-8 rounded-xl">
        <ContactForm />
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-12 h-12 bg-[#9500ff]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#e0e0e0] mb-2">Email</h3>
          <p className="text-gray-400">support@doingabsolutezeroeffort.com</p>
        </div>

        <div className="text-center">
          <div className="w-12 h-12 bg-[#9500ff]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#e0e0e0] mb-2">Location</h3>
          <p className="text-gray-400">Remote-first company</p>
        </div>

        <div className="text-center">
          <div className="w-12 h-12 bg-[#9500ff]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-[#9500ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-[#e0e0e0] mb-2">Business Hours</h3>
          <p className="text-gray-400">Mon - Fri: 9:00 - 17:00<br />Weekend: Closed</p>
        </div>
      </div>
    </div>
  );
} 