type SortBySettings<T> = {
  sortBy: keyof T
  sortByOrder: 'asc' | 'desc'
}
