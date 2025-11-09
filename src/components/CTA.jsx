export default function CTA() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Launch your next event in minutes</h2>
            <p className="mt-3 text-white/90">
              Start free, then scale effortlessly as your audience grows. No hidden fees — just powerful tools.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl bg-white text-neutral-900 p-5">
                <div className="text-xs font-medium text-neutral-500">Starter</div>
                <div className="mt-1 text-3xl font-semibold">Free</div>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>Unlimited events</li>
                  <li>Basic ticketing</li>
                  <li>Community support</li>
                </ul>
              </div>
              <div className="rounded-xl bg-white text-neutral-900 p-5 ring-2 ring-violet-600">
                <div className="text-xs font-medium text-neutral-500">Pro</div>
                <div className="mt-1 text-3xl font-semibold">$39/mo</div>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>Advanced analytics</li>
                  <li>Promo codes & referrals</li>
                  <li>Priority support</li>
                </ul>
              </div>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-neutral-900 hover:bg-white/90"
            >
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
