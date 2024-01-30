import React from 'react'
import Feddd from './images/graduated.jpg'

function FeedBack() {

    
  return (
    <div className='feedback-container'>

        <div className="on-feed-back">

            <img className="feedback-pic" src={Feddd} ></img>
            <div className="name">Jerome Jensen</div>
            <div className="feedback">“ Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum rem soluta sit eius necessitatibus voluptate excepturi beatae ad eveniet sapiente impedit quae modi quo provident odit molestias! Rem reprehenderit assumenda ”</div>
        </div>


    </div>
  )
}

export default FeedBack