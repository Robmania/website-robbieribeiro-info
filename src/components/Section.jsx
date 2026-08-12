import { useId } from 'react'

export function Section({ title, subTitle, children }) {
  let id = useId()

  return (
    <section
      aria-labelledby={id}
      className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
    >
      <div className="grid grid-cols-1 items-baseline gap-y-8 md:grid-cols-5 md:gap-x-8">
        <h2
          id={id}
          className="text-sm font-semibold text-zinc-800 dark:text-zinc-100"
        >
          {title}
          <br />
          {subTitle}
        </h2>

        <div className="md:col-span-4">{children}</div>
      </div>
    </section>
  )
}
