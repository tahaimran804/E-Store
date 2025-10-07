import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className='w-full h-[100vh]'>
      <Image src={"/Images/Loader.gif"} alt='Loading...' width={300} height={100} />
    </div>
  )
}

export default Loading
