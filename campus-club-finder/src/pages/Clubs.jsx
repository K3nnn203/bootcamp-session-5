import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import ClubCard from '../components/ClubCard'
import { clubs } from '../clubs.js'

export default function Clubs() {

  const [clubList, setClubList] = useState(clubs);

  const [view, setView] = useState('grid');
  const [sortBy, setSortBy] = useState('asc');

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setClubList((prevClubs) => {
      const sortedClubs = [...prevClubs].sort((a, b) => {
        if (e.target.value === 'asc') {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
      return sortedClubs;
    });
  };

  const handleChangeView = (e) => {
    setView(e.target.value)
  }

  return (
    <>
      <NavBar />
      <section className='justify-center min-h-screen bg-gray-900 text-white py-4 px-2 lg:px-12'>
        <h1 className='text-2xl font-bold mb-4'>Available Clubs</h1>
        <div className='flex flex-wrap gap-4 items-center'>
          <p>Toggle View:</p>
          <select name="view" id="view" className='bg-gray-800 text-white px-4 py-2 rounded' onChange={handleChangeView}>
            <option value="grid">Grid View</option>
            <option value="list">List View</option>
          </select>
          <p>Sort By:</p>
          <select name="sort-by" id="sort-by" className='bg-gray-800 text-white px-4 py-2 rounded' onChange={handleSortChange}>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>
        <div className={view === 'grid' ? 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-4 justify-items-center' : 'flex flex-col items-center mt-4'}>
          {clubList.map((club) => {
            return (
              <ClubCard
                key={club.id}
                clubId={club.id}
                clubName={club.name}
                clubShortDescription={club.shortDescription}
                clubDescription={club.description}
                clubEvents={club.events}
                clubImage={club.image}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}
