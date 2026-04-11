import PageFooter from "@/components/PageFooter";
import { Link } from "wouter";

export default function Mastering() {
  const clients = [
    { name: "Nathaniel Rateliff", name2: "Richard Swift" },
    { name: "Pure Bathing Culture", name2: "David Bazan" },
    { name: "Nicole Atkins", name2: "The Walkmen" },
    { name: "Hamilton Leithauser", name2: "Walter Martin" },
    { name: "Unwed Sailor", name2: "The Lassie Foundation" },
    { name: "Night Dreamer", name2: "Pedro the Lion" },
    { name: "Benny Yurco", name2: "Gardens & Villa" },
    { name: "Fug Yep Soundation", name2: "" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-auto md:min-h-[60vh] flex items-center justify-start bg-black py-6 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6" style={{fontFamily: "'Special Elite', serif"}}>
            /// MASTERING
          </h1>
          <p className="text-white text-base md:text-lg font-bold max-w-2xl" style={{fontFamily: "'Inconsolata', monospace"}}>
            National Freedom offers mastering services with a bunch of options for deliverables.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative w-full py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          {/* Info Section */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{fontFamily: "'Special Elite', serif"}}>
              /// INFO & ETC.
            </h2>
            
            <div className="space-y-4 text-gray-900 font-bold" style={{fontFamily: "'Inconsolata', monospace"}}>
              <p>
                Mastering engineer <span className="font-bold">Christopher Colbert</span> <span style={{color: '#d97a9a'}}>(who's also the house engineer)</span> brings his 30 years of biz experience and seasoned ears to making your masters sound amazing across the frickin' myriad platforms we got these days. Digital or tape or both, we can do it.
              </p>
              
              <p>He's also quite the egalitarian.</p>
              
              <p>
                <span className="font-bold">Mastering is $100/per song</span><br />
                (no matter who you are).
              </p>
              
              <p>Power to the people.</p>
            </div>
          </div>

          {/* Clients Section */}
          <div className="mb-12 bg-gray-100 p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{fontFamily: "'Special Elite', serif"}}>
              /// A SELECTION OF CLIENTS
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {clients.map((client, idx) => (
                <div key={idx} className="flex justify-between">
                  <span style={{fontFamily: "'Inconsolata', monospace"}}>{client.name}</span>
                  {client.name2 && <span style={{fontFamily: "'Inconsolata', monospace"}}>{client.name2}</span>}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <p className="text-lg md:text-xl font-bold mb-6" style={{fontFamily: "'Inconsolata', monospace"}}>
              Wanna book? Got questions?
            </p>
            <a
              href="mailto:contact@nationalfreedom.studio"
              className="inline-block px-8 py-3 bg-green-500 text-black font-bold hover:bg-green-600 transition-colors"
              style={{fontFamily: "'Inconsolata', monospace"}}
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
