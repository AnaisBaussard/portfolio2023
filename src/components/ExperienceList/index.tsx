import React from 'react'
import { Trans, useTranslation } from 'next-i18next'
import { map, slice } from 'lodash'

import { Cell, Div, Grid, Image, ResponsiveTextContainer, Text, Tile, Title } from 'design-system'
import { addLinks } from 'helpers/trans'

import { TechStack } from './components'
import { ExperienceListSeparator, SmallTilesContainer } from './styles'

type ExperienceListProps = {
  experiences: Experience[]
  mode?: 'normal' | 'small'
  trimNb?: number
}

const ExperienceList = ({ experiences, mode = 'normal', trimNb }: ExperienceListProps) => {
  const { t } = useTranslation('experiences')
  const trimmedExperiences = trimNb ? slice(experiences, 0, trimNb) : experiences

  return (
    <ResponsiveTextContainer di="f" fd="c" g={mode === 'small' ? 1 : 3}>
      {map(trimmedExperiences, (experience, index) =>
        mode === 'small' ? (
          <SmallTilesContainer ai="ce" di="f" key={`experience-small-${index}`}>
            <Tile {...experience} mode="icon" iconSrc={experience?.iconSrc} />
            <Text ml={0.75}>
              <Trans
                components={addLinks([experience.href, ...(experience.links || [])])}
                i18nKey={`experiences:${experience.name}.descriptionSmall`}
              />
            </Text>
          </SmallTilesContainer>
        ) : (
          <Div id={experience.name} key={`experience-${index}`}>
            {experience.imgSrc ? (
              <Image alt={experience.imgAlt} src={experience.imgSrc} />
            ) : (
              <Title>{t(`experiences:${experience.name}.title`)}</Title>
            )}
            <ExperienceListSeparator color={experience.color} mb={2} />
            <Grid cGap={4} mdLgCGap={0}>
              <Cell $cols={6} mdLgCols={12}>
                <Text>
                  <Trans
                    components={addLinks(experience.links)}
                    i18nKey={`experiences:${experience.name}.description`}
                  />
                </Text>
              </Cell>
              <Cell $cols={6} mdLgCols={12}>
                <TechStack experienceName={experience.name} stack={experience.stack} />
              </Cell>
            </Grid>
          </Div>
        ),
      )}
    </ResponsiveTextContainer>
  )
}

export default ExperienceList
