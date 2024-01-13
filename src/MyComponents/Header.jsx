import { Button } from '@/components/ui/button'
import React from 'react'
import '../App.css'

function Header() {
  return (
    <div className='Header-container'>
        <div className="logo text-white">OneSchool</div>
        <div className="buttons">
            <Button variant="ghost" className="text-white hover:bg-indigo-700 hover:text-white">Home</Button>
            <Button variant="ghost" className="text-white hover:bg-indigo-700 hover:text-white">Courses</Button>
            <Button variant="ghost" className="text-white hover:bg-indigo-700 hover:text-white">Programs</Button>
            <Button variant="ghost" className="text-white hover:bg-indigo-700 hover:text-white">Teachers</Button>
        </div>
        <div className="contactus">
            <Button className='bg-indigo-700 text-white hover:bg-indigo-900' >Contact Us</Button>
        </div>


    </div>
  )
}

export default Header