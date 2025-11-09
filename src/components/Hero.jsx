import Spline from "@splinetool/react-spline";
import { Rocket, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        {/* 3D scene background (optional) */}
        <Spline
          scene="https://prod.spline.design/vhmC2e1bmYFXZf4T/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs text-violet-700">
              <Star size={14} /> Trusted by 2k+ organizers
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold leading-tight">
              Plan. Promote. Sell. Manage every event in one place.
            </h1>
            <p className="mt-4 text-neutral-600 text-lg">
              Eventora helps you create stunning event pages, sell tickets, and streamline on-site check-in with ease.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-3 text-white font-medium shadow-lg hover:opacity-95"
              >
                <Rocket size={18} /> Get Started
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-lg border border-neutral-300 px-5 py-3 text-neutral-800 hover:bg-neutral-50"
              >
                Explore Features
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-neutral-600">
              <div>
                <span className="font-semibold text-neutral-900">98%</span> satisfaction
              </div>
              <div>
                <span className="font-semibold text-neutral-900">24/7</span> support
              </div>
              <div>
                <span className="font-semibold text-neutral-900">5 min</span> setup
              </div>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur p-4 sm:p-6 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop"
                alt="Event crowd with lights"
                className="rounded-xl object-cover w-full h-[260px] sm:h-[360px]"
              />
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-lg border p-3">
                  <div className="text-2xl font-semibold">12k</div>
                  <div className="text-xs text-neutral-500">Tickets Sold</div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="text-2xl font-semibold">350+</div>
                  <div className="text-xs text-neutral-500">Events Hosted</div>
                </div>
                <div className="rounded-lg border p-3">
                  <div className="text-2xl font-semibold">4.9</div>
                  <div className="text-xs text-neutral-500">Avg. Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
