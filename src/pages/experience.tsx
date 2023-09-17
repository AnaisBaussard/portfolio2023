import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Experience } from 'features'

export default function ExperiencePage() {
  return <Experience />
}

export async function getStaticProps({ locale }: DefaultGetStaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'menu',
        'experience',
        'experiences',
        'skills',
      ])),
    },
  }
}
