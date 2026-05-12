const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">

      {/* Hero */}
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Get in Touch 📬</h1>
        <p className="text-gray-500 text-lg">We'd love to hear from you. Reach out anytime!</p>
      </div>

      {/* Cards */}
      <div className="flex gap-6 justify-center flex-wrap">

        <div className="bg-white rounded-2xl shadow-md p-6 w-64 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">📧 Email</h2>
          <p className="text-gray-600 text-sm">support@primebasket.com</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 w-64 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">📞 Phone</h2>
          <p className="text-gray-600 text-sm">+91 98765 43210</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 w-64 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">📍 Location</h2>
          <p className="text-gray-600 text-sm">India</p>
        </div>

        <div className="bg-red-50 border-2 border-red-200 rounded-2xl shadow-md p-6 w-64 text-center">
          <h2 className="text-xl font-bold text-red-500 mb-2">💬 Message</h2>
          <p className="text-gray-600 text-sm">We usually reply within 24 hours 🚀</p>
        </div>

      </div>
    </div>
  );
};

export default Contact;