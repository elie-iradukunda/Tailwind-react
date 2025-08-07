import React from 'react'
import nvda from '../langingimage/nvda.svg'
import pic1 from '../langingimage/pic1.jpeg'
import pic2 from '../langingimage/pic2.jpeg'
import pic3 from '../langingimage/pic3.jpeg'
import pic4 from '../langingimage/pic4.jpeg'
const Landingpage = () => {
  return (
   <>

<div className='bg-green-100 flex justify-around'>
    <div className='flex space-x-2 p-4 items-center'>
   <img src={nvda} alt="" />
   <span>Main Menu</span>
    </div>
    <div>
<ul className='flex space-x-7 p-4 items-center '>
    <li>Shop</li>
    <li>Drivers</li>
    <li>Support</li>

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

</ul>
    </div>
</div>
<div>
    <div className='bg-black text-amber-100 p-5'>
        <ul className='flex space-x-8 ml-50'>
            <li>Drivers</li>
            <li>All Drivers</li>
            <li>GeForce Drivers</li>
           
           <select className='text-blue-400 '>
            <option value="#">Networking Drivers</option>
            <option value="#">Filmware dounloads</option>
            <option value="#">Infin band/ vip Drivers</option>
            <option value="#">Ethernet Drivers</option>
           </select>
            
        </ul>
    </div>
</div>


<main>
    <div className='flex justify-around bg-white max-w-6xl mx-auto p-20 m-10 rounded-2xl border shadow-2xl ring-amber-50'>
        <div>
            <h1 className='text-2xl font-bold'>Get Automatic Driver Updates</h1>
            <p>The NVIDIA App is the essential companion for PC gamers <br />
             and creators. Keep your PC up to date with the latest  <br />
             NVIDIA drivers and technology.

</p>
        </div>

        <div className='flex flex-col space-y-2'>
            <p>Best for :</p>
            <span className='bg-green-900 cursor-pointer rounded p-1'>Gamers / Creators</span>
            <p>Best for:</p>
            <span className='bg-green-900 cursor-pointer rounded p-1'>Professionals / Workstation Users</span>
        </div>
    </div>
<div className='flex justify-center space-x-3 max-w-6xl mx-auto'>
    <div>
  <div className="max-w-7xl ml-10 border-2 border-blue-200 p-8 w-[600px]">
    <h1 className="text-xl font-bold mb-4">Manual Driver Search</h1>

    <div className="flex items-center gap-2 mb-4 bg-white px-3 py-2 rounded shadow">
      <input
        type="text"
        placeholder="Search by product, product type or series"
        className="flex-grow outline-none"
      />
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

    </div>

    <div className="flex flex-col gap-2.5 mb-4">
      <select className="p-2 rounded  border-gray-400 outline-none border-2">
        <option value="#">Select product by category</option>
      </select>
      <select className="p-2 rounded  border-gray-400 outline-none border-2">
        <option value="#">Select product by Series</option>
      </select>
      <select className="p-2 rounded  border-gray-400 outline-none border-2">
        <option value="#">Select product</option>
      </select>
      <select className="p-2 rounded  border-gray-400 outline-none border-2">
        <option value="#">Select operating system</option>
      </select>
      <select className="p-2 rounded  border-gray-400 outline-none border-2">
        <option value="#">English (US)</option>
      </select>
    </div>

    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
      Find
    </button>
  </div>
</div>
<div className='flex space-x-8 ml-3 max-w-5xl w-full p-8 flex-col'>
<div className='p-4 space-x-7 flex' >
<div>

<img src={pic1} alt="" />
<p className='font-bold text-2'>Gaming hardware / <br />
Product</p>

<span className='mt-10 font-bold text-xl'> GeForce RTX™ 50  <br />
Series Graphics  be
    Cards and <br />
     Desktops</span>



<p className='mt-10 '>
    
GeForce RTXTM graphics cards bring <br />
 game-changing AI capabilities to gamers  <br />
 and creators. Multiply performance with NVIDIA DLSS 4, <br />
  generate images at unprecedented speed,  <br />
  and unleash your creativity with NVIDIA Studio.


</p>
    

</div>




<div>
   
<img src={pic2} alt="" />
<p>Gaming hardware / <br />
Product</p>

<span className='mt-10 font-bold text-xl'> GeForce RTX™ 50  <br />
Series Laptops
    </span>



<p className='mt-10'>
    
The world's fastest laptops for <br />
 gamers and creators. Multiply <br />
  performance with NVIDIA DLSS 4, <br />
   generate images at unprecedented speed,  <br />
   and unleash your creativity with NVIDIA Studio. <br />
    All in the thinnest and longest <br />
     lasting RTX laptops, optimized by Max-Q.


</p>
    </div>
    </div>


<div className=' flex space-x-7'>
  <div className='gray-shadow p-6 rounded-lg'>
    
<img src={pic3} alt="" />
<p>Gaming hardware / <br />
Product</p>

<span className='mt-10 font-bold text-xl'>Students <br />
Recomanded <br />
Laptops</span>



<p className='mt-10'>
    
Featuring specialized AI  <br />
technologies, 50 Series laptops <br />
 accelerate top applications to help  <br />
 students learn, create,  <br />
 and game faster than an average laptop.


</p>
    </div>



  <div>
<img src={pic4} alt="" />
<p>Gaming hardware / <br />
Product</p>

<span className='mt-10 font-bold text-xl'>NVIDIA DLSS </span>



<p className='mt-10'>
    

Accelerating  <br />
Performance  <br />
in Your Favorite Games. 


</p>
    
</div>
</div>
</div>


</div>
</main>

   
   
   </>
  )
}

export default Landingpage
