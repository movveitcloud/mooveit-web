import React from "react";
import { PageContent, PageLayout } from "../../components";
import PageTitle from "../../components/shared/PageTitle";

const AboutUs = () => {
  return <PageLayout>
    <PageTitle name={"About Us"}/>
    <div className="w-[90%] px-10">

    <PageContent 
    subtitle={"Who we are"} 
    content1={"Welcome to Movve It! We're all about making your moving and storage experience a breeze. And guess what? We do it with the help of groundbreaking technologies like AI, ML, and AR orArtificial Intelligence, Machine Learning, and Augmented Reality."} 
   content2={"We aren’t just another run-of-the-mill storage company. Our team is comprised of passionate professionals who believe that work can be enjoyable. We foster a culture of collaboration, inclusivity, and productivity while maintaining a fun and friendly atmosphere."}
   content3={"We push the limits when it comes to creativity and innovation. We offer you something beyond the average storage solution and provide you with unique, personalized   experiences to suit your needs."}
   />

   <PageContent 
   subtitle={"We're the storage and moving company of the future, and we can't wait to show you what we're all about!"}
   />
<hr/>
<PageContent 
   subtitle={"Our Mission"}
   />
     <PageContent 
   subtitle={"Vision"}
   />
       </div>

  </PageLayout>;
};

export default AboutUs;
