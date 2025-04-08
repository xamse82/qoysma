export default function ContactOptions() {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How to Order Your Website</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-600 text-5xl mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Call Our Number</h3>
              <p className="text-gray-600 mb-4">
                Speak directly with our team to discuss your website needs
              </p>
              <a href="tel:+1234567890" className="text-blue-600 font-semibold hover:underline">
                +252 (063) 483-6239
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-600 text-5xl mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">Send Us an Email</h3>
              <p className="text-gray-600 mb-4">
                Describe your website requirements and we'll get back to you
              </p>
              <a href="mailto:orders@websiteservice.com" className="text-blue-600 font-semibold hover:underline">
                eidxamse83@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }