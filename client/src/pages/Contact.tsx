import PageFooter from "@/components/PageFooter";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] md:min-h-[60vh] flex items-center justify-start bg-black py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6" style={{fontFamily: "'Special Elite', serif"}}>
            /// C0NT4CT
          </h1>
          <p className="text-white text-base md:text-lg font-bold max-w-3xl" style={{fontFamily: "'Inconsolata', monospace"}}>
            Please tell us a LITTLE bit about your project, the dates you're looking for, and your budget. We'll get back to you ASAP.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative w-full py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{fontFamily: "'Special Elite', serif"}}>
                Get in Touch
              </h2>
              <p className="text-base md:text-lg text-gray-800 mb-4" style={{fontFamily: "'Inconsolata', monospace"}}>
                Email us at:
              </p>
              <a href="mailto:nationalfreedomstudio@gmail.com" className="text-lg md:text-xl font-bold text-green-600 hover:text-green-700 mb-8" style={{fontFamily: "'Inconsolata', monospace"}}>
                nationalfreedomstudio@gmail.com
              </a>
              
              <p className="text-base md:text-lg text-gray-800 mb-6" style={{fontFamily: "'Inconsolata', monospace"}}>
                You can also find us on social media:
              </p>
              <div className="flex gap-6">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <span className="text-2xl">📷</span> Instagram
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <span className="text-2xl">𝕏</span> Twitter
                </a>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <p className="text-lg md:text-xl font-bold mb-6" style={{fontFamily: "'Inconsolata', monospace"}}>
              Ready to work with us?
            </p>
            <a
              href="mailto:nationalfreedomstudio@gmail.com"
              className="inline-block px-6 py-3 border-2 border-green-400 text-green-400 font-bold hover:bg-green-400 hover:text-black transition-colors"
              style={{fontFamily: "'Special Elite', serif"}}
            >
              SEND EMAIL
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <PageFooter />
    </div>
  );
}
