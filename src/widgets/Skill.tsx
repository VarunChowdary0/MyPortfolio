import React from 'react'

interface currentProps{
    src : string;
    name : string
}
const Skill:React.FC<currentProps> = (props) => {
  return (
    <div className=' w-[120px] h-[120px] shadow-lg  -[#4bbbb9]
    hover:shadow-xl transition-all bg-[#ffffff] x gap-3 rounded-lg flex 
    items-center justify-center flex-col
     max-sm:w-[87px] max-sm:h-[87px] max-sm:gap-0
    '>
        <img className=' h-[60px] max-sm:h-[45px] fill-white' 
        src={props.src} alt={props.name}/>
        <p className=' text-lg max-sm:text-sm text-[#6558d1]'>{props.name}</p>
    </div>
  )
}

export default Skill