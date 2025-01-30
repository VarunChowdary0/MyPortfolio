import React from 'react'

interface currentProps{
    src : string;
    name : string
}
const Skill:React.FC<currentProps> = (props) => {
  return (
    <div className=' hover:scale-110 hover:shadow-2xl duration-300
   w-[110px] h-[110px] shadow-lg  -[#4bbbb9]
   transition-all bg-[#ffffff] x gap-3 rounded-lg flex 
    items-center justify-center flex-col
     max-sm:w-[83px] max-sm:h-[83px] max-sm:gap-0
    '>
        <img className=' h-[55px] rounded-lg max-sm:h-[45px] fill-white' 
        src={props.src} alt={props.name}/>
        <p className=' text-lg max-sm:text-sm text-[#6558d1]'>{props.name}</p>
    </div>
  )
}

export default Skill