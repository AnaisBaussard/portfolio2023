import styled, { Theme, css } from 'styled-components'
import {
  ContainerProps,
  container,
  DisplayProps,
  display,
  SizeProps,
  sizes,
  text,
  TextProps,
} from '../injectors'

type TitleProps = {
  mode?: 'small'
  separatorColor?: keyof Theme['colors'] | string
  withSeparator?: boolean
}
const Title = styled.h1.attrs((props: TitleProps) => ({
  as: props?.mode === 'small' ? 'h2' : 'h1',
}))<ContainerProps & DisplayProps & TextProps & SizeProps & TitleProps>`
  ${({ mode, theme }) => css`
    color: ${theme.components.title.color};
    font-family: ${theme.components.title.fontFamily};
    font-size: ${theme.components.title.fontSize};
    font-weight: ${theme.components.title.fontWeight};

    ${mode === 'small' &&
    `
      font-size: ${theme.components.title.small.fontSize};
    `}
  `}
  ${container}
  ${display}
  ${sizes}
  ${text}
  ${({ mb, separatorColor, theme, withSeparator }) => css`
    ${withSeparator &&
    `
      display: inline-block;
      margin-bottom: calc(${theme.sizes[mb as keyof Theme['sizes']] || mb || theme.sizes[0]} + ${
      theme.sizes[0.75]
    });
      position: relative;

      &::before {
        content: "";
        background-color: ${theme.components.separator.backgroundColor};
        bottom: -${theme.sizes[1]};
        display: inline-block;
        height: 1px;
        left: ${theme.sizes[1.25]};
        position: absolute;
        width: calc(100% - ${theme.sizes[2.25]});
      }

      &::after {
        content: "";
        background-color: ${
          theme.colors[separatorColor as keyof Theme['colors']] ||
          separatorColor ||
          theme.components.separator.after.backgroundColor
        };
        bottom: -${theme.sizes[1]};
        display: inline-block;
        height: 1px;
        left: ${theme.sizes[1.25]};
        position: absolute;
        width: ${theme.components.separator.after.size};
      }
    `}
  `}
`

export default Title
