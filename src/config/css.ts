export type DirectionKey = keyof typeof svgDirections['y1']

export const svgDirections = {
  x1: {
    h: '100%',
    hr: '0%',
    v: '0%',
    vr: '0%',
  },
  x2: {
    h: '0%',
    hr: '100%',
    v: '0%',
    vr: '0%',
  },
  y1: {
    h: '0%',
    hr: '0%',
    v: '100%',
    vr: '0%',
  },
  y2: {
    h: '0%',
    hr: '0%',
    v: '0%',
    vr: '100%',
  },
}
