import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/sections/CTA";
import { services } from "@/data/services";

export const metadata = {
  title: "Services | K & A Excavation & Wastewater Solutions",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-bg-dark py-20 text-text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-light">
              What We Offer
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-text-white">
              Our Services
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-text-light">
              Full-service excavation, landscaping, hardscaping, and wastewater
              solutions for residential and light commercial properties.
            </p>
          </div>
        </section>

        {services.map((service, i) => (
          <section
            key={service.slug}
            className={`py-20 ${i % 2 === 0 ? "bg-bg" : "bg-bg-alt"}`}
          >
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid items-center gap-14 md:grid-cols-2">
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-light">
                    {service.tagline}
                  </p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-text-body">{service.description}</p>
                  <ul className="mt-6 space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-text-body">
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-text-dark"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`flex h-72 items-center justify-center rounded-md border border-border bg-bg-alt ${
                    i % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <p className="text-sm text-text-light">Photo coming soon</p>
                </div>
              </div>
            </div>
          </section>
        ))}

        <CTA />
      </main>
      <Footer />
    </>
  );
}
