import React from 'react'
import '../App.css'
import Header from './Header'
import SignUp from './SignUp'
import HomeText from './HomeText'


function Home() {
  return (
    <div className='home-container'>

        <Header/>
        <HomeText/>
        <SignUp/>
        

    </div>
  )
}

export default Home