import { TFunction } from 'next-i18next'
import { OptionsType } from 'react-select'

export const getFilterByOptions = (
  t: TFunction,
): OptionsType<{ label: string; value: ExperienceTag }> => [
  {
    label: t('experience:filterBy.professional'),
    value: 'professional',
  },
  {
    label: t('experience:filterBy.personal'),
    value: 'personal',
  },
]

export const getSortByOptions = (
  t: TFunction,
): OptionsType<
  {
    label: string
    value: string
  } & SortBySettings<Experience>
> => [
  {
    label: t('experience:sortBy.mostRecent'),
    sortBy: 'startDate',
    sortByOrder: 'desc',
    value: 'mostRecent',
  },
  {
    label: t('experience:sortBy.oldest'),
    sortBy: 'startDate',
    sortByOrder: 'asc',
    value: 'oldest',
  },
  {
    label: t('experience:sortBy.name'),
    sortBy: 'name',
    sortByOrder: 'asc',
    value: 'name',
  },
]
