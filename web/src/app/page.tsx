import Link from "next/link";

const stats = [
  { label: "Lives Impacted", value: "120K+" },
  { label: "Active Donors", value: "48K" },
  { label: "Partner Hospitals", value: "320" },
  { label: "Emergency Match Time", value: "2.4h avg" },
];

const features = [
  {
    title: "Instant Matching",
    description:
      "Smart compatibility checks connect donors with hospitals and patients within minutes.",
    icon: <DropIcon />,
  },
  {
    title: "Heartbeat Alerts",
    description:
      "Real-time notifications highlight nearby critical needs so you can respond quickly.",
    icon: <PulseIcon />,
  },
  {
    title: "Campaign Builder",
    description:
      "Launch community drives with shareable pages, progress trackers, and sponsor spots.",
    icon: <CampaignIcon />,
  },
];

const steps = [
  {
    title: "Create your donor profile",
    description:
      "Share your blood type, availability, and donation history to personalize matches.",
  },
  {
    title: "Get matched with a request",
    description:
      "PulseLink finds the closest compatible patients or hospital drives in real time.",
  },
  {
    title: "Donate and track impact",
    description:
      "Receive guided checklists, reminders, and heartfelt updates after every donation.",
  },
];

const testimonials = [
  {
    quote:
      "PulseLink cut our response time in half. Families get the support they need while the blood is still critical.",
    name: "Dr. Maya Lee",
    role: "Transfusion Director, Hope General",
  },
  {
    quote:
      "I finally know where my donations go. The follow-up stories keep me motivated to keep giving.",
    name: "Aaron Patel",
    role: "O+ Super Donor",
  },
];

function DropIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 32 32"
      className="h-12 w-12 text-brand-red"
      role="img"
    >
      <defs>
        <linearGradient id="drop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fca5a5" />
          <stop offset="100%" stopColor="#dc2626" />
        </linearGradient>
      </defs>
      <path
        fill="url(#drop)"
        d="M16.47 2.66c.26-.37.81-.37 1.07 0 2.94 4.26 9.31 13.42 9.31 18.48 0 5.35-4.29 8.9-9.85 8.9s-9.78-3.55-9.78-8.9c0-5.06 6.37-14.22 9.25-18.48Z"
      />
      <path
        fill="rgba(255,255,255,0.6)"
        d="M12.4 19.7c0-2.98 2.13-5.39 4.76-5.39s4.83 2.41 4.83 5.39c0 2.97-2.18 5.38-4.83 5.38s-4.76-2.41-4.76-5.38Z"
      />
    </svg>
  );
}

function PulseIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 48 48"
      className="h-12 w-12 text-brand-rose"
      role="img"
    >
      <path
        fill="currentColor"
        fillOpacity="0.15"
        d="M8 18c0-6.63 5.37-12 12-12 4.81 0 8.96 2.85 10.9 6.97C32.85 8.85 37 6 41.82 6 48.45 6 54 11.37 54 18c0 17.22-27.1 27.42-27.1 27.42S8 35.22 8 18Z"
        transform="translate(-8 -6)"
      />
      <polyline
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        points="6 26 14 26 18 16 24 36 28 26 34 26 42 26"
      />
    </svg>
  );
}

function CampaignIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 48 48"
      className="h-12 w-12 text-brand-dark"
      role="img"
    >
      <g fill="currentColor" fillRule="evenodd">
        <path
          fillOpacity="0.18"
          d="M6 12c0-3.31 2.69-6 6-6h24c3.31 0 6 2.69 6 6v24c0 3.31-2.69 6-6 6H12c-3.31 0-6-2.69-6-6V12Z"
        />
        <path d="M16 18c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v2h4v4h-4v2c0 1.1-.9 2-2 2h-5l5 7h-6l-5-7h-1c-1.1 0-2-.9-2-2v-2h-4v-4h4v-2Z" />
      </g>
    </svg>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-mesh-soft" />
      <div className="pointer-events-none absolute top-[-15rem] right-[-10rem] h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-brand-light via-white/55 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-14rem] left-[-8rem] h-[24rem] w-[24rem] rounded-full bg-gradient-to-tr from-brand-rose/40 via-transparent to-transparent blur-3xl" />

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-10">
        <Link href="#" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/70 shadow-glow backdrop-blur-sm">
            <svg viewBox="0 0 32 32" className="h-6 w-6 text-brand-red" aria-hidden>
              <path
                fill="currentColor"
                d="M16.38 3.15c.26-.36.82-.36 1.08 0 2.77 3.84 8.8 12.1 8.8 16.9 0 4.86-3.96 8.3-8.99 8.3-5 0-9.93-3.44-9.93-8.3 0-4.8 6.02-13.06 8.8-16.9Z"
              />
            </svg>
          </span>
          <div>
            <p className="text-lg font-semibold tracking-tight">PulseLink</p>
            <p className="text-sm text-foreground/65">Where hope finds a donor</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/75 md:flex">
          <Link href="#mission" className="transition hover:text-brand-dark">
            Mission
          </Link>
          <Link href="#features" className="transition hover:text-brand-dark">
            Features
          </Link>
          <Link href="#steps" className="transition hover:text-brand-dark">
            How it works
          </Link>
          <Link href="#stories" className="transition hover:text-brand-dark">
            Stories
          </Link>
        </nav>
        <div className="hidden md:flex">
          <Link
            href="#get-started"
            className="rounded-full bg-brand-red px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-dark"
          >
            Join as a donor
          </Link>
        </div>
      </header>

      <main className="mx-auto mt-12 flex w-full max-w-6xl flex-col gap-24 px-6 pb-24">
        <section
          id="mission"
          className="relative isolate overflow-hidden rounded-3xl border border-white/40 bg-white/75 px-8 py-14 shadow-glow backdrop-blur-sm md:px-16 md:py-20"
        >
          <div className="absolute inset-y-0 right-0 hidden w-1/2 rounded-3xl bg-gradient-to-l from-brand-light/70 via-transparent to-transparent md:block" />
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-brand-red/25 bg-brand-light px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-dark">
              A lifesaving connector
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-balance sm:text-5xl md:text-6xl">
              Give blood. Spark hope. PulseLink unites donors with those who need them most.
            </h1>
            <p className="mt-6 text-lg text-foreground/75">
              We sync hospitals, community drives, and everyday heroes in one intelligent platform. Donors get precise alerts, coordinators manage campaigns effortlessly, and patients receive reliable matches faster than ever.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#get-started"
                className="flex-1 rounded-full bg-brand-red px-6 py-3 text-center text-base font-semibold text-white shadow-glow transition hover:bg-brand-dark sm:flex-none"
              >
                Become a donor today
              </Link>
              <Link
                href="#features"
                className="rounded-full border border-brand-red/60 px-6 py-3 text-center text-base font-semibold text-brand-red transition hover:border-brand-red hover:text-brand-dark"
              >
                Explore the platform
              </Link>
            </div>
            <dl className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-brand-light/70 bg-white/90 px-5 py-6 shadow-sm backdrop-blur-sm"
                >
                  <dt className="text-xs uppercase tracking-[0.25em] text-brand-dark/80">
                    {stat.label}
                  </dt>
                  <dd className="mt-3 text-2xl font-semibold text-brand-dark">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="features" className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold text-balance sm:text-4xl">
              Designed for rapid response and heartfelt community action.
            </h2>
            <p className="mt-4 text-foreground/80">
              From matching donors to orchestrating large-scale blood drives, PulseLink gives every stakeholder clarity. Our secure tools surface compatible donors in real time, coordinate volunteers, and celebrate the impact together.
            </p>
            <div className="mt-8 space-y-6">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="card-hover flex items-start gap-5 rounded-3xl border border-white/60 bg-white/80 p-6 shadow-sm backdrop-blur-md"
                >
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-dark">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-foreground/70">
                      {feature.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="relative flex flex-col gap-6 rounded-3xl border border-brand-light/70 bg-white/70 p-8 shadow-glow backdrop-blur-lg">
            <span className="w-fit rounded-full bg-brand-light px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-brand-dark">
              Live requests
            </span>
            <div className="space-y-5 text-sm text-foreground/75">
              <div className="rounded-2xl border border-brand-light/80 bg-white/95 p-4 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-[0.4em] text-brand-dark/80">
                  Emergency match
                </p>
                <p className="mt-2 text-lg font-semibold text-brand-dark">
                  AB- donor needed in 3 hours
                </p>
                <p className="mt-1 text-foreground/70">
                  Mercy Medical, 4.6 km away · 2 compatible donors found · courier ready
                </p>
              </div>
              <div className="rounded-2xl border border-brand-light/80 bg-white/95 p-4 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-[0.4em] text-brand-dark/80">
                  Community drive
                </p>
                <p className="mt-2 text-lg font-semibold text-brand-dark">
                  Youth for Life: Campus Blood Rally
                </p>
                <p className="mt-1 text-foreground/70">
                  Saturday · 120 spots left · shuttle pickup available
                </p>
              </div>
              <div className="rounded-2xl border border-brand-light/80 bg-white/95 p-4 shadow-sm">
                <p className="text-xs font-medium uppercase tracking-[0.4em] text-brand-dark/80">
                  Impact story
                </p>
                <p className="mt-2 text-lg font-semibold text-brand-dark">
                  Three donors saved baby Leona this week
                </p>
                <p className="mt-1 text-foreground/70">
                  Personalized thank-you videos and recovery updates delivered to donors.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="steps" className="rounded-3xl border border-white/50 bg-white/70 p-10 shadow-glow backdrop-blur-md">
          <div className="mx-auto flex max-w-3xl flex-col gap-8 text-center">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Three guided steps to your next donation
            </h2>
            <p className="text-foreground/75">
              Our guided checklist smooths out every detail—from screening reminders to follow-up recovery tips—so you can focus on giving.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="group relative overflow-hidden rounded-3xl border border-brand-light/70 bg-white/85 p-6 text-left shadow-sm backdrop-blur"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-light/30 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="relative z-10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-light text-base font-semibold text-brand-dark">
                    {`0${index + 1}`}
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-brand-dark">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="stories"
          className="grid gap-10 md:grid-cols-5 md:items-center"
        >
          <div className="md:col-span-2">
            <h2 className="text-3xl font-semibold text-balance sm:text-4xl">
              Stories that keep the pulse going strong
            </h2>
            <p className="mt-4 text-foreground/75">
              PulseLink bridges donors and patients with transparent updates and heartfelt gratitude. Each story strengthens the community and inspires the next donation.
            </p>
          </div>
          <div className="space-y-6 md:col-span-3">
            {testimonials.map((item) => (
              <figure
                key={item.name}
                className="rounded-3xl border border-white/60 bg-white/85 p-6 shadow-sm backdrop-blur-md"
              >
                <blockquote className="text-lg font-medium text-foreground/85">
                  “{item.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-medium text-brand-dark">
                  {item.name}
                  <span className="ml-2 text-xs uppercase tracking-[0.2em] text-foreground/55">
                    {item.role}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section
          id="get-started"
          className="relative overflow-hidden rounded-3xl border border-brand-light/80 bg-gradient-to-r from-brand-red via-brand-rose to-brand-dark px-8 py-12 text-white shadow-glow"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.28),_transparent_55%)]" />
          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Ready to amplify your impact?
              </h2>
              <p className="mt-3 text-sm text-white/85 sm:text-base">
                Activate your donor profile in under five minutes and receive a personalized welcome kit with your next appointment checklist.
              </p>
            </div>
            <form className="flex w-full max-w-md flex-col gap-4 rounded-2xl bg-white/15 p-6 backdrop-blur">
              <label className="text-sm font-medium text-white/80" htmlFor="email">
                Enter your email to get the welcome guide
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                className="h-12 rounded-full border border-white/60 bg-white/90 px-4 text-sm text-brand-dark placeholder:text-brand-dark/60 focus:border-white focus:outline-none"
              />
              <button
                type="submit"
                className="h-12 rounded-full bg-brand-dark text-sm font-semibold text-white transition hover:bg-[#7f1010]"
              >
                Send me the guide
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/40 bg-white/60">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-foreground/65">
            © {new Date().getFullYear()} PulseLink. Built to keep the gift of blood flowing.
          </p>
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-foreground/50">
            <Link href="#mission" className="hover:text-brand-dark">
              Mission
            </Link>
            <Link href="#features" className="hover:text-brand-dark">
              Platform
            </Link>
            <Link href="#steps" className="hover:text-brand-dark">
              Donate
            </Link>
            <Link href="#get-started" className="hover:text-brand-dark">
              Join
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
