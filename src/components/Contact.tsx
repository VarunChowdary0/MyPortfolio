import React, { useEffect } from 'react'

const Contact:React.FC = () => {
    useEffect(()=>{
        document.title = 'Contact'
    },[])
  return (
    <div>Contact</div>
  )
}

export default Contact