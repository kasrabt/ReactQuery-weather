
import Image from 'next/image'
import bgImage from '~/app/assets/bg.jpg'

import React from 'react'

export default function Wallpaper() {
  return (
    <div className=' w-full h-full fixed -z-20  blur-md'> 
        <Image fill sizes=' width:100% height:100%' alt='bgImage' src={bgImage} />
    </div>
  )
}
