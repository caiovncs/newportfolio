import { useEffect, useRef } from 'react'

interface TextAnimateProps {
  text: string
}

export function TextAnimate({ text }: TextAnimateProps) {
  const elementRef = useRef<HTMLSpanElement>(null)
  const chars = '!<>-_\\/[]{}—=+*^?#________'
  let frame = 0
  let frameRequest: number
  let queue: {
    from: string
    to: string
    start: number
    end: number
    char?: string
  }[] = []
  let resolve: () => void

  useEffect(() => {
    const element = elementRef.current

    if (!element) {
      return
    }

    const currentText = element.innerText
    const maxLength = Math.max(currentText.length, text.length)

    queue = []
    for (let i = 0; i < maxLength; i++) {
      const from = currentText[i] || ''
      const to = text[i] || ''
      const start = Math.floor(40 * Math.random())
      const end = start + Math.floor(40 * Math.random())

      queue.push({ from, to, start, end })
    }

    cancelAnimationFrame(frameRequest)
    frame = 0
    update()

    return () => {
      cancelAnimationFrame(frameRequest)
    }

    function update() {
      let output = ''
      let completedCount = 0

      for (let i = 0, length = queue.length; i < length; i++) {
        const { from, to, start, end, char } = queue[i]

        if (frame >= end) {
          completedCount++
          output += to
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            queue[i].char = randomChar()
          }
          output += `<span>${queue[i].char}</span>`
        } else {
          output += from
        }
      }

      if (element) {
        element.innerHTML = output
      }

      if (completedCount === queue.length) {
        resolve()
      } else {
        frameRequest = requestAnimationFrame(update)
        frame++
      }
    }

    function randomChar() {
      return chars[Math.floor(Math.random() * chars.length)]
    }
  }, [text])

  return <span ref={elementRef} />
}
