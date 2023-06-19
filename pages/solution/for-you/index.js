import React from "react";
import { PageLayout, PageContent} from "../../../components";
import PageTitle from "../../../components/shared/PageTitle";

const OurCustomer = () => {
  return <PageLayout>
<PageTitle name={"Movveit for you!"} />
    
<div className="w-[90%] px-20">
  <PageContent 
  subtitle={"Logistics tailored to your needs"}
  content1={"If you fall into these categories, we believe that our services are perfect for anyone who's looking to make their moving or self-storage experience a breeze."}
  />
<PageContent 
content3={"- Families who are relocating to a new home and want to ensure that their belongings are safe and secure during the transition."}
content1={"- Busy professionals with no time to manage their storage needs: we want you to focus on what you do best while we do what we do best—helping with the heavy lifting."}
content2={"- College students who are always on the move and need a quick and easy solution for storing their belongings during summer breaks or between semesters."}/>
 <PageContent
    content1={"- Small business owners who need a reliable moving and storage solution to help them manage their inventory and equipment."}
    content2={"- Anyone who’s tired of dealing with the headaches and hassles of traditional moving and self-storage companies. With Movve It, you can say goodbye to stress and welcome to a seamless and hassle-free experience."} 
 />

 <PageContent     content3={"So why wait? Download the Movve It app today and discover how easy moving and self-storage can be!"}
/>
 </div>
   
  </PageLayout>;
};

export default OurCustomer;
