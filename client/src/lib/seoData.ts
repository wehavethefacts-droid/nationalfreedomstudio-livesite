export const seoData = {
  home: {
    title: "National Freedom Studio - Home",
    description: "National Freedom is a landmark recording studio where some of the most original records of the last decade were made. Eclectic, intimate, and equipped with vintage and modern gear.",
    url: "https://nationalfreedomstudio.com/",
  },
  studio: {
    title: "The Studio - National Freedom",
    description: "Explore the recording studio at National Freedom. Eclectic, intimate, and equipped with vintage hunkydory and modern wizbang. The right mix for creating original records.",
    url: "https://nationalfreedomstudio.com/studio",
  },
  gear: {
    title: "Gear - National Freedom Studio",
    description: "Discover the equipment and instruments at National Freedom Studio. From vintage Gibson guitars to modern synthesizers, we have the right tools for your recording needs.",
    url: "https://nationalfreedomstudio.com/gear",
  },
  discography: {
    title: "Discography - National Freedom Studio",
    description: "Explore the records and projects created at National Freedom Studio. A showcase of original music made in our landmark studio.",
    url: "https://nationalfreedomstudio.com/discography",
  },
  mastering: {
    title: "Mastering - National Freedom Studio",
    description: "Professional mastering services at National Freedom Studio. Get your music ready for release with our experienced mastering engineers.",
    url: "https://nationalfreedomstudio.com/mastering",
  },
  about: {
    title: "About - National Freedom Studio",
    description: "Learn about National Freedom Studio, a landmark recording studio where some of the most original records of the last decade were made.",
    url: "https://nationalfreedomstudio.com/about",
  },
  contact: {
    title: "Contact - National Freedom Studio",
    description: "Get in touch with National Freedom Studio. Book a session, ask questions, or learn more about our recording services.",
    url: "https://nationalfreedomstudio.com/contact",
  },
};

export function getSeoTags(page: keyof typeof seoData) {
  const data = seoData[page];
  return {
    title: data.title,
    description: data.description,
    url: data.url,
    ogTitle: data.title,
    ogDescription: data.description,
    twitterTitle: data.title,
    twitterDescription: data.description,
  };
}
