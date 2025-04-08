'use client';

interface Plan {
  name: string;
  price: string;
  features: string[];
  contactText: string;
}

export default function PricingPlans() {
  const plans: Plan[] = [
    {
      name: "Basic Website",
      price: "$99",
      features: [
        "Up to 3 Pages",
        "Mobile-Friendly",
        "Contact Form",
        "WhatsApp Button"
      ],
      contactText: "Order Basic Package"
    },
    {
      name: "Standard Website",
      price: "$199",
      features: [
        "Up to 6 Pages",
        "Modern Design",
        "Basic SEO Setup",
        "Photo Gallery or Menu"
      ],
      contactText: "Order Standard Package"
    },
    {
      name: "Pro Website",
      price: "$299",
      features: [
        "10+ Pages",
        "Custom Design",
        "Advanced SEO",
        "Online Booking / E-commerce"
      ],
      contactText: "Order Pro Package"
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Website Packages for Somali Businesses</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="p-6 border-b">
                <h3 className="text-2xl font-bold text-center">{plan.name}</h3>
                <div className="text-4xl text-blue-600 font-bold text-center my-4">{plan.price}</div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:orders@websiteservice.com?subject=Order ${encodeURIComponent(plan.name)} Package`}
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold py-3 px-4 rounded transition"
                >
                  {plan.contactText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
