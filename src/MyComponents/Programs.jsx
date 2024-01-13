import React from 'react'
import '../App.css' 
import ProgramText from './ProgramText'

import { AccountBalance, LocalLibrary } from '@mui/icons-material'

function Programs() {
  return (
    <div className='programs-sections'>

        
            <h1>Our Programs</h1>
            <p id='pp1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>
        

      <div className="semi-container">

        <div className="first-program">

              <div className="image1"></div>
              <ProgramText 
              title="We Are Excellent In Education" 
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo." 
              icon1= {<LocalLibrary/>} 
              icon2={<AccountBalance/>}
              state1="22,931 Yearly Graduates" 
              state2="150 Universities Worldwide"
              />
        </div>
        <div className="second-program">

              
              <ProgramText 
              title="Strive for Excellent" 
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo." 
              icon1={<LocalLibrary/>} 
              icon2={<AccountBalance/>} 
              state1="22,931 Yearly Graduates" 
              state2="150 Universities Worldwide"
              />


              <div className="image2"></div>
        </div>
        <div className="third-program">

              <div className="image3"></div>


              <ProgramText 
              title="Education is life" 
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo." 
              icon1={<LocalLibrary/>} 
              icon2={<AccountBalance/>} 
              state1="22,931 Yearly Graduates" 
              state2="150 Universities Worldwide"
              />
        </div>

        </div>



    </div>
  )
}

export default Programs