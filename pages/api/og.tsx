import { ImageResponse } from '@vercel/og'
import parse from 'html-react-parser'

export const config = {
  runtime: 'edge',
}

export default async function handler() {
  const parsedText = parse('<div style="display: flex;"><p>Hello, World</p></div>')

  function Component() {
    if (typeof parsedText === 'string') {
      return <>{parsedText}</>
    } else if (Array.isArray(parsedText)) {
      return <>{parsedText.map((item) => <>{item}</>)}</>
    }
    return parsedText
  }

  return new ImageResponse(
    (
      <>
        <Component />
      </>
    ),
    {
      width: 1200,
      height: 600,
    }
  )
}
