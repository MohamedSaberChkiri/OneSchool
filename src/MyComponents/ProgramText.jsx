import React from 'react'

function ProgramText(props) {
  return (
    <div className='programs-text-container sm:ml-[100px] ml-0' data-aos="fade-left">

        <h2 className="p-title">
                {props.title}
        </h2>

        <p className="p-description">

                {props.description}
        </p>

            <div className="p-state-container">

                <div className="p-state text-indigo-500">   <span>{props.icon1}</span>  {props.state1}    </div>
                <div className="p-state text-indigo-500">   <span>{props.icon2}</span>  {props.state2}    </div>

            </div>


    </div>
  )
}

export default ProgramText