import React, { useEffect } from 'react'

const InternShipsAndCertifs:React.FC = () => {
  useEffect(()=>{
          document.title = "Internships & Certificates"
      },[])
    return (
      <div className=' h-screen w-full flex items-center justify-center'>
      InternShipsAndCertifs</div>
  )
}

export default InternShipsAndCertifs