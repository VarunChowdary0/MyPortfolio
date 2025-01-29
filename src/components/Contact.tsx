import React, { useEffect } from 'react'
import ScrollDrop from './ScrollDrop'

const Contact:React.FC = () => {
    useEffect(()=>{
        document.title = 'Contact'
    },[])
  return (
    <div className=' h-[100vh-50px] w-full flex items-center justify-center'>
      <ScrollDrop/>
    </div>
  )
}

export default Contact