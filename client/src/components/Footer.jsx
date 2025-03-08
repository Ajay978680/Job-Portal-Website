import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center container px-4 2xl:px-20 mx-auto justify-between gap- py-3 mt-10'>
        <img className='' width={160} src={assets.logo} alt="" />
        <p className='flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @spark.dev | All Rights are reserved.</p>
        <div className='flex gap-2.5'>
            <img width={38} src={assets.facebook_icon} alt="" />
            <img width={38} src={assets.instagram_icon} alt="" />
            <img width={38} src={assets.twitter_icon} alt="" />
        </div>
    </div>
  )
}

export default Footer