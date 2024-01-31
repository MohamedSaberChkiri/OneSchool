import React from 'react'
import Program from './Program'
import { TextField } from '@mui/material'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'



function MessageUs() {
  return (
    <div className='mucont'>
            <div className="message-us-top mt-5">
                <Program title="Message Us" desc="Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi."/>
            </div>


            <div className="form">

                    <div className="form-names">
                    <TextField id="outlined-basic" label="First Name" className='userinputname ' variant="outlined" />
                    <TextField id="outlined-basic" label="Last Name" className='userinputname' variant="outlined"/>

                    </div>
                    <TextField id="outlined-basic" label="Subject" className='userinput2' variant="outlined"/>
                    <TextField id="outlined-basic" label="Email" className='userinput2' variant="outlined"/>
                    <Textarea placeholder="Write Your Message Here ..."/>
                    
                    <Button className="w-[350px] h-[5vh] rounded-3xl bg-indigo-600 hover:bg-indigo-700">SEND MESSAGE</Button>
                    


            </div>

    </div>
  )
}

export default MessageUs