import { getFilteredAndSortedArray } from '../array'

describe('getFilteredAndSortedArray', () => {
  type ArrayValue = {
    name: string
    date: Date
    tags: ('tag1' | 'tag2')[]
  }

  const arrayValue: ArrayValue[] = [
    {
      name: 'Aa',
      date: new Date('03/10/1995'),
      tags: ['tag1'],
    },
    {
      name: 'Bb',
      date: new Date('01/01/2022'),
      tags: ['tag1', 'tag2'],
    },
    {
      name: 'Cc',
      date: new Date('09/10/2021'),
      tags: ['tag2'],
    },
  ]

  const testCases: {
    tagsToFilter?: ArrayValue['tags']
    sortBy?: SortBySettings<ArrayValue>
    expectedValue: ArrayValue[]
  }[] = [
    {
      tagsToFilter: ['tag1'],
      sortBy: {
        sortBy: 'date',
        sortByOrder: 'asc',
      },
      expectedValue: [arrayValue[0], arrayValue[1]],
    },
    {
      tagsToFilter: ['tag2'],
      sortBy: {
        sortBy: 'date',
        sortByOrder: 'desc',
      },
      expectedValue: [arrayValue[1], arrayValue[2]],
    },
    {
      tagsToFilter: ['tag2', 'tag1'],
      sortBy: {
        sortBy: 'date',
        sortByOrder: 'desc',
      },
      expectedValue: [arrayValue[1], arrayValue[2], arrayValue[0]],
    },
    {
      tagsToFilter: [],
      sortBy: undefined,
      expectedValue: [arrayValue[0], arrayValue[1], arrayValue[2]],
    },
    {
      tagsToFilter: ['tag2'],
      sortBy: undefined,
      expectedValue: [arrayValue[1], arrayValue[2]],
    },
    {
      tagsToFilter: [],
      sortBy: {
        sortBy: 'name',
        sortByOrder: 'desc',
      },
      expectedValue: [arrayValue[2], arrayValue[1], arrayValue[0]],
    },
  ]

  testCases.forEach(({ tagsToFilter, sortBy, expectedValue }) => {
    it('returns the right values depending on the given arguments', () => {
      const value = getFilteredAndSortedArray(arrayValue, tagsToFilter, sortBy)
      expect(value).toEqual(expectedValue)
    })
  })
})
