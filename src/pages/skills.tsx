import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Skills } from 'features'

export default function SkillsPage() {
  return <Skills />
}

export async function getStaticProps({ locale }: DefaultGetStaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'menu', 'skills'])),
    },
  }
}
