import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Addfood = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post('http://localhost:8000/api/addfood', {
        title,
        description,
      })

      setTitle('')
      setDescription('')
      setMessage(`Food added successfully: ${response.data.title}`)
      navigate('/')
    } catch (err) {
      const errorMsg = err.response?.data?.message || ' Something went wrong'
      setMessage(errorMsg)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-200 p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Add New Food</h2>

        {message && (
          <p className="text-center text-sm mb-4 text-green-700 font-medium">{message}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Food Title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            placeholder="Food Description"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md text-lg font-semibold hover:bg-gray-500 transition duration-200"
          >
            Add Food
          </button>
        </form>
      </div>
    </div>
  )
}

export default Addfood
