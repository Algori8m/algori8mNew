import React from 'react'
import images from '../../assets/images'
import './loading.css'


function Loading() {
  return (
    <div className='loading'>
    <div className='loadingInner'>
      <img src={images['realLogo']} alt='' />
    </div>
    </div>
  )
}

export default Loading