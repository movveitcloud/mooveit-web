import React from "react";
import { PageLayout, PageContent } from "../../../components";
import PageTitle from "../../../components/shared/PageTitle";
import ContentLayout from "../../../components/layouts/ContentLayout";


const PackingMoving = () => {
  return <PageLayout>
<PageTitle name={"Packing & Moving"} />
<ContentLayout>
<PageContent subtitle={"Simplified"} content1={"We understand that packing and moving can be a daunting task. That's why we've made it our mission to simplify the process with our innovative app."}/>
<PageContent subtitle={"Hire a Reliable Provider"} content1={"Our app allows you to easily hire a reliable moving and packaging service provider. Simply enter your requirements and our algorithm will connect you with the best service providers who specialize in those services. Our moving crew will then carefully pack your items and load them onto trucks, ensuring that your move is stress-free and seamless."}/>
<PageContent subtitle={"No Hidden Fees"} content1={"And the best part? You don't have to worry about hidden fees or surprises. We believe in transparency, so we charge a small commission on each packing and moving service deal that takes place through our platform. Our commission for packing and moving services is only 15% of the total transaction value, ensuring that you receive high-quality service at a fair price."}/>
<PageContent content1={"So why fret over packing and moving? Download the Movve It app today and let us handle the heavy lifting for you. It's time to sit back, relax, and enjoy your move!"} />
</ContentLayout>
    
   
  </PageLayout>;
};

export default PackingMoving;
