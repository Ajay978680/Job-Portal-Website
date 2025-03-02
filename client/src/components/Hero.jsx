import React, { useContext, useRef } from 'react';
import { assets } from '../assets/assets';
import { AppContext} from '../context/AppContext';

const Hero = () => {

    const {setSearchFilter,setIsSearched} = useContext(AppContext)

    const titleRef=useRef(null)
    const locationRef=useRef(null)

    const onSearch = ()=>{
        setSearchFilter({
            title: titleRef.current.value,
            location : locationRef.current.value
        })
        setIsSearched(true)
    }

  return (
    <div className='container 2xl:px-20 mx-auto my-10'>
      <div className='bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'>Jobs to Apply</h2>
        <p className='mb-8 max-w-xl mx-auto text-sm font-light px-5'>
          Your Next Big Career Move Starts Here - Explore the Best Job For You.
        </p>

        {/* Search and Location in One Line */}
        <div className='flex items-center bg-white rounded-xl text-gray-600 max-w-2xl mx-auto p-2 shadow-md'>
          {/* Search Input */}
          <div className='flex items-center flex-1 border-r border-gray-300 pr-2'>
            <img src={assets.search_icon} alt="Search" className='w-5 h-5 mx-2' />
            <input 
              type="text" 
              placeholder='Search your Job' 
              className='text-sm p-2 outline-none w-full'
              ref={titleRef}
            />
          </div>

          {/* Location Input */}
          <div className='flex items-center flex-1 pl-2'>
            <img src={assets.location_icon} alt="Location" className='w-5 h-5 mx-2' />
            <input 
              type="text" 
              placeholder='Location' 
              className='text-sm p-2 outline-none w-full'
              ref={locationRef}
            />
          </div>

          {/* Search Button */}
          <button 
            onClick={onSearch}
            className='bg-blue-600 text-white px-6 py-2 rounded-xl shadow-md hover:bg-blue-700 transition ml-4'
          >
            Search
          </button>
        </div>
      </div>
      <div className='border border-gray-300 shadow-md mx-2 p-6 rounded-md'>
        <div className='flex flex-wrap justify-center items-center mt-5 gap-x-6 gap-y-4 lg:gap-16 border border-gray-300 shadow-md mx-2 p-6 rounded-md '>
            <p className='font-medium'>Trusted By</p>
            <img src={assets.microsoft_logo} alt=""  className='h-6' />
            <img src={assets.amazon_logo} alt=""   className='h-6'/>
            <img src={assets.walmart_logo} alt=""  className='h-6'/>
            <img src={assets.accenture_logo} alt="" className='h-6' />
            <img src={assets.adobe_logo} alt=""  className='h-6'/>
            <img src={assets.samsung_logo} alt="" className='h-6' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
