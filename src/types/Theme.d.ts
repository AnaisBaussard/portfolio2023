type ScreenSize = 'md' | 'mdLg' | 'lg' | 'sm'

type Breakpoint = {
  key: ScreenSize
  maxWidth?: number
  minWidth: number
}

type Breakpoints = {
  [key: string]: Breakpoint
}

type ComponentObject = {
  [key: string | ScreenSize | 'modes']: string | number | ComponentObject
}

type Gradient = [[string, string], [string, string], ...[string, string][]]
