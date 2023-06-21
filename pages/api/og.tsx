import { ImageResponse } from '@vercel/og'
import parse from 'html-react-parser'
import React from 'react'

export const config = {
  runtime: 'edge',
}

export default async function handler() {
  const parsedText = parse('<div><p>Hello, World</p></div>')

  const Component = () => {
    if (typeof parsedText === 'string') {
      return <div>{parsedText}</div>
    } else if (Array.isArray(parsedText)) {
      return <div>{parsedText.map((item) => <div>{item}</div>)}</div>
    }
    return parsedText
  }

  return new ImageResponse(
    (
      <div>
        <Component />
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  )
}
