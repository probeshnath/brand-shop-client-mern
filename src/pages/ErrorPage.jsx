import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-10">
        <h1 className="text-4xl font-bold mb-4">Error 404</h1>
        <p className="text-lg text-gray-600 mb-6">Page not found</p>
        <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          Go to Home
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage