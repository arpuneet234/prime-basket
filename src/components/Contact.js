const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Get in Touch 📬</h1>
        <p>We’d love to hear from you. Reach out anytime!</p>
      </div>

      <div className="contact-content">
        <div className="contact-card">
          <h2>📧 Email</h2>
          <p>support@primebasket.com</p>
        </div>

        <div className="contact-card">
          <h2>📞 Phone</h2>
          <p>+91 98765 43210</p>
        </div>

        <div className="contact-card">
          <h2>📍 Location</h2>
          <p>India</p>
        </div>

        <div className="contact-card highlight">
          <h2>💬 Message</h2>
          <p>We usually reply within 24 hours 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;