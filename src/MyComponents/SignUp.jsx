import React from 'react'
import '../App.css'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'


function SignUp() {
  return (
    <div className='signup-container'>

        <div className="signup-text"><h3>Sign Up</h3></div>
        <div className="signup-data-container w-full">
            <Input type="email" placeholder="Email" className="mb-5"/>
            <Input type="password" placeholder="password" className="mb-5"/>
            <Input type="password" placeholder="Re-type password" className="mb-5"/>
        </div>
        <Button>Sign Up</Button>


    </div>
  )
}

export default SignUp