import React from 'react'

function FeedBack() {

    const style1 = {
        background :'url("./images/teacher1.jpg")'
    }
  return (
    <div className='feedback-container'>

        <div className="on-feed-back">

            <div className="feedback-pic" style={style1} ></div>
            <div className="name">Jerome Jensen</div>
            <div className="feedback">“ Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum rem soluta sit eius necessitatibus voluptate excepturi beatae ad eveniet sapiente impedit quae modi quo provident odit molestias! Rem reprehenderit assumenda ”</div>
        </div>


    </div>
  )
}

export default FeedBack