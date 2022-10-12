import React from 'react'
import { useRouter } from "next/router";
import Tabs from './Tabs';
import Dimensions from './Dimensions';
import Review from './Review';
import StreetView from './StreetView';
import ListingDetails from './ListingDetails';

const Landing = () => {
    const router = useRouter();
  const path = router.query.tab
  console.log(path)
  return (
    
    <div className='bg-white p-6 w-full'>
        <Tabs/>
        {path === "listingdetails" || (path == undefined && <ListingDetails />)}
        {path === "dimensions" && <Dimensions />}
        {path === "review" && <Review />}
        {path === "streetview" && <StreetView />}

        </div>
  )
}

export default Landing