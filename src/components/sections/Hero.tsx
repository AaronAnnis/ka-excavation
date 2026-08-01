import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-bg py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-12 md:flex-row md:justify-between">
          <div className="max-w-xl text-center md:text-left">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-light">
              Midcoast Maine
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-text-dark md:text-5xl lg:text-6xl">
              From the Ground Up.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-text-body">
              Excavation, septic systems, hardscaping, and lawn care — one crew
              for everything your property needs. Serving Rockport, Camden,
              Rockland, and surrounding towns.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <Link
                href="/contact"
                className="rounded-md bg-text-dark px-7 py-3 text-center text-sm font-medium text-text-white transition-colors hover:bg-primary-light"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:2072557707"
                className="rounded-md border border-border px-7 py-3 text-center text-sm font-medium text-text-dark transition-colors hover:border-text-dark"
              >
                (207) 255-7707
              </a>
            </div>
          </div>
          <div className="w-80 shrink-0 md:w-[500px]">
            <Image
              src="/images/logo-official.png"
              alt="K & A Excavation & Wastewater Solutions"
              width={800}
              height={600}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
