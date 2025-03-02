import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { assets, JobCategories, JobLocations } from '../assets/assets'

const JobListing = () => {
    const { isSearched, searchFilter, setSearchFilter } = useContext(AppContext)

    return (
        <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8'>
            {/* SideBar */}
            {/* Filter from Hero Section */}
            <div className='w-full lg:w-1/4 bg-white px-4'>
                {isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
                    <>
                        <h3 className='font-medium text-lg mb-4'>Current Search</h3>
                        <div className='mb-4 text-gray-600'>
                            {searchFilter.title && (
                                <span className='inline-flex items-center gap-2.5 bg-blue-50 border-blue-200 px-4 py-1.5 rounded'>
                                    {searchFilter.title}
                                    <img
                                        className='cursor-pointer'
                                        onClick={e => setSearchFilter(prev => ({ ...prev, title: "" }))}
                                        src={assets.cross_icon}
                                        alt="clear title filter"
                                    />
                                </span>
                            )}
                            {searchFilter.location && (
                                <span className='ml-2 inline-flex items-center gap-2.5 bg-red-50 border-blue-200 px-4 py-1.5 rounded'>
                                    {searchFilter.location}
                                    <img
                                        className='cursor-pointer'
                                        onClick={e => setSearchFilter(prev => ({ ...prev, location: "" }))}
                                        src={assets.cross_icon}
                                        alt="clear location filter"
                                    />

                                </span>
                            )}


                        </div>
                    </>
                )}
            </div>
            {/* Category filter */}
            <div className='max-lg-hidden'>
                <h4 className='font-medium text-lg py-4'>Search By Title</h4>
                <ul className='space-y-4 text-gray-600'>
                    {
                        JobCategories.map((category, index) => (
                            <li className='flex  gap-3 items-center' key={index}>
                                <input className='scale-125' type='checkbox' />
                                {category}
                            </li>
                        ))
                    }
                </ul>
            </div>


            {/* Search By Location */}
            <div className='max-lg-hidden'>
                <h4 className='font-medium text-lg py-4'>Search By Location</h4>
                <ul className='space-y-4 text-gray-600'>
                    {
                        JobLocations.map((category, index) => (
                            <li className='flex  gap-3 items-center' key={index}>
                                <input className='scale-125' type='checkbox' />
                                {category}
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* Job Listings */}

            <section className='w-full'>
                <h3>Latest Jobs for You</h3>
                <p>Get Your Desired Job from top Companies</p>
                <div>
                    
                </div>
            </section>


        </div>
    )
}

export default JobListing 
