import React from 'react'
import Image1 from './images/course1.jpg'
import Image2 from './images/course2.jpg'
import Image3 from './images/course3.jpg'


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Course from './Course'

function Courses() {

  const coursesData = [
    { title: "Study Law of Physics", description: "Lorem ipsum dolor sit arnet ipsa nulla adipisicing elit.", bg: Image1 },
    { title: "Logo Design Course", description: "Lorem ipsum dolor sit arnet ipsa nulla adipisicing elit." , bg : Image2 },
    { title: "Js Programming Language", description: "Lorem ipsum dolor sit arnet ipsa nulla adipisicing elit." , bg : Image3 }
   
  ];

  return (
    <div className='courses-container'>

        <div className="colored-part">
            <h1 className='text-white' data-aos="fade-up">Courses</h1>

        </div>

        <div className="white-part">
      <div className='carousel-container '>
        <Carousel
      opts={{
        align: "center",
      }}
      className="w-full sm:w-max"
      data-aos="fade-up"
    >
      <CarouselContent >
        {coursesData.map((course, index) => (
          <CarouselItem key={index} className="sm:basis-1/3 overflow-x-hidden">
            <div>
              {/* Passing different props to each Course component */}
              <Course
                key={index}
                background = {course.bg}
                courseTime ="4 Lessons / 12 Week"
                courseTitle={course.title}
                courseDescription={course.description}
                // Add more props as needed
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
        </div>


    </div>
  )
}

export default Courses