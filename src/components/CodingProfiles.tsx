import React, { useEffect } from 'react'

const CodingProfiles:React.FC = () => {
    useEffect(()=>{
        document.title = 'Coding Profile'
    },[])
    return (
      <div className=' h-screen w-full flex items-center justify-center'>
        CodingProfiles</div>
  )
}

export default CodingProfiles