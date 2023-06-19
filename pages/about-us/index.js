import React from "react";
import { PageContent, PageLayout } from "../../components";
import PageTitle from "../../components/shared/PageTitle";
import ContentLayout from "../../components/layouts/ContentLayout";

const AboutUs = () => {
  return <PageLayout>
    <PageTitle name={"About Us"}/>
<ContentLayout>    <PageContent 
    subtitle={"Who we are"} 
    content1={"Welcome to Movve It! We're all about making your moving and storage experience a breeze. And guess what? We do it with the help of groundbreaking technologies like AI, ML, and AR orArtificial Intelligence, Machine Learning, and Augmented Reality."} 
   content2={"We aren’t just another run-of-the-mill storage company. Our team is comprised of passionate professionals who believe that work can be enjoyable. We foster a culture of collaboration, inclusivity, and productivity while maintaining a fun and friendly atmosphere."}
   content3={"We push the limits when it comes to creativity and innovation. We offer you something beyond the average storage solution and provide you with unique, personalized   experiences to suit your needs. We're the storage and moving company of the future, and we can't wait to show you what we're all about!"}
   />
<hr/>
<PageContent 
   subtitle={"Our Mission"}
   content1={"To provide an advanced online marketplace for self-storage and moving services that will effectively connect customers and service providers, bringing greater convenience for both."}
   content2={"To utilize Artificial Intelligence, Machine Learning, and Augmented Reality to devise ingenious industry solutions and thus simplify the moving and storage process for the customers."}
   content3={"We are committed to moving and storage easy and stress-free for everyone. Our aim is to deliver a smooth and stress-free moving experience for everyone, whether they are moving locally or long distance. We are devoted to providing the greatest quality of service to our valued customers through modern technology and innovation."}
   />
     <PageContent 
   subtitle={"Vision"}
   content1={"We envision a world where the power of Artificial Intelligence, Machine Learning and Augmented Reality revolutionizes the moving and storage industry. And we aren't testing the waters here! We're diving headfirst into the deep end, using life-enhancing technologies like Artificial Intelligence, Machine Learning, and Augmented Reality to take customer experience to the next level."}
   content2={"So, what does that mean for you? Well, let's start with AI and ML. We're using thesetechnologies to optimize our logistics and improve our customer service. That means faster, more efficient delivery and pick-up times for your storage needs. And our customer service team is top-notch, thanks to the power of AI and ML."}
   content3={"But, of course, that's not all. We're also utilizing Augmented Reality to take things to the next level.Say goodbye to the days of blindly renting a storage unit and hoping for the best. With our AR technology, you can visualize your storage unit before you even rent it! How cool is that?"}
   />
       </ContentLayout>

  </PageLayout>;
};

export default AboutUs;
