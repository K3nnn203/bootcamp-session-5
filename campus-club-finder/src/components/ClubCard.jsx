import React from 'react'
import { useNavigate } from 'react-router'

export default function ClubCard({ clubId, clubName, clubShortDescription, clubDescription, clubImage, clubEvents }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/clubs/${clubId}`, {
        state: {
            clubId,
            clubName,
            clubDescription,
            clubImage,
            clubEvents
        },
    });
  };

  return (
    <div className='bg-gray-800 text-white p-4 m-4 ml-0 rounded-2xl lg:w-120 h-50 w-60 flex flex-col justify-around'>
        <h1 className='text-xl font-bold mb-2'>{clubName}</h1>
        <p>{clubShortDescription}</p>
        <div className='flex flex-col mt-auto'>
            <button className='bg-blue-600 text-white p-2 rounded hover:bg-blue-700' onClick={handleViewDetails}>
                View Details
            </button>
        </div>
    </div>
  )
}
