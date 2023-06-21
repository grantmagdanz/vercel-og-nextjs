import { ImageResponse } from '@vercel/og'
import parse from 'html-react-parser'
import React from 'react'

export const config = {
  runtime: 'edge',
}

export default async function handler() {
  const parsedText = parse('<div><p>Here is an image:</p><img src="https://perch-development.s3.amazonaws.com/answer-pictures/Perch___Avatar_07_aac44e90-44c0-4844-a8c4-5e1b09e89374.png"><p>This comes after the image</p></div>')

  const Component = () => {
    console.log(parsedText)
    if (typeof parsedText === 'string') {
      return <div>{parsedText}</div>
    } else if (Array.isArray(parsedText)) {
      return <div>{parsedText.map((item) => <div>{item}</div>)}</div>
    }
    console.log("blah")
    return parsedText
  }

  return new ImageResponse(
    (
      <div>
        <p>test</p>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  )
}
