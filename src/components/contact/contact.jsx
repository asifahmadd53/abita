import React from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import Title from '../Title';
import InfoCard from "./InfoCard";

export function ContactSection14() {
  return (
    <>
      <Title 
        heading="Contact"
        text="Welcome to Contact Section"
      />
      <div className="pt-32">
        <div className="w-[90%] m-auto items-center justify-center sm:justify-start md:justify-between flex flex-col gap-3 ss:flex-wrap ss:flex-row md:flex-nowrap sm:gap-10">
          <InfoCard 
            icon={
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF">
                <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>}
            title="Our Location"
            content="House #5, Street Number #98, Brasilia- 70000-000, Brazil."
            bgColor="bg-[#B18B5E]"
          />
          <InfoCard 
            icon={
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#FFFFFF"/>
              </svg>}
            title="Email Us"
            content="contact@company.com"
            bgColor="bg-[#B18B5E]"
          />
          <InfoCard 
            icon={
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF">
                <path d="M5.11596 12.7268L8.15456 9.08666C8.46255 8.69067 8.61655 8.49267 8.69726 8.27061C8.76867 8.07411 8.79821 7.86486 8.784 7.65628C8.76793 7.42055 8.67477 7.18766 8.48846 6.72187L7.77776 4.94513C7.50204 4.25581 7.36417 3.91116 7.12635 3.68525C6.91678 3.48618 6.65417 3.3519 6.37009 3.29856C6.0477 3.23803 5.68758 3.32806 4.96733 3.50812L3 4.00002C3 14 9.99969 21 20 21L20.4916 19.0324C20.6717 18.3122 20.7617 17.952 20.7012 17.6297C20.6478 17.3456 20.5136 17.083 20.3145 16.8734C20.0886 16.6356 19.7439 16.4977 19.0546 16.222L17.4691 15.5878C16.9377 15.3752 16.672 15.2689 16.4071 15.2608C16.1729 15.2536 15.9404 15.3013 15.728 15.4002C15.4877 15.512 15.2854 15.7144 14.8807 16.1191L11.7943 19.1569" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>}
            title="Call Us"
            content="+55 61 1234-5678"
            bgColor="bg-[#B18B5E]"
          />
        </div>
        <section className="px-8 py-8 lg:py-16">
          <div className="container mx-auto text-center">
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-4 !text-base lg:!text-2xl"
            >
              Customer Care
            </Typography>
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-4 !text-3xl lg:!text-5xl"
            >
              We&apos;re Here to Help
            </Typography>
            <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
              Whether it&apos;s a question about our services, a request for
              technical assistance, or suggestions for improvement, our team is
              eager to hear from you.
            </Typography>
            <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
              <div className="lg:w-full h-[32rem] lg:h-[37rem] bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  frameBorder="0"
                  title="map"
                  marginHeight="0"
                  marginWidth="0"
                  scrolling="no"
                  src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                  style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
                ></iframe>
                <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                  <div className="lg:w-1/2 px-6">
                    <Typography
                      variant="small"
                      className="title-font font-semibold text-gray-900 tracking-widest text-xs"
                    >
                      ADDRESS
                    </Typography>
                    <p className="mt-1">
                      Photo booth tattooed prism, portland taiyaki hoodie neutra
                      typewriter
                    </p>
                  </div>
                  <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <Typography
                      variant="small"
                      className="title-font font-semibold text-gray-900 tracking-widest text-xs"
                    >
                      EMAIL
                    </Typography>
                    <a href="mailto:example@email.com" className="text-red-500 leading-relaxed">
                      example@email.com
                    </a>
                    <Typography
                      variant="small"
                      className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4"
                    >
                      PHONE
                    </Typography>
                    <p className="leading-relaxed">123-456-7890</p>
                  </div>
                </div>
              </div>
              <div className="flex min-h-screen  justify-start bg-white  ">
              <div className="mx-auto w-full max-w-lg">
                  <h1 className="text-4xl font-medium">Contact us</h1>
                  <p className="mt-3">Email us at help@domain.com or message us here:</p>
                  <div className="w-[90%] lg:w-[35rem] m-auto bg-white rounded-lg shadow-md p-6 ">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Form</h2>
                    <form className="flex flex-col" id="messageForm">
                      <input
                        type="text"
                        name="name"
                        className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#F26828] transition ease-in-out duration-150"
                        placeholder="Full Name"
                      />
                      <input
                        type="email"
                        name="email"
                        className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#F26828] transition ease-in-out duration-150"
                        placeholder="Email"
                      />
                      <input
                        type="number"
                        name="phone_number"
                        className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#F26828] transition ease-in-out duration-150"
                        placeholder="Phone Number"
                      />
                      <textarea
                        name="message"
                        className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#F26828] transition ease-in-out duration-150 resize-none h-40"
                        placeholder="Message"
                      />
                      <button
                        type="submit"
                        className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group"
                      >
                        Submit
                        <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                        <span className="absolute w-36 h-32 -top-8 -left-2 bg-[#b18b5e] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                        <span className="absolute w-36 h-32 -top-8 -left-2 bg-[#b18b5e] rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                        <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">Thanks!</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactSection14;
