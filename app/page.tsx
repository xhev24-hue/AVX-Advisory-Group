export default function VAXComplianceWebsite() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <div className="text-2xl font-bold tracking-tight">VAX Compliance Advisory</div>
            <div className="text-sm text-slate-600">Regulatory, AML and compliance support for financial services</div>
          </div>
          <a
            href="mailto:hello@vaxcompliance.com"
            className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
          >
            Contact us
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Independent compliance consultancy
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Practical compliance advice for regulated firms.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              We help firms strengthen AML frameworks, improve regulatory controls, and build proportionate compliance programmes that work in practice.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:hello@vaxcompliance.com"
                className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Book an introduction
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                View services
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <div className="grid gap-4">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">AML and financial crime</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Risk assessments, policies, controls testing, monitoring frameworks and regulatory gap analysis.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Regulatory advisory</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Support on governance, FCA expectations, compliance reviews and remediation planning.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">Practical implementation</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Clear, proportionate solutions designed for fast-moving firms and growing regulated businesses.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight">Services</h2>
              <p className="mt-4 text-slate-600">
                A focused offering for firms that need reliable compliance support without unnecessary complexity.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-lg font-semibold">AML framework reviews</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  End-to-end review of financial crime controls, governance arrangements, policies and procedures.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-lg font-semibold">Regulatory gap analysis</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Practical assessment of current arrangements against applicable regulatory expectations.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="text-lg font-semibold">Policies and advisory support</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Drafting, enhancement and ongoing advisory support for compliance and risk management.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Why firms work with us</h2>
                <ul className="mt-6 space-y-4 text-slate-600">
                  <li>Clear, practical advice tailored to the scale and risk profile of your business.</li>
                  <li>Experience across AML, governance, regulatory remediation and control enhancement.</li>
                  <li>Flexible support for growing firms, established businesses and project-based needs.</li>
                </ul>
              </div>
              <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-sm">
                <h3 className="text-2xl font-semibold">Let’s talk</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  If you need support with financial crime, compliance oversight or regulatory readiness, we would be glad to discuss your requirements.
                </p>
                <div className="mt-8 space-y-3 text-sm text-slate-200">
                  <div>Email: hello@vaxcompliance.com</div>
                  <div>Location: United Kingdom</div>
                </div>
                <a
                  href="mailto:hello@vaxcompliance.com"
                  className="mt-8 inline-block rounded-2xl bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:opacity-90"
                >
                  Send an enquiry
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 VAX Compliance Advisory. All rights reserved.</div>
          <div>This website content is for general information only and does not constitute legal advice.</div>
        </div>
      </footer>
    </div>
  );
}
