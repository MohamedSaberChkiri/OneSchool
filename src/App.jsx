

import './App.css'
import CopyRightSection from './MyComponents/CopyRightSection'
import Courses from './MyComponents/Courses'
import FeedBack from './MyComponents/FeedBack'
import Footer from './MyComponents/Footer'
import Home from './MyComponents/Home'
import MessageUs from './MyComponents/MessageUs'
import Programs from './MyComponents/Programs'
import Teachers from './MyComponents/Teachers'
import WhyChooseUs from './MyComponents/WhyChooseUs'






function App() {


  return ( 
    <>
     
     <section id='home'><Home/></section>
     <section id='courses'><Courses/></section>
     <section id='programs'><Programs/></section>
     <section id='teachers'><Teachers/></section>
    
    <FeedBack/>
    <WhyChooseUs/>
    <section id="contact"><MessageUs/></section>
    
    <Footer/>
    <hr />
    <CopyRightSection/>

      
    </>
  )
}

export default App
