import React from 'react'
import { useNavigate } from 'react-router'

const ServiceUpdate = () => {
  const navigate = useNavigate()
  return (
    <div>
      ServiceUpdate - here, you will get the update
      <button
        className="border px-2 py-3 rounded text-xl bg-gray-500 text-white mb-5"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  )
}

export default ServiceUpdate