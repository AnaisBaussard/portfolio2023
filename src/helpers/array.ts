import { filter, includes, isEmpty, orderBy, some } from 'lodash'

export const getFilteredAndSortedArray = <T extends { tags: string[] }>(
  array: T[],
  tagsToFilter?: T['tags'],
  sortBy?: SortBySettings<T>,
): T[] => {
  let finalArray = array
  if (!isEmpty(tagsToFilter)) {
    finalArray = filter(finalArray, ({ tags }) => some(tags, tag => includes(tagsToFilter, tag)))
  }
  if (sortBy) {
    finalArray = orderBy(finalArray, sortBy.sortBy, sortBy.sortByOrder)
  }
  return finalArray
}
