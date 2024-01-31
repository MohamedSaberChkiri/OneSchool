import { Button } from '@/components/ui/button'
import React, {useEffect} from 'react'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function HomeText() {

  useEffect(()=>{
    AOS.init({duration: 700})
  },[])
  return (
    <div className='home-text-container sm:items-start sm:text-start items-center text-center mt-40 sm:mt-0 p-[10px]' data-aos="fade-up">

        <h1 >Learn From The Expert</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
        <Button className="text-white bg-indigo-700 hover:bg-indigo-900 hover:text-white mt-[10px] sm:mt-[0] ">ADMISSION NOW</Button>
        
    </div>
  )
}

export default HomeText