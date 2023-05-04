const checkboardCache: Record<string, string | null> = {}

export const render = (c1: string, c2: string, size: number) => {
  const canvas = document.createElement('canvas')
  canvas.width = size * 2
  canvas.height = size * 2
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    return null
  } // If no context can be found, return early.
  ctx.fillStyle = c1
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = c2
  ctx.fillRect(0, 0, size, size)
  ctx.translate(size, size)
  ctx.fillRect(0, 0, size, size)
  return canvas.toDataURL()
}

export const get = (c1: string, c2: string, size: number) => {
  const key = `${c1}-${c2}-${size}`
  const checkboard = render(c1, c2, size)

  if (checkboardCache[key]) {
    return checkboardCache[key]
  }
  checkboardCache[key] = checkboard
  return checkboard
}
