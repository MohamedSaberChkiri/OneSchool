import { Button } from '@/components/ui/button'
import React from 'react'
import '../App.css'

function Header() {
  return (
    <div className='Header-container'>
        <div className="logo">OneSchool</div>
        <div className="buttons">
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">Courses</Button>
            <Button variant="ghost">Programs</Button>
            <Button variant="ghost">Teachers</Button>
        </div>
        <div className="contactus">
            <Button>Contact Us</Button>
        </div>


    </div>
  )
}

export default Header