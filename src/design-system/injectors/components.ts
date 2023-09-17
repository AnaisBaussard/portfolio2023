import { css, Theme } from 'styled-components'
import { kebabCase, reduce } from 'lodash'

import { generateMediaQuery } from 'helpers/css'

/**
 * Inject this style into your component so that component CSS can be generated out of the theme.
 * Example: "backgroundColor: colors.darkGrey" from the theme will be translated to "background-color: #363C50;" in the CSS.
 *
 * Also supports responsive or modes (see the theme for examples).
 * Don't forget to include the props "componentName" and "mode" in a component that uses this injector.
 */

export type ComponentProps = {
  componentName: keyof Theme['components']
  mode?: string
}

export const generateCssFromObject = (
  componentObject: ComponentObject,
  theme: Theme,
  mode?: ComponentProps['mode'],
) =>
  reduce(
    componentObject,
    (acc: (string | number)[], rule, key) => {
      switch (key) {
        case 'lg':
        case 'md':
        case 'sm':
          acc.push(
            generateMediaQuery(
              {
                screenSize: key,
                theme,
              },
              generateCssFromObject(rule as ComponentObject, theme, mode),
            ),
          )
          break
        case 'modes':
          if (mode && !!rule[mode]) {
            acc.push(generateCssFromObject(rule[mode], theme))
          }
          break
        default:
          if (typeof rule === 'object') break
          acc.push(`${kebabCase(key)}: ${rule};`)
      }
      return acc
    },
    [],
  ).join('\n')

export const generateComponentCss = ({
  componentName,
  mode,
  theme,
}: ComponentProps & {
  theme: Theme
}) => generateCssFromObject(theme.components[componentName], theme, mode)

export default css<ComponentProps>`
  ${generateComponentCss}
`
