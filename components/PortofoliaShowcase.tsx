import Image from 'next/image';

interface Website {
  title: string;
  category: string;
  image: string;
  features: string[];
  stats: string;
}

export default function PortfolioShowcase() {
  const websites: Website[] = [
    {
      title: "Luxe Interiors",
      category: "E-commerce",
      image: "/first.jpg",
      features: [
        "3D product viewer",
        "AR room visualization",
        "1-click checkout",
        "95% mobile conversion rate",
      ],
      stats: "↑ 220% revenue in 6 months",
    },
    {
      title: "UrbanFit Gym",
      category: "Membership",
      image: "/second.jpg",
      features: [
        "Class booking system",
        "Member progress tracking",
        "Integrated payment",
        "Custom workout planner",
      ],
      stats: "1,200+ active members",
    },
    {
      title: "Chef's Table",
      category: "Restaurant",
      image: "/third.jpg",
      features: [
        "Online reservations",
        "Digital menu with allergens",
        "Waitlist management",
        "4.9★ Google rating",
      ],
      stats: "85% online bookings",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Real Results, Real Businesses</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Websites we've built that actually drive growth, not just look pretty
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {websites.map((website, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-60">
                <Image
                  src={website.image}
                  alt={website.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-2">
                    {website.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{website.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-gray-600">{website.stats}</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {website.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
                  View Case Study
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Ready for Your Success Story?</h3>
          <p className="text-gray-600 mb-6 text-lg">
            Let's build a website that works as hard as you do
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+252634836239"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
            >
              Call Now: +252 634 836 239
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
