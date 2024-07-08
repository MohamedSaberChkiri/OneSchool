import React from "react";

function Teacher(props) {
  return (
    <div className="teacher-card-container">
      <img
        src={props.profImage}
        alt="teacher image"
        className="teacher-image object-cover "
      />
      <div className="prof-name">{props.tname}</div>
      <div className="prof-subject">{props.tsubject}</div>
      <div className="prof-description">{props.tdesc}</div>
    </div>
  );
}

export default Teacher;
