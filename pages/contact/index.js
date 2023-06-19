import React from "react";
import { PageLayout, ContactCard } from "../../components";
import { ContactContent } from "../../helpers/data";
import PageTitle from "../../components/shared/PageTitle";

const Contact = () => {
  return <PageLayout>
    <PageTitle name={"Contact Us"}/>

    <p className="flex-grow sm:block mt-4 md:mt-4 text-info text-center">
        You need our evolving technology and expertise to integrate and transform your technology processes.
      </p>

      <div className="flex justify-center mt-5">
        <a
          href="mailto:info@unotelos.com"
          className="btn border-black bg-black text-white md:btn-wide hover:bg-accent hover:border-accent hover:text-black  rounded-full font-normal normal-case">
          Speak to an expert
          <span>
            {/* <ArrowRightIcon className="w-4 ml-3" /> */}
          </span>
        </a>
      </div>

      <div className="flex flex-col py-8 lg:py-16 lg:flex-row gap-8">
        <div
          initial={{ y: -75, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          className="w-full lg:w-1/2 grid md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 h-fit">
          {ContactContent.map((item, i) => (
            <ContactCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>

  </PageLayout>;
};

export default Contact;