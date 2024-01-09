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
  return (
    <div className='courses-container'>

        <div className="colored-part">
            <h1>Courses</h1>

        </div>

        <div className="white-part">

        <Carousel
      opts={{
        align: "start",
      }}
      className="max-w-[950px]"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Course/>
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