import PageFooter from "@/components/PageFooter";

export default function Discography() {
  const discography = [
    {
      artist: "Richard Swift",
      albums: [
        { title: "The Hex", year: "2018", url: "#" },
        { title: "The Atlantic Ocean", year: "2009", url: "#" },
        { title: "Walt Wolfman", year: "2011", url: "#" },
        { title: "Other People's Songs", year: "2010", note: "with Damien Jurado", url: "#" },
        { title: "As Onasis", year: "2008", url: "#" },
        { title: "Ground Trouble Jaw", year: "2008", url: "#" }
      ]
    },
    {
      artist: "Nathaniel Rateliff & the Night Sweats",
      albums: [
        { title: "Nathaniel Rateliff & the Night Sweats", year: "2015", url: "#" },
        { title: "Tearing at the Seams", year: "2018", url: "#" },
        { title: "And It's Still Alright", year: "2020", note: "as Nathaniel Rateliff", url: "#" }
      ]
    },
    {
      artist: "Foxygen",
      albums: [
        { title: "Take The Kids Off Broadway", year: "2011", url: "#" },
        { title: "We Are The 21st Century Ambassadors Of Peace & Magic", year: "2013", url: "#" }
      ]
    },
    {
      artist: "Lucius",
      albums: [
        { title: "Christmas Time Is Here", year: "2018", url: "#" }
      ]
    },
    {
      artist: "Pure Bathing Culture",
      albums: [
        { title: "The Chalice", year: "2021", url: "#" },
        { title: "Moon Tides", year: "2013", url: "#" }
      ]
    },
    {
      artist: "Damien Jurado",
      albums: [
        { title: "Saint Bartlett", year: "2010", url: "#" },
        { title: "Maraqopa", year: "2012", url: "#" },
        { title: "Brothers and Sisters of the Eternal Son", year: "2014", url: "#" },
        { title: "Visions of Us on the Land", year: "2015", url: "#" }
      ]
    },
    {
      artist: "Sharon Van Etten",
      albums: [
        { title: "Are We There", year: "2014", note: "Mixed at NF", url: "#" }
      ]
    },
    {
      artist: "Guster",
      albums: [
        { title: "Evermotion", year: "2015", url: "#" }
      ]
    },
    {
      artist: "Kevin Morby",
      albums: [
        { title: "City Music", year: "2017", url: "#" }
      ]
    },
    {
      artist: "Cold War Kids",
      albums: [
        { title: "Something Is Not Right With Me", year: "2008", url: "#" }
      ]
    },
    {
      artist: "Tennis",
      albums: [
        { title: "Ritual in Repeat", year: "2014", url: "#" },
        { title: "Small Sound", year: "2013", url: "#" }
      ]
    },
    {
      artist: "The Mynabirds",
      albums: [
        { title: "What We Lose in the Fire We Gain in the Flood", year: "2010", url: "#" },
        { title: "Generals", year: "2012", url: "#" }
      ]
    },
    {
      artist: "Gardens & Villa",
      albums: [
        { title: "Gardens & Villa", year: "2011", url: "#" },
        { title: "Gordon Von Zilla Presents", year: "2020", url: "#" }
      ]
    },
    {
      artist: "Jessie Baylin",
      albums: [
        { title: "Little Spark", year: "2012", url: "#" },
        { title: "Strawberry Wind", year: "2018", url: "#" }
      ]
    },
    {
      artist: "Laetitia Sadier",
      albums: [
        { title: "The Trip", year: "2010", url: "#" }
      ]
    },
    {
      artist: "Tijuana Panthers",
      albums: [
        { title: "Wayne Interest", year: "2014", url: "#" }
      ]
    },
    {
      artist: "Marco Benevento",
      albums: [
        { title: "Swift", year: "2014", url: "#" }
      ]
    },
    {
      artist: "Born Ruffians",
      albums: [
        { title: "Uncle, Duke & the Chief", year: "2018", url: "#" }
      ]
    },
    {
      artist: "Lonnie Holley",
      albums: [
        { title: "National Freedom", year: "2020", url: "#" }
      ]
    },
    {
      artist: "David Bazan",
      albums: [
        { title: "Care", year: "2017", url: "#" }
      ]
    },
    {
      artist: "Wake Owl",
      albums: [
        { title: "The Private World of Paradise", year: "2017", url: "#" }
      ]
    },
    {
      artist: "Tahiti 80",
      albums: [
        { title: "Ball Room", year: "2014", url: "#" }
      ]
    },
    {
      artist: "The Grahams",
      albums: [
        { title: "Kids Like Us", year: "2020", url: "#" }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-auto md:min-h-[60vh] flex items-center justify-start bg-black py-6 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6" style={{fontFamily: "'Special Elite', serif"}}>
            /// DISCOGRAPHY
          </h1>
          <p className="text-white text-base md:text-lg font-bold max-w-2xl" style={{fontFamily: "'Inconsolata', monospace"}}>
            These projects were recorded (or mostly recorded or maybe mixed) at National Freedom.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative w-full py-8 md:py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-12">
          <div className="space-y-8">
            {discography.map((artist, idx) => (
              <div key={idx} className="border-b border-gray-300 pb-6 last:border-b-0">
                <h3 className="text-lg md:text-xl font-bold mb-2" style={{fontFamily: "'Special Elite', serif"}}>
                  {artist.artist}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {artist.albums.map((album, albumIdx) => (
                    <div key={albumIdx} className="flex items-start">
                      <span className="text-gray-400 mr-3 text-sm" style={{fontFamily: "'Inconsolata', monospace"}}>——</span>
                      <div className="flex-1">
                        <p className="font-bold text-gray-900 text-sm" style={{fontFamily: "'Inconsolata', monospace"}}>
                          {album.title}
                        </p>
                        <p className="text-xs text-gray-600 mt-1" style={{fontFamily: "'Inconsolata', monospace"}}>
                          <span style={{color: '#00FF00'}}>///</span>{album.year}
                          {album.note && <span className="ml-2 italic">{album.note}</span>}
                          <a href={album.url} className="ml-3 text-green-500 hover:text-green-600 font-bold">
                            Listen
                          </a>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
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
