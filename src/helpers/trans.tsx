import React from 'react'
import { map } from 'lodash'

import { Link } from 'design-system'

export const addLinks = (links: string[] | undefined): React.ReactNode[] | undefined =>
  links && map(links, (href, key) => <Link href={href} key={`${key}`} />)
