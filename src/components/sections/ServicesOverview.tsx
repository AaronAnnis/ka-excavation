import Link from "next/link";
import { services } from "@/data/services";

export function ServicesOverview() {
  return (
    <section className="bg-bg-alt py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-text-light">
          What We Do
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold tracking-tight">
          Full-Service Property Solutions
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-text-light">
          From breaking ground to finishing touches — we handle the full scope
          of your outdoor project.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.slug}
              className="rounded-md border border-border bg-bg p-7 transition-all hover:border-text-light"
            >
              <h3 className="text-base font-semibold text-text-dark">{service.title}</h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-text-light">
                {service.tagline}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-text-body">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="rounded-md border border-text-dark bg-text-dark px-7 py-3 text-sm font-medium text-text-white transition-colors hover:bg-transparent hover:text-text-dark"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
