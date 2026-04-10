import Layout from "@/components/Layout";
import { studioInfo } from "@/data/studioData";

export default function Contact() {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Page Header */}
        <section className="border-b border-border py-12 md:py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold font-serif leading-tight text-foreground tracking-tight">
              /// CONTACT
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16 border-b border-border">
          <div className="container max-w-4xl mx-auto px-4 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold font-serif">Tell us about your project. Or just say hello.</h2>
              <p className="text-base leading-relaxed text-foreground/90">
                Please tells us a LITTLE bit about your project, the dates you're looking for, and your budget. We'll get back to you ASAP:
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg font-bold">
                <a
                  href="mailto:nationalfreedomstudio@gmail.com"
                  className="hover:text-accent transition-colors underline"
                >
                  {studioInfo.email}
                </a>
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold tracking-widest uppercase">You can also do the social media thing:</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors underline">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors underline">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Studio Info */}
        <section className="py-12 md:py-16 border-b border-border bg-muted">
          <div className="container max-w-4xl mx-auto px-4 space-y-6">
            <h2 className="text-2xl font-bold font-serif">/// The Studio</h2>
            <div className="space-y-3 text-sm">
              <p>
                <strong>National Freedom Studio</strong>
              </p>
              <p>Cottage Grove, Oregon</p>
              <p>20 minutes south of Eugene</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
