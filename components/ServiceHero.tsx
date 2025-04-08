export default function ServiceHero() {
    return (
      <section className="bg-gradient-to-r from-blue-800 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Website Creation Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Order your custom website today by contacting us via phone or email
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <a href="tel:+252 63 4836239" className="bg-white text-blue-900 font-bold px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition">
              Call Now: +252 (63) 483-6239
            </a>
            <a href="mailto:eidxamse83@gmail.com" className="border-2 border-white text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white hover:text-blue-900 transition">
              Email Us
            </a>
          </div>
        </div>
      </section>
    );
  }