import React from 'react'
import NavBar from '../components/NavBar'

export default function About() {
  return (
    <>
      <NavBar />
      <section className='bg-gray-900 h-[calc(100vh-64px)] p-4'>
        <h1 className='text-4xl font-bold mb-4 text-white'>About Us</h1>
        <p className='text-lg text-white'>
          Campus Club Finder is a web application designed to help students discover and join clubs that match their interests.
          Our platform provides an easy-to-use interface for browsing through various clubs, learning about their activities, and connecting with like-minded individuals on campus.
        </p>
      </section>
    </>
  )
}
