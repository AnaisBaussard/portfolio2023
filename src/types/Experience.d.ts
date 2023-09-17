type ExperienceName = 'gb' | 'mailjet' | 'regate' | 'website'

type ExperienceTag = 'personal' | 'professional'

type Experience = {
  color?: string
  endDate?: Date
  gradient?: string
  href: string
  iconSrc?: string
  imgAlt?: string
  imgSrc?: string
  imgTileSrc?: string
  links?: string[]
  name: ExperienceName
  stack: Stack
  startDate: Date
  tags: ExperienceTag[]
  text?: string
}

type Stack = {
  name: SkillName
  withDescription?: boolean
}[]
