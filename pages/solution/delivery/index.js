import React from "react";
import { PageContent, PageLayout } from "../../../components";
import PageTitle from "../../../components/shared/PageTitle";


const Delivery = () => {
  return <PageLayout>
<PageTitle name={"Delivery Solution"} />
<div className="w-[90%] px-20">

<PageContent subtitle={"Convenience"} content1={"We understand that convenience is key. That's why our app allows customers to have their goods delivered straight to their doorstep, at a time and location that suits them best. Need to change the delivery location? No problem! Our app makes it easy to update your delivery details with just a few clicks."}/>
<PageContent subtitle={"Transparency"} content1={"We believe in transparency, which is why we charge a small commission on each delivery to cover our costs. Our commission for delivery services is 20% of the total transaction value, ensuring that our customers receive high-quality service at a fair price."}/>
<PageContent subtitle={"Efficiency"} content1={"With Movve It, you can sit back, relax, and let us handle the delivery. Our reliable and efficient service ensures that your goods are delivered safely and securely, right to your door. Download our app today and experience hassle-free delivery like never before."}/>
    </div>
   
  </PageLayout>;
};

export default Delivery;
