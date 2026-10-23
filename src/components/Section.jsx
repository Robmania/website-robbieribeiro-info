import { useId } from 'react'

export function Section({ title, subTitle, children }) {
  let id = useId()

  return (
    <section
      aria-labelledby={id}
      className="flex flex-wrap gap-x-12 gap-y-4 border-t border-dust pt-8 dark:border-charcoal"
    >
      <h2
        id={id}
        className="flex-[0_0_180px] text-[15px] text-charcoal dark:text-dust"
      >
        {title}
        {subTitle && (
          <>
            <br />
            {subTitle}
          </>
        )}
      </h2>

      <div className="min-w-0 flex-[1_1_420px]">{children}</div>
    </section>
  )
}
