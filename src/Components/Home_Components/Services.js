import React from 'react'
import ServiceCard from './ServiceCard'

export default function Services() {
  return (
    <div className="container p-6 mx-auto mt-36">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
        <p className="mt-2 text-lg text-gray-600">We offer a wide range of services to meet your needs.</p>
      </div>
      <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-2">
        <ServiceCard
          imageSrc="/images/home/mediIcon.webm"
          heading="Medi"
          paragraph="This is a description of service one."
        />
        <ServiceCard
          imageSrc="/images/home/stayIcon.webm"
          heading="Stay"
          paragraph="This is a description of service two."
        />
        <ServiceCard
          imageSrc="/images/home/foodsIcon.webm"
          heading="Eats"
          paragraph="This is a description of service three."
        />
        <ServiceCard
          imageSrc="/images/home/rideIcon.webm"
          heading="Rides"
          paragraph="This is a description of service four."
        />
      </div>
    </div>
  )
}
