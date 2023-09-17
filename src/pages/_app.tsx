import type { AppProps } from 'next/app'
import Head from 'next/head'
import { appWithTranslation, useTranslation } from 'next-i18next'

import { Footer, Menu } from 'components'
import { Provider } from 'design-system'

function CustomApp({ Component, pageProps }: AppProps) {
  const { t } = useTranslation('common')
  return (
    <Provider>
      <Head>
        <title>{t('common:mainTitle')}</title>
      </Head>
      <Menu />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}

export default appWithTranslation(CustomApp)
