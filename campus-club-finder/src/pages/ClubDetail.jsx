import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { useLocation } from 'react-router';
import musicIamge from '../assets/music.jpg'
import artImage from '../assets/art.jpg'
import roboticsImage from '../assets/robotics.jpg'
import codingImage from '../assets/coding.jpg'
import photographyImage from '../assets/photography.jpg'

export default function ClubDetail() {
    const {state} = useLocation();

    const clubImage = {
        'music': musicIamge,
        'art': artImage,
        'robotics': roboticsImage,
        'coding': codingImage,
        'photography': photographyImage
    }

    const [joinedClub, setJoinedClub] = useState(() => {
        const stored = localStorage.getItem('joinedClub')
        return stored ? JSON.parse(stored) : []
    })

    const handleJoinClub = () => {
        let confirmation = window.confirm('Do you want to join this club?')
        if (!confirmation)
            return; 
        const updatedClubs = [...joinedClub, state?.clubId]
        setJoinedClub(updatedClubs)
        localStorage.setItem('joinedClub', JSON.stringify(updatedClubs))
    }


  return (
    <>
    <NavBar />
    <section className='bg-gray-900 h-[calc(100vh-64px)] p-4'>
      <h1 className='text-4xl font-bold mb-4 text-white'>{state?.clubName}</h1>
      <p className='text-lg text-gray-300'>{state?.clubDescription}</p>
      {localStorage.getItem('joinedClub')?.includes(state?.clubId) ? (
        <p className='text-green-500 font-bold'>You have joined this club!</p>
      ) : <button className='bg-blue-600 text-white p-2 rounded hover:bg-blue-700 mt-4' onClick={handleJoinClub}>
        Join Club
      </button>}
      
      <img src={clubImage[state?.clubId]} alt={state?.clubName} className='mt-4 rounded-lg' />
      {
        state?.clubEvents && state.clubEvents.length > 0 ? (
          <div className='mt-8'>
            <h2 className='text-2xl font-bold mb-4 text-white'>Upcoming Events</h2>
            <ul className='space-y-4'>
              {state.clubEvents.map((event) => (
                <li key={event.name} className='bg-gray-800 p-4 rounded-lg'>
                  <h3 className='text-xl font-bold text-white'>{event.name}</h3>
                  <p className='text-gray-300'>{event.date}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : null
      }
    </section>
    </>
  )
}
