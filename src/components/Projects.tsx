import React, { useEffect } from 'react'

const Projects:React.FC = () => {
    useEffect(()=>{
            document.title = "Projects"
        },[])
  return (
    <div>Projects</div>
  )
}

export default Projects