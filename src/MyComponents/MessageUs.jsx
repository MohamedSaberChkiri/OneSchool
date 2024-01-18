import React from 'react'
import Program from './Program'
import { TextField } from '@mui/material'
import { TextareaAutosize } from '@mui/base/TextareaAutosize';


function MessageUs() {
  return (
    <div className='mucont'>
            <div className="message-us-top mt-5">
                <Program title="Message Us" desc="Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi."/>
            </div>


            <div className="form">

                    <div className="form-names">
                    <TextField id="outlined-basic" label="First Name" variant="outlined" />
                    <TextField id="outlined-basic" label="Last Name" variant="outlined"/>

                    </div>
                    <TextField id="outlined-basic" label="Subject" variant="outlined"/>
                    <TextField id="outlined-basic" label="Email" variant="outlined"/>
                    
                    <TextareaAutosize placeholder="Write Your message Here ..."/>


            </div>

    </div>
  )
}

export default MessageUs