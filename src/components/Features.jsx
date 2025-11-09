import { Ticket, QrCode, Megaphone, LineChart } from "lucide-react";

const features = [
  {
    icon: Ticket,
    title: "Ticketing & Registration",
    desc: "Create tiers, promo codes, and seamless checkout with multiple payment options.",
  },
  {
    icon: QrCode,
    title: "On-site Check-in",
    desc: "Fast QR scanning and real-time attendee sync across devices.",
  },
  {
    icon: Megaphone,
    title: "Marketing Tools",
    desc: "Email campaigns, social share links, and referral tracking built-in.",
  },
  {
    icon: LineChart,
    title: "Analytics & Insights",
    desc: "Track sales, traffic sources, and engagement to optimize your events.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold">Everything you need to run world-class events</h2>
          <p className="mt-3 text-neutral-600">Tools that save hours and wow your attendees from first click to final encore.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-neutral-200 p-6 hover:shadow-sm transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-violet-600/10 text-violet-700 grid place-items-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
