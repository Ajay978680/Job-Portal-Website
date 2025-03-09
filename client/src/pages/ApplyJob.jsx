import React, { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import { assets } from '../assets/assets'
import kconvert from 'k-convert'
import moment from 'moment'

const Applyjob = () => {

  const { id } = useParams()
  const [JobData, setJobData] = useState(null)
  const { jobs } = useContext(AppContext)

  const fetchJob = async () => {
    const data = jobs.filter(job => job._id === id)
    if (data.length !== 0) {
      setJobData(data[0])
      console.log(data[0])
    }
  }

  useEffect(() => {
    if (jobs.length > 0)
      fetchJob()
  }, [id, jobs])

  return JobData ? (
    <>
      <Navbar />

      <div className='min-h-screen flex flex-col py-10 container px-4'>
        <div>
            <div className='flex p-8'>
              <div className=''>
                <img src={assets.company_icon} alt="" />
                <div>
                  <h1 className='mt-4'>
                    {JobData.title}
                  </h1>
                  <div className='flex gap-4 mt-4'>
                    <span>
                      <img src={assets.suitcase_icon} alt="" />
                      {JobData.companyId.name}
                    </span>
                    <span>
                      <img src={assets.location_icon} alt="" />
                      {JobData.location}
                    </span>
                    <span>
                      <img src={assets.person_icon} alt="" />
                      {JobData.level}
                    </span>
                    <span>
                      <img src={assets.money_icon} alt="" />
                      LPA: {kconvert.convertTo(JobData.salary)}
                    </span>
                  </div>
                </div>
              </div>
                <div>
                  <button className='border rounded'>Apply Now</button>
                  <p>Posted {moment(JobData.date).fromNow()}</p>
                </div>
            </div>
        </div>
      </div>

    </>
  ):
  (
    <Loading/>
  )
}

export default Applyjob