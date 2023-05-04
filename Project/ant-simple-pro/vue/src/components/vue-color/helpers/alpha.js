export const calculateChange = (e, props, container) => {
  e.preventDefault()
  const containerWidth = container.clientWidth
  const containerHeight = container.clientHeight
  const x = e.pageX || e.touches[0].pageX
  const y = e.pageY || e.touches[0].pageY
  const left = x - (container.getBoundingClientRect().left + window.pageXOffset)
  const top = y - (container.getBoundingClientRect().top + window.pageYOffset)

  if (props.direction === 'vertical') {
    let a = 0
    if (top < 0) {
      a = 0
    } else if (top > containerHeight) {
      a = 1
    } else {
      a = Math.round((top * 100) / containerHeight) / 100
    }

    if (props.hsl.a !== a) {
      return {
        h: props.hsl.h,
        s: props.hsl.s,
        l: props.hsl.l,
        a,
        source: 'rgb'
      }
    }
  } else {
    let a = 0
    if (left < 0) {
      a = 0
    } else if (left > containerWidth) {
      a = 1
    } else {
      a = Math.round((left * 100) / containerWidth) / 100
    }

    if (props.a !== a) {
      return {
        h: props.hsl.h,
        s: props.hsl.s,
        l: props.hsl.l,
        a,
        source: 'rgb'
      }
    }
  }
  return null
}
