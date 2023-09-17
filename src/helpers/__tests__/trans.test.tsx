import { Link } from 'design-system'
import { addLinks } from 'helpers/trans'

// addLinks returns undefined when given an undefined value
describe('addLinks', () => {
  it('returns undefined when given an undefined value', () => {
    const value = addLinks(undefined)
    expect(value).toBe(undefined)
  })
})

// addLinks returns an array of Link components when given an array of strings
describe('addLinks', () => {
  it('returns an array of Link components when given an array of strings', () => {
    const value = addLinks(['href1', 'href2'])
    expect(value).toEqual([<Link href="href1" key="0" />, <Link href="href2" key="1" />])
  })
})
