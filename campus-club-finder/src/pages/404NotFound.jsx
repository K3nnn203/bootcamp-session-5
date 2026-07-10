import React from 'react'

export default function NotFound() {
  return (
    <section className='bg-gray-900 h-screen p-4 flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold text-gray-300'>404 - Page Not Found</h1>
      <p className='text-lg text-gray-300'>The page you are looking for does not exist.</p>
      <button className='bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 mt-4' onClick={() => window.location.href = '/'}>
        Back to Home
      </button>
    </section>
  )
}
