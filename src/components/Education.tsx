import React, { useEffect } from 'react'

const Education:React.FC = () => {
  useEffect(()=>{
          document.title = "Education"
      },[])
    return (
    <div>Education</div>
  )
}

export default Education