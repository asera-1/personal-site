import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'

const ops = [
  {
    n: '01',
    t: 'Product and roadmap',
    d: 'I turn learning science research into a roadmap and ship it across iOS, Android, and web.',
  },
  {
    n: '02',
    t: 'Institutional sales',
    d: 'I closed our first university contract and I am building a pipeline through language centres.',
  },
  {
    n: '03',
    t: 'Fundraising and grants',
    d: 'I work through non dilutive German startup funding and early investor conversations.',
  },
  {
    n: '04',
    t: 'Go to market and brand',
    d: 'I handle positioning, the brand system, and the content that explains a new product category.',
  },
  {
    n: '05',
    t: 'Team and execution',
    d: 'I lead a small team across research, engineering, and growth, and I still ship.',
  },
  {
    n: '06',
    t: 'Applied machine learning',
    d: 'I build the models myself, so strategy and engineering stay close together.',
  },
]

export default function Home({ posts }) {
  const recent = posts.slice(0, 3)
  return (
    <div className="py-8">
      <section className="grid items-center gap-8 py-10 md:grid-cols-[1fr_160px]">
        <div>
          <p className="font-mono text-xs tracking-widest text-[#34C7EC] uppercase">
            Founder, operator, applied AI
          </p>
          <h1 className="mt-4 text-4xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl">
            I build AI products, and{' '}
            <span
              style={{
                background: 'linear-gradient(100deg,#2D7FE8,#34C7EC)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              the company around them
            </span>
            .
          </h1>
          <p className="mt-5 max-w-xl text-lg text-[#9FB1D0]">
            I founded Flowent, an AI speaking practice platform for universities. I work across the
            whole business: product and engineering, institutional sales, fundraising, and go to
            market. So far I have taken it from an idea to its first signed institutional contract.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#1B2E54] bg-[#34C7EC]/10 px-4 py-2 text-sm text-white">
            <span className="h-2 w-2 rounded-full bg-[#34C7EC]" />
            First institutional contract, Universität Osnabrück Language Centre
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="https://getflowent.com"
              className="rounded-lg px-5 py-2.5 text-sm font-semibold text-[#06122b]"
              style={{ background: 'linear-gradient(100deg,#2D7FE8,#34C7EC)' }}
            >
              View Flowent
            </Link>
            <Link
              href={siteMetadata.linkedin || '#'}
              className="rounded-lg border border-[#1B2E54] px-5 py-2.5 text-sm text-white hover:border-[#34C7EC]"
            >
              LinkedIn
            </Link>
            <Link
              href={`mailto:${siteMetadata.email}`}
              className="rounded-lg border border-[#1B2E54] px-5 py-2.5 text-sm text-white hover:border-[#34C7EC]"
            >
              Email
            </Link>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/static/images/avatar.png"
          alt="Abdalla Sera"
          className="mx-auto h-36 w-36 rounded-full object-cover"
          style={{
            border: '2px solid rgba(52,199,236,.5)',
            boxShadow: '0 0 0 6px rgba(52,199,236,.08), 0 0 38px rgba(52,199,236,.18)',
          }}
        />
      </section>

      <section className="border-t border-[#16294f] py-12">
        <p className="font-mono text-xs tracking-widest text-[#5C6E92] uppercase">How I operate</p>
        <h2 className="mt-2 text-2xl font-extrabold text-white">
          Building the company is the work.
        </h2>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ops.map((o) => (
            <div key={o.n} className="rounded-2xl border border-[#16294f] bg-[#0E2147]/40 p-5">
              <div className="font-mono text-xs text-[#34C7EC]">{o.n}</div>
              <h3 className="mt-2 font-semibold text-white">{o.t}</h3>
              <p className="mt-1.5 text-sm text-[#9FB1D0]">{o.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#16294f] py-12">
        <p className="font-mono text-xs tracking-widest text-[#5C6E92] uppercase">Selected work</p>
        <h2 className="mt-2 text-2xl font-extrabold text-white">Ventures and engineering.</h2>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {projectsData.map((p) => {
            const inner = (
              <div className="h-full rounded-2xl border border-[#16294f] bg-[#0E2147]/40 p-6 transition hover:border-[#34C7EC]/60">
                <div className="font-mono text-[11px] tracking-wider text-[#34C7EC] uppercase">
                  {p.tag}
                </div>
                <h3 className="mt-2.5 text-lg font-extrabold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#9FB1D0]">{p.description}</p>
                {p.href && (
                  <div className="mt-3 font-mono text-xs text-[#34C7EC]">Visit the project</div>
                )}
              </div>
            )
            return p.href ? (
              <Link key={p.title} href={p.href} className="block">
                {inner}
              </Link>
            ) : (
              <div key={p.title}>{inner}</div>
            )
          })}
        </div>
      </section>

      <section className="border-t border-[#16294f] py-12">
        <p className="font-mono text-xs tracking-widest text-[#5C6E92] uppercase">About</p>
        <h2 className="mt-2 text-2xl font-extrabold text-white">
          Technical founder, business first.
        </h2>
        <div className="mt-4 max-w-2xl space-y-4 text-[#9FB1D0]">
          <p>
            I am a founder who works across the whole business: product, growth, sales, and the
            technology itself. I care about products that institutions actually adopt, not demos.
          </p>
          <p>
            I am an MSc Cognitive Science student at Universität Osnabrück, focused on machine
            learning and AI, and I hold a B.Eng. in Computer and Systems Engineering from Al-Azhar
            University in Cairo. Before Flowent I worked as a Data Steward at Veeva Systems.
          </p>
        </div>
      </section>

      {recent.length > 0 && (
        <section className="border-t border-[#16294f] py-12">
          <p className="font-mono text-xs tracking-widest text-[#5C6E92] uppercase">Writing</p>
          <ul className="mt-5 space-y-4">
            {recent.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4"
                >
                  <span className="font-mono text-xs text-[#5C6E92]">{post.date.slice(0, 10)}</span>
                  <span className="font-semibold text-white group-hover:text-[#34C7EC]">
                    {post.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
