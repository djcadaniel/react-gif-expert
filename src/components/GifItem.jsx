import React from 'react'

export const GifItem = ({title, url}) => {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <img src={url} alt="" />
      </div>
    </>
  )
}