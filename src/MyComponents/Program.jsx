import React from 'react'
import '../App.css'

function Program(props) {
  return (
    <div className='flex flex-col items-center justify-center proText ' data-aos="fade-up">

<h1>{props.title}</h1>
<p id='pp1'>{props.desc}</p>
    </div>
  )
}

export default Program