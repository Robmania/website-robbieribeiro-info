import Link from 'next/link'

export function ProjectCard({ project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-3xl border border-dust p-8 transition hover:border-carbon dark:border-charcoal dark:hover:border-dust"
    >
      <p className="text-sm text-charcoal dark:text-dust">
        {project.dates} · {project.company}
      </p>
      <h3 className="mt-2 text-[22px] font-semibold tracking-tight">
        {project.name}
      </h3>
      <dl className="mt-6 flex-grow space-y-4 text-base leading-relaxed">
        {[
          ['Problem', project.problem],
          ['Design', project.design],
          ['Shipped', project.shipped],
        ].map(([label, text]) => (
          <div key={label}>
            <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em]">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-accent-500"
              />
              {label}
            </dt>
            <dd className="mt-1 text-charcoal dark:text-dust">{text}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-dust pt-4 text-sm dark:border-charcoal">
        <span className="text-charcoal dark:text-dust">
          {project.stack.slice(0, 5).join(' · ')}
        </span>
        <span className="border-b border-accent-500 pb-0.5 font-medium">
          View project{' '}
          <span
            aria-hidden="true"
            className="inline-block transition group-hover:translate-x-0.5"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  )
}
