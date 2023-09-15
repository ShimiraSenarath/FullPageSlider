import React from 'react'

const Video = (props) => {
  return (
    <div className='video-content'>
      <video autoPlay muted loop playsInline>
        <source src={props.data.videoUrl} type='video/mp4' />
      </video>
    </div>
  )
}

export default Video
