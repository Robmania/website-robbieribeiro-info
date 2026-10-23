import { Container } from '@/components/Container'

export function SimpleLayout({
  title,
  intro,
  headerWidth = 'max-w-2xl',
  children,
}) {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className={headerWidth}>
        <h1 className="text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 text-lg leading-relaxed text-charcoal dark:text-dust">
            {intro}
          </p>
        )}
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}
