import routes from './routes'

export const experiences: Experience[] = [
  {
    color: 'secondary',
    href: routes.experiences.website,
    iconSrc: '/images/portfolio/website/logo-white-icon.png',
    imgAlt: 'Logo Portfolio',
    links: [
      'https://github.com/AnaisBaussard/portfolio2023',
      'https://www.figma.com/file/lp8PmueH2eL2XRKjeyuLxF/Portfolio-2023',
    ],
    name: 'website',
    stack: [{ name: 'react', withDescription: true }, { name: 'typescript' }],
    startDate: new Date('07/09/2023'),
    tags: ['personal'],
  },
  {
    color: 'regate',
    endDate: new Date('18/05/2023'),
    gradient: 'regateV',
    href: routes.experiences.regate,
    iconSrc: '/images/portfolio/regate/logo-white-icon.png',
    imgAlt: 'Logo Regate',
    imgSrc: '/images/portfolio/regate/logo.png',
    imgTileSrc: '/images/portfolio/regate/logo-white.png',
    name: 'regate',
    stack: [
      { name: 'react', withDescription: true },
      { name: 'typescript' },
      { name: 'jest' },
      { name: 'cypress' },
      { name: 'ruby', withDescription: true },
      { name: 'postgresql' },
    ],
    startDate: new Date('15/11/2021'),
    tags: ['professional'],
  },
  {
    color: 'mailjet',
    endDate: new Date('21/09/2021'),
    href: routes.experiences.mailjet,
    iconSrc: '/images/portfolio/mailjet/logo-white-icon.png',
    imgAlt: 'Logo Mailjet',
    imgSrc: '/images/portfolio/mailjet/logo.png',
    imgTileSrc: '/images/portfolio/mailjet/logo-white.png',
    name: 'mailjet',
    stack: [
      { name: 'react', withDescription: true },
      { name: 'javascript' },
      { name: 'jest' },
      { name: 'php', withDescription: true },
    ],
    startDate: new Date('12/02/2018'),
    tags: ['professional'],
  },
]