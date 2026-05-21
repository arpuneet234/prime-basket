import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  render() {
    const cards = [
      {
        title: "Our mission",
        text: "Prime Basket makes everyday shopping simple — quality groceries, personal care, and home essentials delivered with transparency and care.",
      },
      {
        title: "Technology",
        items: [
          "React 19 with modern hooks",
          "Redux Toolkit for cart state",
          "Tailwind CSS design system",
          "REST APIs with quality filters",
        ],
      },
      {
        title: "Why shop with us",
        items: [
          "Curated, highly rated products",
          "Category filters and smart search",
          "Secure PrimePay checkout",
          "Responsive on every device",
        ],
      },
    ];

    return (
      <div className="pb-page py-10 sm:py-14">
        <div className="pb-container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="pb-section-title">About Prime Basket</h1>
            <p className="pb-section-subtitle mt-3">
              A modern e-commerce experience built to industry standards — fast, trustworthy, and easy to use.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card) => (
              <div key={card.title} className="pb-card p-6 sm:p-8">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {card.title}
                </h2>
                {card.text ? (
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {card.text}
                  </p>
                ) : (
                  <ul className="text-slate-600 dark:text-slate-300 text-sm space-y-2">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-600 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <UserClass name={"Puneet (Class Based)"} />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
