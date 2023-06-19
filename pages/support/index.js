import React from "react";
import { PageLayout, PageContent } from "../../components";
import PageTitle from "../../components/shared/PageTitle";
import ContentLayout from "../../components/layouts/ContentLayout";


const Support = () => {
  return <PageLayout>
<PageTitle name={"Help & Support"} />
<ContentLayout>
    <PageContent subtitle={"Got questions?"} content1={"How can we assist you? Do you have questions concerning our services? Our knowledgeable and friendly customer support team is available to assist you with any questions or concerns you may have. You can contact us through any of the channels listed below and we will do everything in our power to ensure your satisfaction."}/>
    <PageContent content1={"We understand that each customer's needs are unique, which is why we offer personalized service to ensure you find the right storage or moving service that fits your specific needs. We work with a variety of trusted and reliable service providers to ensure you get the best possible service at the most affordable price."}/>
    <PageContent content1={"Thank you for choosing Movve It for your self-storage and moving needs. We are dedicated to providing you with the highest level of service and support. If you have any questions or concerns, please do not hesitate to contact us."}/>
</ContentLayout>
  </PageLayout>;
};

export default Support;
