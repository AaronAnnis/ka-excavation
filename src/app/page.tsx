import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesOverview />
        <section className="bg-bg py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-text-light">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-center text-3xl font-bold tracking-tight">
              Why K & A?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-center leading-relaxed text-text-body">
              We pair modern techniques with decades of local wisdom. Our team
              works alongside the most experienced professionals in Midcoast
              Maine — the people who&apos;ve been solving these problems for
              generations. That means you get fresh energy backed by proven
              knowledge, not guesswork.
            </p>
            <div className="mt-14 grid gap-10 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-border">
                  <svg className="h-5 w-5 text-text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold">Guided by Experience</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  We consult with the local legends — seasoned experts who know
                  Maine soil, terrain, and building codes better than anyone. Their
                  wisdom shapes every job we take on.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-border">
                  <svg className="h-5 w-5 text-text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.4a.6.6 0 01-.27-.51V4.5a.6.6 0 01.6-.6h10.7a.6.6 0 01.6.6v6.76a.6.6 0 01-.27.51l-5.1 3.4a.6.6 0 01-.66 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold">Modern Techniques</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  We stay current with the latest equipment, methods, and best
                  practices so your project is done efficiently and to the
                  highest standard.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-border">
                  <svg className="h-5 w-5 text-text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold">Fair & Honest Pricing</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  No surprises, no hidden fees. We give you a clear quote and
                  stick to it.
                </p>
              </div>
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
