import React from 'react'
import { useRouter } from "next/router";
import Tabs from './Tabs';

const ListingDetails = () => {
    const router = useRouter();
  const path = router.query.tab
  console.log(path)
  const contentArray=[
    {headingLeft:"Storage Type",contentLeft:"Warehouse",headingRight:"Storage Size",contentRight:"Warehouse"},
    {headingLeft:"Price",contentLeft:"$720/month | $4.20/month",headingRight:"Price",contentRight:"$720/month | $4.20/month"},
    {headingLeft:"Security Deposit",contentLeft:"$120",headingRight:"Minimum Rental",contentRight:"30 Minutes"},
    {headingLeft:"Floor",contentLeft:"Ground level",headingRight:"Security",contentRight:"Fingerprint system"},
  ]
  return (
    
    <div className='m-0'>
       
       
       

        {contentArray.map(({headingLeft,contentLeft,headingRight,contentRight},i)=>{
            return(
                <div className='flex justify-start gap-10 mb-8' key={i}>
                <div className='flex flex-col w-1/2 align-top '>
                    <p className="text-[14px]">{headingLeft}</p>
                    <p className='text-[#959595] text-[12px] mt-4'>{contentLeft}</p>
                </div>
                <div className='flex flex-col w-1/2 align-top justify-start '>
                    <p className="text-[14px]">{headingRight}</p>
                    <p className='text-[#959595] text-[12px] mt-4'>{contentRight}</p>
                </div>
            </div>

            )
        })}
        
       
        </div>
  )
}

export default ListingDetails