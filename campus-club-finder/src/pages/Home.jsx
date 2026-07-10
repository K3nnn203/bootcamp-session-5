import React from 'react'
import NavBar from '../components/NavBar'
import { useNavigate } from 'react-router';

export default function Home() {
  const navigate = useNavigate();

  const handleExploreClubs = () => {
    navigate('/clubs');
  };

  return (
    <>
      <NavBar />
      <section className='flex flex-col items-center justify-center h-[calc(100vh-64px)] bg-linear-to-r from-blue-950 to-gray-900 text-white'>
        <h1 className='text-6xl font-bold mb-4'>Find Clubs With Ease</h1>
        <p className='text-xl text-gray-300 mb-8'>Discover and join clubs that match your interests.</p>
        <button className='bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700' onClick={handleExploreClubs}>
          Explore Clubs
        </button>
      </section>
    </>
  )
}
