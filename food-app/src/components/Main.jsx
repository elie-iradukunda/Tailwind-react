import React from 'react';
import d1 from '../assets/d1.jpeg';
import d2 from '../assets/d2.jpeg';

const Main = () => {
  return (
    <main className="bg-green-400 py-10 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-blue-100 rounded-2xl shadow-md p-6  mt-11">
        <div className="text-center md:text-left ">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            Welcome to Our Website
          </h1>
          <p className="text-lg text-gray-500">
            Explore great content and enjoy your visit!
          </p>
        </div>
        <img
          src={d1}
          alt="Banner"
          className="w-full md:w-[400px] h-auto rounded-lg object-cover"
        />
      </div>

      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-blue-100 rounded-2xl shadow-md p-6 mt-5'>
        <div>
<h2>What we do</h2>
<p>Lorem ipsum, dolor sit amet consectetur 
    adipisicing elit. Aliquid, doloribus assumenda nulla illum odio harum non necessitatibus, praesentium nemo pariatur officia, voluptatem dolorum 
    debitis sed obcaecati vel porro nisi molestias?</p>
        </div>
        <img src={d2} alt="mainimage" className='w-full object-cover md:w-[300px]' />
      </div>


      <div>
        <div className="flex flex-nowrap overflow-x-scroll gap-4 rounded-3xl scrollbar-hide ">
            <img src={d1} alt=""  className="min-w-[250px] md:min-w-[300px] rounded-xl object-cover transition-transform duration-300 ease-in-out hover:scale-105" />
             <img src={d1} alt=""  className="min-w-[250px] md:min-w-[300px] rounded-xl object-cover transition-transform duration-300 ease-in-out hover:scale-105" />
              <img src={d1} alt="" className="min-w-[250px] md:min-w-[300px] rounded-xl object-cover transition-transform duration-300 ease-in-out hover:scale-105" />
               <img src={d1} alt=""  className="min-w-[250px] md:min-w-[300px] rounded-xl object-cover transition-transform duration-300 ease-in-out hover:scale-105"/>
                <img src={d1} alt=""  className="min-w-[250px] md:min-w-[300px] rounded-xl object-cover transition-transform duration-300 ease-in-out hover:scale-105"/>
                 <img src={d1} alt=""  className="min-w-[250px] md:min-w-[300px] rounded-xl object-cover transition-transform duration-300 ease-in-out hover:scale-105"  />
                  <img src={d1} alt=""  className="min-w-[250px] md:min-w-[300px] rounded-xl object-cover transition-transform duration-300 ease-in-out hover:scale-105"/>
        </div>
      </div>
    </main>
  );
};

export default Main;
