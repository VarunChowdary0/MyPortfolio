import React, { useEffect } from 'react'
import LeetCodeWid from '../widgets/LeetCodeWid'
import CodeChefWid from '../widgets/CodeChefWid'
import HackerRankWid from '../widgets/HackerRankWid'
import GeekForGeeksWid from '../widgets/GeekForGeeksWid'
import axios from 'axios'

const CodingProfiles:React.FC = () => {
    useEffect(()=>{
        document.title = 'Coding Profile'
    },[])
    return (
      <div className=' h-screen w-full flex overflow-y-auto mt-[5px] flex-col py-[100px]'>
          <LeetCodeWid/>
          <CodeChefWid/>
          <HackerRankWid/>
          <GeekForGeeksWid/>
      </div>
  )
}

export default CodingProfiles