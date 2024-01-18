import React from 'react'
import Program from './Program'
import Reason from './Reason'
import { AccountBalance, LocalLibrary } from '@mui/icons-material'

function WhyChooseUs() {
  return (
    <div className='why-choose-us-container'>

            <Program title="Why Choose Us " desc=""/>

            <div className="bottom-side-wsus">

                            <div className="wsus-left">
                                <div className="grund-container">
                                    <Reason reasonIcon = {<LocalLibrary />} reasonText='22,931 Yearly Graduates'/>
                                    <Reason reasonIcon={<AccountBalance/>} reasonText='150 Universities Worldwide'/>
                                    <Reason reasonIcon= {<LocalLibrary/>}reasonText='Top Professionals in The World'/>
                                    <Reason reasonIcon={<AccountBalance/>}reasonText='Expand Your Knowledge'/>
                                    <Reason reasonIcon= {<LocalLibrary/>}reasonText='Best Online Teaching Assistant Courses'/>
                                    <Reason reasonIcon={<AccountBalance/>} reasonText='Best Teachers'/>
                                </div>
                            </div>
                            <div className="wsus-right">
                                
                            </div>

            </div>



    </div>
  )
}

export default WhyChooseUs