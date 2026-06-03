import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-bg-dark py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-text-white">
          Ready to Get Started?
        </h2>
        <p className="mt-4 text-text-light">
          Whether it&apos;s a new septic system, a patio, or regular lawn
          maintenance — we&apos;re here to help. Reach out for a free estimate.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="rounded-md border border-text-white bg-text-white px-7 py-3 text-sm font-medium text-bg-dark transition-colors hover:bg-transparent hover:text-text-white"
          >
            Request a Quote
          </Link>
          <a
            href="tel:2076916208"
            className="text-sm font-medium text-text-light transition-colors hover:text-text-white"
          >
            Or call (207) 691-6208
          </a>
        </div>
      </div>
    </section>
  );
}
