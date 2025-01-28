import React, { useEffect } from 'react'
import Git_hub from '../icons/Git_hub'
import Linked_in from '../icons/Linked_in'
import TwitterIcon from '../icons/TwitterIcon'

const Introduction:React.FC = () => {
    useEffect(()=>{
        document.title = "About"
    },[])
  return (
    <div className='  min-w-screen min-h-screen bg-black/0 flex max-sm:flex-col max-md:flex-col  '>
        <div className='_left w-[50%] max-md:w-full px-24 max-sm:px-5 max-sm:py-10 py-28 min-h-full 
          bg-blue-400/0 max-sm:w-full max-sm:h-fit mt-20 max-md:pb-2 max-md:mt-0 max-md:pt-10 max-sm:pb-4'>
            <div className=' flex h-fit w-full gap-16 max-sm:gap-3
             max-sm:flex-col-reverse items-center justify-center '>
                 <div className=' w-fit h-fit flex gap-16 items-center 
                 py-7 max-w-screen justify-around mt-1 flex-col max-sm:py-3
                max-sm:gap-9 bg-black/0 px-3 rounded-md max-sm:flex-row z-0 '>
                    <a target='_blank' className=' scale-[1.75] ' href="https://www.linkedin.com/in/sai-varun-chowdary-poludasu-908051259/">
                        <Linked_in />
                    </a>
                    <a target='_blank'className=' scale-105 ' href="https://github.com/VarunChowdary0">
                        <Git_hub />
                    </a>
                    <a target='_blank'className=' scale-150' href=''>
                        <TwitterIcon/>
                    </a>
                </div>
                <div>
                    <div className=' flex flex-col gap-5 font-semibold'>
                        <div className=' text-7xl max-sm:text-6xl text-[#282727] font-bold'>
                            Hi, I'm <span className=' text-indigo-600'>Sai varun</span>
                        </div>
                        <div className=' font-4 text-[#817f7f] text-4xl max-sm:text-3xl tracking-tight'>
                            Computer Science Student
                        </div>
                    </div>
                    <div className=' mt-5 pr-10 tracking-wide '>
                        <p className=' leading-7 max-sm:text-[16px] text-xl font-thin'>
                        I am a dedicated Computer Science student passionate about learning and problem-solving, 
                        seeking opportunities to grow, contribute, 
                        and apply my skills in software development and technology.
                        </p>
                    </div>
                </div>
            </div>

           
        </div>
        <div className='_rigth w-[50%] max-md:w-full min-h-full 
        bg-red-400/0 max-sm:w-full max-sm:h-fit flex '>
          <div className=' max-sm:hidden select-none h-fit w-fit mt-20 max-sm:mt-0 
          bg-black/0 transition-all animate-random-move'>
            <img className='' src='/2f533018fa4725ec75a26c1fab07cb8a.png' alt=''/>
          </div>
          <div className=' select-none hidden max-sm:block h-fit w-fit mt-20 max-sm:mt-0 
          bg-black/0 transition-all animate-random-move-sm'>
            <img className='' src='/2f533018fa4725ec75a26c1fab07cb8a.png' alt=''/>
          </div>
        </div>


    </div>
  )
}

export default Introduction