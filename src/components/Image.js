import React from 'react'

const Image = (props) => {
  return (
    <picture>
        <source media="(min-width:1280px)" srcSet={props.data.desktop} />
        <source media="(min-width:800px)" srcSet={props.data.tablet} />
        <source media="(max-width:800px)" srcSet={props.data.mobile} />
        <img className="background-image" src={props.data.mobile} alt="section background" /> 
    </picture>
  )
}

export default Image;