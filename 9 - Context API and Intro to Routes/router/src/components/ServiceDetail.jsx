import React from 'react'
import { useNavigate } from 'react-router'

const ServiceDetail = () => {
  const navigate = useNavigate()
  return (
    <div>ServiceDetail - so, you learn more...
      <button
        className="border px-2 py-3 rounded text-xl bg-gray-500 text-white mb-5"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  )
}

export default ServiceDetail