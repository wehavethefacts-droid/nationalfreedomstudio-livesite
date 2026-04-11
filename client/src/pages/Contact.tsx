import PageFooter from "@/components/PageFooter";

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Overlay Content */}
      <section className="relative w-full min-h-[auto] md:min-h-[auto] flex items-center justify-start bg-black overflow-hidden py-4 md:py-6">
        {/* Black Background */}
        <div className="absolute inset-0 w-full h-full bg-black z-0" />
        
        {/* White Grainy Dots Overlay */}
        <div
          className="absolute inset-0 w-full h-full z-5"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/bg-noise_e533a6c1.png')",
            backgroundSize: 'auto',
            backgroundRepeat: 'repeat',
            opacity: 0.3,
          }}
        />

        {/* Content Overlay */}
        <div className="relative z-10 px-4 md:px-8 py-4 md:py-6 max-w-3xl ml-2 md:ml-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{fontFamily: "'Special Elite', serif", letterSpacing: '0.02em'}}>
            /// C0NT4CT
          </h1>
          <p className="text-white text-base md:text-lg font-bold leading-relaxed" style={{fontFamily: "'Inconsolata', monospace"}}>
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
