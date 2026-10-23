import Head from 'next/head'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'

function ContactRow({ label, href, children }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-12 gap-y-2 border-t border-dust py-8 dark:border-charcoal">
      <p className="flex-[0_0_180px] text-[15px] text-charcoal dark:text-dust">
        {label}
      </p>
      <Link
        href={href}
        className="border-b-2 border-accent-500 pb-0.5 text-2xl font-semibold tracking-tight transition hover:text-charcoal dark:hover:text-dust sm:text-3xl"
      >
        {children}
      </Link>
    </div>
  )
}

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Robbie Ribeiro</title>
        <meta name="description" content="Get hold of me." />
      </Head>
      <SimpleLayout
        title="Contact Me."
        intro="Have a project in mind? Get in touch by email, phone or LinkedIn."
      >
        <ContactRow label="Email" href="mailto:robbie@codestream.co.za">
          robbie@codestream.co.za
        </ContactRow>
        <ContactRow label="Phone" href="tel:+27824972398">
          +27 (0)82 497 2398
        </ContactRow>
        <ContactRow
          label="LinkedIn"
          href="https://www.linkedin.com/in/robbieribeiro"
        >
          linkedin.com/in/robbieribeiro
        </ContactRow>
        <ContactRow label="GitHub" href="https://github.com/Robmania">
          github.com/Robmania
        </ContactRow>
      </SimpleLayout>
    </>
  )
}
