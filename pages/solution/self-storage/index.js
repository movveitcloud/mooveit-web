import React from "react";
import { PageLayout, PageContent } from "../../../components";
import PageTitle from "../../../components/shared/PageTitle";
import ContentLayout from "../../../components/layouts/ContentLayout";


const SelfStorage = () => {
  return <PageLayout>
<PageTitle name={"Self Storage"} />
    
<ContentLayout>
    <PageContent subtitle={"Hassle-free Self-storage "} content1={"At Movve It, we're all about making storage a breeze! Say goodbye to the hassle of searching for the perfect storage provider - our app brings all the top storage companies onto one platform, so you can compare, choose, and store with ease."}/>
    <PageContent subtitle={"Personal Storage Concierge"} content1={"Our app is like a personal storage concierge, matching you with the perfect provider based on your needs. Need climate-controlled storage for your vintage vinyl collection? We've got you covered. Looking for a budget-friendly option for your extra furniture?"} />
    <PageContent subtitle={"We'll find it for you in a jiffy!"} />
    <PageContent content1={"And the best part? You don't have to worry about hidden fees or surprises. We believe in transparency, so we charge a small commission on each storage service deal that takes place through our platform. "} />
</ContentLayout>
   
  </PageLayout>;
};

export default SelfStorage;
