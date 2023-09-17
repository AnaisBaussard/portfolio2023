export function isClickInside(event: MouseEvent, ref: React.RefObject<HTMLElement>) {
  if (ref.current) {
    const rect = ref.current.getBoundingClientRect()

    return (
      event.clientX > rect.left &&
      event.clientX <= rect.right &&
      event.clientY > rect.top &&
      event.clientY <= rect.bottom
    )
  }

  return false
}
