import { AccessTime, Groups, Message } from '@mui/icons-material'
import React from 'react'

function Course(props) {

   
  return (
    <div className='course-card'>

                
                <div className="course-picture" style={{background : `url('${props.background}')`}} ></div>




            <div className="course-info">

                <div className="course-time"><AccessTime /> {props.courseTime}</div>
                <div className="course-title">{props.courseTitle}</div>
                <div className="courseDescription">{props.courseDescription}</div>
              

            </div>


        <div className="course-stats">
                <div className="studentsNumber"><Groups/> 2,193 Students</div>
                <div className="courseComments"><Message/> 2</div>
        </div>



    </div>
  )
}

export default Course