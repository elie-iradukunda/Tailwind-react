import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const FoodList = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate=useNavigate()

  const handleclick=()=>{
    navigate('/addfood')
  }

  const deleteFood=async(id)=>{
    try {
      const response=await axios.delete(`http://localhost:8000/api/deleteByid/${id}`)
      console.log("food is deleted",response.data)
      window.location.reload()

    } catch (err) {
      console.log('fetching error',err.message)
    }
  }

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/getallFood');
        setFoods(response.data); 
      } catch (err) {
        setError('Failed to fetch foods');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  if (loading) return <p>Loading foods...</p>;
  if (error) return <p className='text-red-500'>{error}</p>;

  return (
    <div>
      <h2 className='bg-amber-900'>Food List</h2>
      
      <table className="w-full border border-gray-400 text-left">
  <thead className="bg-gray-200">
    <tr>
      <th className="border border-gray-400 px-4 py-2">#</th>
      <th className="border border-gray-400 px-4 py-2">Title</th>
      <th className="border border-gray-400 px-4 py-2">Description</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {foods.map((food, index) => (
     <tr key={food.id} className="bg-white hover:bg-blue-300">
  <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
  <td className="border border-gray-400 px-4 py-2">{food.title}</td>
  <td className="border border-gray-400 px-4 py-2">{food.description}</td>
  <td className="border border-gray-400 px-4 py-2">
    <button onClick={() => deleteFood(food.id)} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
      Delete
    </button>
  </td>
</tr>

    ))}
  </tbody>
</table>
<div className='flex justify-center p-4'>
       <button className='bg-blue-500 text-2xl rounded p-2 text-white hover:bg-blue-600 cursor-pointer flex justify-center' onClick={handleclick}>ADD FOOD </button>
       </div>
    </div>

   
  );
};

export default FoodList;
