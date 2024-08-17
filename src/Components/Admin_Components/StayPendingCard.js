'use client';
import React from 'react';
import Image from 'next/image';

const StayPendingCard = ({ stayDetails, onApprove, onReject }) => {
    if (!stayDetails) return null;

    return (
        <div className="p-6 mb-6 rounded-lg shadow-md bg-slate-300">
            {/* Stay Card Details */}
            <div className="flex p-5 m-5 bg-white rounded-lg hover:scale-105">
                <div className="w-1/3">
                    <Image
                        src={stayDetails.image}
                        alt={stayDetails.heading}
                        width={200}
                        height={200}
                        objectFit="cover"
                        className="h-auto rounded"
                    />
                </div>
                <div className="w-2/3 ml-4">
                    <h2 className="text-xl font-bold">{stayDetails.heading}</h2>
                    <p>{stayDetails.line1}</p>
                    <p>{stayDetails.line2}</p>
                    <p>{stayDetails.line3}</p>
                    <p className="text-lg font-semibold">{stayDetails.price}</p>
                </div>
            </div>

            {/* Payment Slip Photo */}
            <div className="mt-4">
                <h3 className="mb-2 text-lg font-semibold">Payment Slip</h3>
                <Image
                    src={stayDetails.paymentSlip}
                    alt="Payment Slip"
                    width={300}
                    height={300}
                    objectFit="cover"
                    className="h-auto rounded"
                />
            </div>

            {/* Approve & Reject Buttons */}
            <div className="flex mt-4 space-x-4">
                <button
                    onClick={onApprove}
                    className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none"
                >
                    Approve
                </button>
                <button
                    onClick={onReject}
                    className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none"
                >
                    Reject
                </button>
            </div>
        </div>
    );
};

export default StayPendingCard;
