import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Contact } from 'features'

export default function ContactPage() {
  return <Contact />
}

export async function getStaticProps({ locale }: DefaultGetStaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'menu', 'contact'])),
    },
  }
}
