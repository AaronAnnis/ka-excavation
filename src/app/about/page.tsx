import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/sections/CTA";

export const metadata = {
  title: "About | K & A Excavation & Wastewater Solutions",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-bg-dark py-20 text-text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-light">
              Who We Are
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-text-white">
              About K & A
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-text-light">
              A local team built on hard work, honest pricing, and doing things
              right the first time.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
            <div className="mt-6 space-y-5 leading-relaxed text-text-body">
              <p>
                K & A Excavation & Wastewater Solutions is a Rockport-based
                company serving Midcoast Maine. We specialize in excavation,
                lawn care, hardscaping, and wastewater system installation and
                maintenance.
              </p>
              <p>
                We started with a simple idea: provide quality work at fair
                prices, and treat every property like it&apos;s our own. Whether
                it&apos;s a new septic system, a gravel driveway, or weekly lawn
                care, we bring the same level of care and professionalism to
                every job.
              </p>
              <p>
                We know Midcoast Maine — the soil, the terrain, the local
                regulations. That local knowledge means your project gets done
                right, on time, and without surprises.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-bg-alt py-20">
          <div className="mx-auto max-w-7xl px-6">
            <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-text-light">
              Our Difference
            </p>
            <h2 className="mt-3 text-center text-3xl font-bold tracking-tight">
              What Sets Us Apart
            </h2>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              <div className="rounded-md border border-border bg-bg p-7">
                <h3 className="text-base font-semibold">Honest Estimates</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  We give you a clear price upfront and stick to it. No hidden
                  fees, no bait-and-switch.
                </p>
              </div>
              <div className="rounded-md border border-border bg-bg p-7">
                <h3 className="text-base font-semibold">One Call Does It All</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  Excavation, landscaping, hardscaping, and wastewater — you
                  don&apos;t need four different contractors.
                </p>
              </div>
              <div className="rounded-md border border-border bg-bg p-7">
                <h3 className="text-base font-semibold">Local Knowledge</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  We understand Maine soil conditions, frost lines, and
                  permitting requirements. That saves you time and money.
                </p>
              </div>
              <div className="rounded-md border border-border bg-bg p-7">
                <h3 className="text-base font-semibold">Responsive & Reliable</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  We answer the phone, show up on time, and finish what we
                  start. Simple as that.
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
