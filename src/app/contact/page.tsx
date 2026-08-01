import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata = {
  title: "Contact | K & A Excavation & Wastewater Solutions",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-bg-dark py-20 text-text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-light">
              Let&apos;s Talk
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-text-white">
              Get in Touch
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-text-light">
              Have a project in mind? Send us a message or give us a call for a
              free estimate.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-14 md:grid-cols-5">
              <div className="md:col-span-3">
                <h2 className="text-2xl font-bold tracking-tight">
                  Send Us a Message
                </h2>
                <p className="mt-2 mb-8 text-text-light">
                  Fill out the form and we&apos;ll get back to you within 24 hours.
                </p>
                <ContactForm />
              </div>

              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold tracking-tight">
                  Contact Info
                </h2>
                <div className="mt-8 space-y-8">
                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-widest text-text-light">
                      Phone
                    </h3>
                    <a
                      href="tel:2072557707"
                      className="mt-1.5 block text-lg text-text-dark hover:text-accent"
                    >
                      (207) 255-7707
                    </a>
                  </div>
                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-widest text-text-light">
                      Email
                    </h3>
                    <a
                      href="mailto:solutions@kaexcavation.com"
                      className="mt-1.5 block text-text-dark hover:text-accent"
                    >
                      solutions@kaexcavation.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-widest text-text-light">
                      Location
                    </h3>
                    <p className="mt-1.5 text-text-body">Rockport, Maine</p>
                    <p className="mt-1 text-sm text-text-light">
                      Serving Camden, Rockland, Thomaston, Belfast, and all of
                      Midcoast Maine
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-widest text-text-light">
                      Hours
                    </h3>
                    <p className="mt-1.5 text-text-body">
                      Monday &ndash; Saturday: 7:00 AM &ndash; 5:00 PM
                    </p>
                    <p className="mt-1 text-sm text-text-light">
                      Emergency services available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
