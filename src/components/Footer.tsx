import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-dark text-text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-text-white">
              K & A Excavation
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-text-light">
              Professional excavation, lawn care, hardscaping, and wastewater
              solutions in Midcoast Maine.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-text-light">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/services" className="text-gray-400 transition-colors hover:text-text-white">
                  Excavation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 transition-colors hover:text-text-white">
                  Lawn Care
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 transition-colors hover:text-text-white">
                  Hardscaping
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 transition-colors hover:text-text-white">
                  Wastewater Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-widest text-text-light">
              Contact
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="tel:2076916208" className="text-gray-400 transition-colors hover:text-text-white">
                  (207) 691-6208
                </a>
              </li>
              <li>
                <a
                  href="mailto:solutions@kaexcavation.com"
                  className="text-gray-400 transition-colors hover:text-text-white"
                >
                  solutions@kaexcavation.com
                </a>
              </li>
              <li className="text-gray-400">Rockport, Maine</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-gray-800 pt-6 text-center text-xs text-gray-600">
          &copy; {new Date().getFullYear()} K & A Excavation & Wastewater
          Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
