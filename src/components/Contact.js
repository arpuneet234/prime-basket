const contactItems = [
  { title: "Email", value: "support@primebasket.com" },
  { title: "Phone", value: "+91 98765 43210" },
  { title: "Hours", value: "Mon–Sat, 9:00 AM – 6:00 PM IST" },
  { title: "Head office", value: "India" },
];

const Contact = () => {
  return (
    <div className="pb-page py-10 sm:py-14">
      <div className="pb-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="pb-section-title">Contact us</h1>
          <p className="pb-section-subtitle mt-3">
            Our support team typically responds within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {contactItems.map((item, index) => (
            <div
              key={item.title}
              className={`pb-card p-6 ${
                index === 0 ? "ring-1 ring-brand-200 dark:ring-brand-800" : ""
              }`}
            >
              <h2 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wide mb-2">
                {item.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
