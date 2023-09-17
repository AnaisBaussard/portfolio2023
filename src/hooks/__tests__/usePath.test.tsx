import { useRouter } from 'next/router'
import { renderHook } from '@testing-library/react-hooks'

import usePath from '../usePath'

jest.mock('next/router')
const mockedUseRouter = useRouter as jest.Mock

describe('usePath', () => {
  beforeEach(() => {
    mockedUseRouter.mockImplementation(() => {
      return {
        pathname: '/home',
      }
    })
  })
  ;[
    {
      expectedValue: false,
      route: '/',
    },
    {
      expectedValue: true,
      route: '/home',
    },
    {
      expectedValue: false,
      route: '/skills',
    },
  ].forEach(({ expectedValue, route }) => {
    it(`should return ${expectedValue} for given path ${route} compared to /home`, () => {
      const { result } = renderHook(() => usePath())
      expect(result.current.checkPath(route)).toBe(expectedValue)
    })
  })
})
