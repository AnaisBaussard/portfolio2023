import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Home } from 'features'

export default function HomePage() {
  return <Home />
}

export async function getStaticProps({ locale }: DefaultGetStaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'menu', 'home', 'experiences'])),
    },
  }
}
