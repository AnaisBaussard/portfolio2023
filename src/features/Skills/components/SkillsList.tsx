import { Trans, useTranslation } from 'next-i18next'
import { Theme } from 'styled-components'
import { map } from 'lodash'

import { Div, Text, Title } from 'design-system'
import { BookCircle, CheckCircle } from 'design-system/Icon'
import { IconProps } from 'design-system/Icon/Icon'
import { SizeProps } from 'design-system/injectors'

const iconProps: {
  [P in Skill['level']]: {
    component: (props: IconProps) => JSX.Element
    color: keyof Theme['colors']
  }
} = {
  beginner: {
    component: BookCircle,
    color: 'violet',
  },
  intermediate: {
    component: CheckCircle,
    color: 'orange',
  },
  expert: {
    component: CheckCircle,
    color: 'green',
  },
}

type Props = {
  category: SkillCategory
  separatorColor?: keyof Theme['colors']
  skills: Skill[]
} & SizeProps

const SkillsList = ({ category, separatorColor, skills, ...divProps }: Props) => {
  const { t } = useTranslation('skills')

  return (
    <Div {...divProps}>
      <Title mb={1.5} mode="small" withSeparator separatorColor={separatorColor}>
        {t(`skills:skillsCategories.${category}`)}
      </Title>
      {map(skills, ({ level, name }) => {
        const Icon = iconProps[level].component
        return (
          <Div di="f" key={`skill-${name}`} mt={0.125}>
            <Icon color={iconProps[level].color} mr={0.5} mt={0.5} />
            <Text>
              <Trans i18nKey={`skills:skillsList.${name}`} />
            </Text>
          </Div>
        )
      })}
    </Div>
  )
}

export default SkillsList
