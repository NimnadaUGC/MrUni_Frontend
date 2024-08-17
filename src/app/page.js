import Hero from "@/Components/Home_Components/Hero";
import Service from "@/Components/Home_Components/Service";
import Services from "@/Components/Home_Components/Services";
import SocialSidebar from "@/Components/SocialSidebar";

export default function Home() {
  return (
    <div className="mx-36">
      <Hero />

      <div className="mt-16">
        <Services />
      </div>
      <SocialSidebar />
      <div className="container p-6 mx-auto space-y-56">
        <Service
          imageSrc="/images/home/medi2.jpg"
          heading="Medi"
          paragraph="This is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one."
          imageOnLeft={true}
        />
        <Service
          imageSrc="/images/home/ride.jpg"
          heading="Ride"
          paragraph="This is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one."
          imageOnLeft={false}
        />
        <Service
          imageSrc="/images/home/stay.jpg"
          heading="Stay"
          paragraph="This is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one."
          imageOnLeft={true}
        />
        <Service
          imageSrc="/images/home/eats.jpg"
          heading="Eats"
          paragraph="This is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one.his is a description of service one."
          imageOnLeft={false}
        />
      </div>

     

    </div>
  );
}
