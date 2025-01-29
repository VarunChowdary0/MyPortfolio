import React, { useEffect } from 'react'

const Education:React.FC = () => {
  useEffect(()=>{
          document.title = "Education"
      },[])
    return (
      <div className=' h-screen w-full flex items-center justify-center'>
      Education</div>
  )
}

export default Education