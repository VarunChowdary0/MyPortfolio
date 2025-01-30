import React, { useEffect } from 'react'

const Projects:React.FC = () => {
    useEffect(()=>{
            document.title = "Projects"
        },[])
  return (
    <div className=' h-[calc(100vh-52px)] w-full flex items-center justify-center'>
      Projects</div>
  )
}

export default Projects