import Head from 'next/head'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { getProject, projects } from '@/lib/projects'

function BackLink({ className = '', children }) {
  return (
    <Link
      href="/work"
      className={`inline-flex min-h-[44px] items-center gap-2 text-[15px] font-medium text-charcoal transition hover:text-carbon dark:text-dust dark:hover:text-floral ${className}`}
    >
      <span aria-hidden="true">←</span>
      {children}
    </Link>
  )
}

function DetailSection({ title, children }) {
  return (
    <section className="flex flex-wrap gap-x-12 gap-y-4 border-t border-dust py-10 dark:border-charcoal">
      <h2 className="flex flex-[0_0_180px] items-center gap-2.5 self-start text-sm font-medium uppercase tracking-[0.08em] text-charcoal dark:text-dust">
        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent-500" />
        {title}
      </h2>
      <div className="min-w-0 max-w-2xl flex-[1_1_420px] space-y-5 text-lg leading-relaxed text-charcoal dark:text-dust">
        {children}
      </div>
    </section>
  )
}

export default function Project({ project }) {
  return (
    <>
      <Head>
        <title>{`${project.name} - Robbie Ribeiro`}</title>
        <meta name="description" content={project.problem} />
      </Head>
      <Container className="mt-12 sm:mt-16">
        <BackLink>Work</BackLink>

        <header className="mt-10 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.08em] text-charcoal dark:text-dust">
            Project
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
            {project.name}
            <span className="text-accent-500">.</span>
          </h1>
          <p className="mt-6 text-lg text-charcoal dark:text-dust">
            {project.company} · {project.dates}
          </p>
          <p className="mt-1 text-lg text-charcoal dark:text-dust">
            {project.role}
          </p>
          <Link
            href={`/experience#${project.experienceId}`}
            className="mt-6 inline-block border-b border-accent-500 pb-0.5 text-[15px] font-medium transition hover:text-charcoal dark:hover:text-dust"
          >
            See this role in my experience →
          </Link>
        </header>

        <div className="mt-16">
          <DetailSection title="Stack">
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-dust px-3.5 py-1 text-[15px] text-carbon dark:border-charcoal dark:text-floral"
                >
                  {item}
                </li>
              ))}
            </ul>
          </DetailSection>
          <DetailSection title="Context">
            {project.context.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </DetailSection>
          <DetailSection title="Approach">
            {project.approach.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </DetailSection>
          <DetailSection title="Outcome">
            {project.outcome.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </DetailSection>
        </div>

        <div className="border-t border-dust pt-8 dark:border-charcoal">
          <BackLink>Back to work</BackLink>
        </div>
      </Container>
    </>
  )
}

export function getStaticPaths() {
  return {
    paths: projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: false,
  }
}

export function getStaticProps({ params }) {
  return { props: { project: getProject(params.slug) } }
}
