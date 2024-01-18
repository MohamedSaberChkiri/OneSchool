import React from 'react'

function Reason(props) {
  return (
    <div className='reason-container'>
            <div className="reason-icon">{props.reasonIcon}</div>
            <div className="reason-text">{props.reasonText}</div>

    </div>
  )
}

export default Reason