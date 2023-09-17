import { map } from 'lodash'
import { Trans } from 'next-i18next'

import { Div, Text } from 'design-system'
import {
  Cypress,
  JavaScript,
  Jest,
  Php,
  PostgreSQL,
  React as ReactIcon,
  Ruby,
  TypeScript,
} from 'design-system/Icon'
import { IconProps } from 'design-system/Icon/Icon'

import { TechStackContainer } from '../styles'

type TechStackProps = {
  experienceName: Experience['name']
  stack: Stack
}

const techStackComponentsMap: {
  [S in SkillName]?: (props: IconProps) => JSX.Element
} = {
  cypress: Cypress,
  javascript: JavaScript,
  jest: Jest,
  php: Php,
  postgresql: PostgreSQL,
  react: ReactIcon,
  ruby: Ruby,
  typescript: TypeScript,
}

const TechStack = ({ experienceName, stack }: TechStackProps) => {
  return (
    <TechStackContainer di="f" fd="c">
      {map(stack, (tech, index) => {
        const Icon = techStackComponentsMap[tech.name] || ReactIcon
        return (
          <Div ai="ce" di="f" key={`tech-${index}`}>
            <Icon mr={0.5} mt={0.125} />
            <Text tSize={1}>
              <Trans i18nKey={`skills:skillsShort.${tech.name}`} />
              {tech?.withDescription && (
                <>
                  &nbsp;
                  <Trans i18nKey={`experiences:${experienceName}.stackDescription.${tech.name}`} />
                </>
              )}
            </Text>
          </Div>
        )
      })}
    </TechStackContainer>
  )
}

export default TechStack
