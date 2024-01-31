import React from 'react'
import '../App.css' 
import ProgramText from './ProgramText'

import { AccountBalance, LocalLibrary } from '@mui/icons-material'
import Program from './Program'

function Programs() {
  return (
    <div className='programs-sections'>

        
          <Program title="Our Programs" desc= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!"/>
        

      <div className="semi-container">

        <div className="first-program sm:justify-between justify-center">

              <div className="image1 sm:h-[400px] sm:w-[400px] w-[200px] h-[200px]"></div>
              <ProgramText 
              title="We Are Excellent In Education" 
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo." 
              icon1= {<LocalLibrary/>} 
              icon2={<AccountBalance/>}
              state1="22,931 Yearly Graduates" 
              state2="150 Universities Worldwide"
              />
        </div>
        <div className="second-program  sm:justify-between justify-center">

              
              <ProgramText 
              title="Strive for Excellent" 
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo." 
              icon1={<LocalLibrary/>} 
              icon2={<AccountBalance/>} 
              state1="22,931 Yearly Graduates" 
              state2="150 Universities Worldwide"
              />


              <div className="image2 sm:h-[400px] sm:w-[400px] w-[200px] h-[200px]"></div>
        </div>
        <div className="third-program  sm:justify-between justify-center">

              <div className="image3 sm:h-[400px] sm:w-[400px] w-[200px] h-[200px] "></div>


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