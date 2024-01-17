import React from 'react'
import Program from './Program'
import Teacher from './Teacher'

function Teachers() {
  return (
    <div>
        <Program title="Our Teachers" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!"/>
       
            <div className="teachers-container flex">
                <div className="tt">
                    <Teacher profImage="./images/teacher1.jpg" tname="Benjamin Stone" tsubject="Physics Teacher" tdesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eius suscipit delectus enim iusto tempora, adipisci at provident."/>
                    </div>
                    <div className="tt">  <Teacher profImage="./images/teacher2.jpg" tname="Katleen Stone" tsubject="Maths Teacher" tdesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eius suscipit delectus enim iusto tempora, adipisci at provident."/>
                    </div>
                    <div className="tt">  <Teacher profImage="./images/teacher3.jpg" tname="Sadie White" tsubject="Chemie Teacher" tdesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eius suscipit delectus enim iusto tempora, adipisci at provident."/>
                    </div>
            </div>


    </div>
  )
}

export default Teachers