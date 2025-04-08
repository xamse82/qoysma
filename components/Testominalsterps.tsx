'use client';

interface Testimonial {
  name: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Hodan Maxamed",
      company: "Doolshooyinka Hodan",
      content:
        "La shaqeynta kooxdaan waxay ahayd waayo-aragnimo aad u wanaagsan. Si fiican bay u fahmeen baahideyda waxayna keeneen natiijo ka wanaagsan intii aan fileyay. Amarku wuxuu ahaa mid sahlan – hal wicitaan iyo dhowr email!",
      rating: 5,
      image: "/next.svg"
    },
    {
      name: "Cabdirisaaq Cali",
      company: "Bilowga Tiknoolajiyada Muqdisho",
      content:
        "Aniga oo ah aasaasaha shirkad cusub, waxaan u baahnaa websayt xirfad leh si dhaqso ah. Kooxdooda waxay igu hageen talaabo kasta, waxayna dhiseen websayt matalaya astaanta shirkadeena si heer sare ah.",
      rating: 5,
      image: "/globe.svg"
    },
    {
      name: "Sahra Cabdi",
      company: "Tababarka Jirka ee Sahra",
      content:
        "Markii hore waan ka walwalsanaa sameynta websayt, laakiin kooxdaan waxay ka dhigeen arrinta mid aad u fudud. Kadib wicitaankii koowaad, iyagaa wax walba gacanta ku dhigay. Websaytkayga cusub wuxuu ii keenay 3 macaamiil cusub bishii u horeysay!",
      rating: 5,
      image: "/window.svg"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Maxay Macaamiisheennu Ka Yiraahdeen</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Ha naga maqal kaliya – dhegeyso ganacsatada Soomaaliyeed ee aan u dhisnay websaytyadooda.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="mailto:orders@websiteservice.com?subject=Dalbo Websayt" 
            className="inline-block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-8 py-3 rounded-full transition text-lg"
          >
            Nala Soo Xiriir si Aad U Aragto Tusaalayaal
          </a>
        </div>
      </div>
    </section>
  );
}
