import { TFunction } from 'next-i18next'
import routes from './routes'

export const getMenuLinks = (t: TFunction) => [
  {
    path: routes.home,
    label: t('menu:home'),
  },
  {
    path: routes.skills,
    label: t('menu:skills'),
  },
  {
    path: routes.experience,
    label: t('menu:experience'),
  },
  {
    path: routes.contact,
    label: t('menu:contact'),
  },
]
