import PageFooter from "@/components/PageFooter";

export default function Contact() {
  const noiseUrl = "https://d2xsxph8kpxj0f.cloudfront.net/310519663540620790/M6e5W9g9dsjkZnMVL2zJJv/bg-noise_e533a6c1.png";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[auto] md:min-h-[auto] flex items-center justify-start bg-black overflow-hidden py-4 md:py-6">
        <div className="absolute inset-0 w-full h-full bg-black z-0" />
        <div
          className="absolute inset-0 w-full h-full z-5"
          style={{
            backgroundImage: `url('${noiseUrl}')`,
            backgroundSize: 'auto',
            backgroundRepeat: 'repeat',
            opacity: 0.3,
          }}
        />
        <div className="relative z-10 px-4 md:px-8 py-4 md:py-6 max-w-3xl ml-2 md:ml-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{fontFamily: "'Special Elite', serif", letterSpacing: '0.02em'}}>
            /// C0NT4CT
          </h1>
          <p className="text-white text-base md:text-lg font-bold leading-relaxed" style={{fontFamily: "'Inconsolata', monospace"}}>
            Tell us about your project. Or just say hello.
          </p>
        </div>
      </section>

      {/* Content Section with Distressed Background */}
      <section
        className="relative w-full py-16 md:py-20"
        style={{
          backgroundImage: `url('${noiseUrl}')`,
          backgroundColor: '#f9f9f9',
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="space-y-8 mb-12">
            <div>
              <p className="text-base md:text-lg text-gray-900 mb-6" style={{fontFamily: "'Inconsolata', monospace"}}>
                Please tells us a LITTLE bit about your project, the dates you're looking for, and your budget. We'll get back to you ASAP:
              </p>
              
              <a href="mailto:nationalfreedomstudio@gmail.com" className="text-lg md:text-xl font-bold text-pink-400 hover:text-pink-500 mb-8 inline-block" style={{fontFamily: "'Inconsolata', monospace", letterSpacing: '0.05em'}}>
                {'>>'} nationalfreedomstudio@gmail.com
              </a>
              
              <p className="text-base md:text-lg text-gray-900 mb-6 mt-8" style={{fontFamily: "'Inconsolata', monospace"}}>
                You can also do the social media thing:
              </p>
              
              <div className="flex gap-8">
                <a href="https://instagram.com/nationalfreedomstudio" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 font-bold" style={{fontFamily: "'Inconsolata', monospace"}}>
                  /// Instagram
                </a>
                <a href="https://twitter.com/NF_Studio" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 font-bold" style={{fontFamily: "'Inconsolata', monospace"}}>
                  /// Twitter
                </a>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center pb-4 md:pb-6">
            <p className="text-lg md:text-3xl font-bold mb-6" style={{fontFamily: "'Special Elite', serif"}}>
              Wanna book? Got questions?
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 border-2 border-pink-400 text-pink-400 font-bold hover:bg-pink-400 hover:text-black transition-colors text-sm md:text-base"
              style={{fontFamily: "'Inconsolata', monospace", letterSpacing: '0.1em'}}
            >
              CONTACT
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <PageFooter />
    </div>
  );
}
