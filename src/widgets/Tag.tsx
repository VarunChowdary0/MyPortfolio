import React from 'react'

interface curr{
    tag : string;
}
const Tag:React.FC<curr> = ({tag}) => {
  return (
    <div className=' px-2 py-1 bg-[#6358caa9] text-white rounded-md
         transition-all shadow-md hover:shadow-xl text-sm hover:bg-[#6358cae6]'>
            <span className=' text-'>#</span>{" "+tag}</div>
  )
}

export default Tag