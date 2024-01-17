import React from 'react'


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
    { title: "Study Law of Physics", description: "Lorem ipsum dolor sit arnet ipsa nulla adipisicing elit.", bg: './images/course1.jpg' },
    { title: "Logo Design Course", description: "Lorem ipsum dolor sit arnet ipsa nulla adipisicing elit." , bg : './images/course2.jpg' },
    { title: "Js Programming Language", description: "Lorem ipsum dolor sit arnet ipsa nulla adipisicing elit." , bg : './images/course3.jpg' }
   
  ];

  return (
    <div className='courses-container'>

        <div className="colored-part">
            <h1 className='text-white'>Courses</h1>

        </div>

        <div className="white-part">

        <Carousel
      opts={{
        align: "start",
      }}
      className="max-w-[950px]"
    >
      <CarouselContent>
        {coursesData.map((course, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
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
  )
}

export default Courses