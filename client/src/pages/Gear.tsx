import PageFooter from "@/components/PageFooter";

export default function Gear() {
  const gearCategories = [
    {
      title: "Console",
      items: ["—— 1970's APSI Model 3000 24 channel recording console"]
    },
    {
      title: "Converters",
      items: ["—— Antelope Audio Orion 32+", "—— Lynx Hilo"]
    },
    {
      title: "Monitors",
      items: ["—— Dynaudio Acoustics BM15A", "—— Kali Audio LP-8", "—— PMC Result6"]
    },
    {
      title: "Software",
      items: ["—— Pro Tools 2018", "—— Logic Pro", "—— Samplitude Pro X3", "—— Fab Filter", "—— Sound Toys", "—— Softube", "—— PSP Audioware", "—— DDMF", "—— Waves", "—— iZotope"]
    },
    {
      title: "Preamps",
      items: ["—— Millennia Media x4", "—— Warm Audio WA-412 Discreet Mic pre amp x4", "—— 1970's Heil Sound HM101preamps x8", "—— Mo Talaba Designs Microphone preamp x8", "—— TK Audio Tk-lizer"]
    },
    {
      title: "Dynamics",
      items: ["—— 1960's Spectra Sonics Model 610 Comp Limiter", "—— 1970's DBX 165A", "—— DBX 160A", "—— Warm Audio WA-2A leveling amplifier", "—— Warm Audio WA-76 limiting amplifier x2", "—— Empirical Labs EL8 Distressor x2", "—— Urei Model 7110 limiter/compressor", "—— Rupert Neve Designs Master Buss Processor", "—— Millenia Media TCL-2 Twin Topology 2 Chanel Compressor", "—— TK Audio BC1-S"]
    },
    {
      title: "Effects",
      items: ["—— Roland Space Echo RE-201", "—— AKG BX-10 spring reverb", "—— Benson Studio Tall Bird tube spring reverb", "—— Fostex Model 3180 spring reverb", "—— Yamaha Analog Delay Model E1010", "—— 1970's Univox EC.80A tape echo", "—— 1970's Univox PHZ-1 phaser", "—— DeltaLab Super Time Line digital delay", "—— KT BBD-320 analog chorus", "—— Lexicon LXP-15"]
    },
    {
      title: "Tape Recorders",
      items: ["—— Studer A80 VU MKIV 2\" 16 track recorder", "—— Otari MX5050 1/2\" 8 track recorder", "—— Tascam 122 cassette recorder", "—— Tascam Portastudio 424 mkIII 4 track cassette recorder"]
    },
    {
      title: "Microphones",
      items: ["—— AEA R-84 ribbon microphone", "—— AEA R-92 ribbon microphone x2", "—— Coles 4038 ribbon microphone", "—— Sennheiser MD421-2 vintage(white)dynamic microphone x2", "—— Shure SM7B", "—— Audio-Technica ATM25", "—— Romito Engineering Active Ribbon Microphone x2", "—— Electro-Voice RE20 dynamic microphone", "—— Cascade X-15 stereo ribbon microphone", "—— Sennheiser MD403 dynamic microphone", "—— Electro-Voice 635A dynamic microphone x4", "—— Shure SM57 dynamic microphone x12", "—— Shure SM58 dynamic microphone x6", "—— Warm Audio FET-47 large diaphragm condenser microphone"]
    },
    {
      title: "Instruments",
      items: ["—— Wurlitzer upright piano", "—— Hammond M3 organ with Leslie Model 45 speaker", "—— Roland Juno-60 synthesizer", "—— Mellotron/Chamberlain synthesizer", "—— Arturia Minibrute analog synthesizer", "—— Nord Electro 4D synthesizer", "—— 1970's Optigan optical organ with large disc collection", "—— Korg Trinity Plus synthesizer"]
    },
    {
      title: "Drums",
      items: ["—— C&C Drum Company custom-made drum kit", "—— 1940's Gretsch Defender drum kit", "—— assorted drums, snares, and percussion"]
    },
    {
      title: "Guitars",
      items: ["—— 1959 Gibson ES-125 guitar", "—— 1969 Fender Mustang bass", "—— 1951 Gibson LG-0 guitar", "—— 1984 Fender Stratocaster guitar", "—— 1980's Fender Telecaster guitar", "—— Gibson Thunderbird bass", "—— 1970's Ibanez Violin bass", "—— Assorted 6 and 12 string Danelectro guitars", "—— 1968 Univox HI-Flyer guitar"]
    },
    {
      title: "Amplifiers",
      items: ["—— 1966 Ampeg Jet-12", "—— 1964 Gibson Skylark", "—— 1967 Danelectro DM-25", "—— 1960's Heathkit TA-16", "—— Fender Deluxe DeVille", "—— 1990's Yamaha T50C", "—— Fender Rumble 100", "—— Fender Princeton Chorus"]
    },
    {
      title: "Gadgets",
      items: ["—— Many drum machines, guitar pedals, pocket synths, doohickys, and thingamajigs"]
    },
    {
      title: "Turntables",
      items: ["—— Technics SL 1200 MK2 with Ortophon cartridge x2", "—— Numark DJ Mixer"]
    },
    {
      title: "Taxidermy",
      items: ["—— 1 Crow with bobble head, wings splayed, standing on cow skull", "—— 1 8 point Buck head", "—— 1/2 Buffalo head, right side only", "—— 1 Armadillo in active pose", "—— 1 Squirrel on a log", "—— 1 Weasel on log", "—— 1 Frog playing guitar"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-auto md:min-h-[60vh] flex items-center justify-start bg-black py-6 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6" style={{fontFamily: "'Special Elite', serif"}}>
            /// G3AR
          </h1>
          <p className="text-white text-base md:text-lg font-bold max-w-2xl" style={{fontFamily: "'Inconsolata', monospace"}}>
            We have everything a first-class, modern studio requires——plus a grip of vintage electronics and instruments to make some original noise.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative w-full py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {gearCategories.map((category, idx) => (
              <div key={idx} className="mb-8">
                <h3 className="text-lg md:text-xl font-bold mb-4 font-mono" style={{fontFamily: "'Inconsolata', monospace"}}>
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="text-sm md:text-base text-gray-800" style={{fontFamily: "'Inconsolata', monospace"}}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <p className="text-lg md:text-xl font-bold mb-6" style={{fontFamily: "'Inconsolata', monospace"}}>
              Wanna book? Got questions?
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 border-2 border-green-400 text-green-400 font-bold hover:bg-green-400 hover:text-black transition-colors"
              style={{fontFamily: "'Special Elite', serif"}}
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
