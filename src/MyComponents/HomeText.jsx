import { Button } from '@/components/ui/button'
import React from 'react'
import '../App.css'

function HomeText() {
  return (
    <div className='home-text-container'>

        <h1>Learn From The Expert</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
        <Button className="bg-white text-black hover:text-white">ADMISSION NOW</Button>
        
    </div>
  )
}

export default HomeText