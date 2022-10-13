import React, { useState } from 'react'
import { useRouter } from "next/router";
import Tabs from './Tabs';
import Dimensions from './Dimensions';
import Review from './Review';
import StreetView from './StreetView';
import ListingDetails from './ListingDetails';

const Landing = () => {
const [activeTab, setActiveTab] = useState(0)
  
  return (
    
    <div className='bg-white p-6 w-full'>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
       
        {activeTab === 0 && <ListingDetails />}
        {activeTab === 1 && <Dimensions />}
        {activeTab === 2 && <Review />}
        {activeTab === 3 && <StreetView />}

        </div>
  )
}

export default Landing