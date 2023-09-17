import { useMemo, useState } from 'react'
import { useTranslation } from 'next-i18next'

import { ExperienceList } from 'components'
import { experiences } from 'config/experience'
import { useResponsiveContext } from 'context/Responsive'
import { Select, Div } from 'design-system'
import { getFilteredAndSortedArray } from 'helpers/array'

import { getFilterByOptions, getSortByOptions } from '../config'

const ExperienceFilteredList = () => {
  const { t } = useTranslation('experience')
  const { isDesktop } = useResponsiveContext()

  const filterByOptions = useMemo(() => getFilterByOptions(t), [t])
  const sortByOptions = useMemo(() => getSortByOptions(t), [t])

  const [sortBySettings, setSortBySettings] = useState<SortBySettings<Experience>>({
    sortBy: sortByOptions[0].sortBy,
    sortByOrder: sortByOptions[0].sortByOrder,
  })
  const [tagsToFilter, setTagsToFilter] = useState<ExperienceTag[]>([])

  const filteredAndSortedExperiences = useMemo(
    () => getFilteredAndSortedArray<Experience>(experiences, tagsToFilter, sortBySettings),
    [sortBySettings, tagsToFilter],
  )

  return (
    <>
      <Div di="f" jc={!isDesktop ? 'ce' : 'sb'} fw="w">
        <Select
          id="filterBy"
          isMulti
          label={t('experience:filterBy.label')}
          mb={3}
          mr={isDesktop ? 1 : undefined}
          onChange={(options: typeof filterByOptions) =>
            setTagsToFilter(options.map(option => option.value))
          }
          options={filterByOptions}
          w="270px"
        />
        <Select
          defaultValue={sortByOptions[0]}
          id="sortBy"
          label={t('experience:sortBy.label')}
          mb={3}
          onChange={({ sortBy, sortByOrder }: SortBySettings<Experience>) =>
            setSortBySettings({ sortBy, sortByOrder })
          }
          options={sortByOptions}
          w="270px"
        />
      </Div>
      <ExperienceList experiences={filteredAndSortedExperiences} mode="normal" />
    </>
  )
}

export default ExperienceFilteredList
