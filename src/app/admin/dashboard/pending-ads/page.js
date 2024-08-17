'use client';
import React from 'react';
import StayPendingCard from "@/Components/Admin_Components/StayPendingCard";

export default function Home() {
    const sampleStayDetails = {
        image: '/images/home/stay.jpg', // Update with the actual path to the image
        heading: 'Luxury Villa in Bali',
        line1: '3 bedrooms, 2 bathrooms',
        line2: 'Beautiful ocean view',
        line3: 'Private pool included',
        price: '$450 per night',
        paymentSlip: '/images/home/stay.jpg' // Update with the actual path to the payment slip
    };

    const handleApprove = () => {
        console.log('Stay approved');
        // Implement approval logic here
    };

    const handleReject = () => {
        console.log('Stay rejected');
        // Implement rejection logic here
    };

    return (
        <div className="container p-6 mx-auto">
            <h1 className="mb-4 text-3xl font-bold">Pending Stay Ads</h1>
            <StayPendingCard
                stayDetails={sampleStayDetails}
                onApprove={handleApprove}
                onReject={handleReject}
            />
        </div>
    );
}
