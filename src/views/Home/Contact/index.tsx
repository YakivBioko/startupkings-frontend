"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import Image from "next/image";

import { sendEmail, SendEmailProps } from "@/api";
import { BookACall } from "@/components";

export default function Contact() {
  const { register, handleSubmit } = useForm<SendEmailProps>({
    shouldUseNativeValidation: true,
  });

  const onSubmit: SubmitHandler<SendEmailProps> = async (data) => {
    const result = await sendEmail(data);
    console.log(result);
  };

  return (
    <form className="px-20 py-20" onSubmit={handleSubmit(onSubmit)}>
      <h2 id="contact" className="text-[30px] font-bold md:text-[58px]">
        Contact us
      </h2>
      {/* <div className="m-auto flex w-full max-w-xl flex-col items-end gap-8 rounded-xl border border-[#051245] bg-card-gradient px-8 py-10 shadow-xl">
        <input
          className="w-full rounded-md border-2 border-solid border-transparent bg-[#02012D] px-4 py-3 outline-none transition-colors duration-300 focus:border-[#051245] focus:ring-0"
          placeholder="Your E-mail"
          {...register("from", { required: true })}
          type="email"
        />
        <textarea
          className="min-h-[12rem] w-full rounded-md border-2 border-solid border-transparent bg-[#02012D] px-4 py-4 outline-none transition-colors duration-300 focus:border-[#051245] focus:ring-0"
          placeholder="Your message"
          {...register("message", { required: true })}
        />
        <div className="flex w-full flex-row justify-between">
          <button
            type="submit"
            className="max-w-max rounded-md bg-[linear-gradient(180deg,#CE9FFC_0%,#A582F7_50.52%,#7367F0_100%)] px-8 py-2"
          >
            SEND
          </button>
          <BookACall />
        </div>
      </div> */}
      <div className="m-auto mt-10 flex w-full rounded-md border-2 border-[#051245] bg-card-gradient px-16 py-10 shadow-xl">
        <div className="sm:w-1/2 md:w-3/5">
          <h4 className="pb-8 text-center">
            Hire high-performing, on-demand
            <br />
            teams of developers
          </h4>
          <div className="flex justify-between">
            <input
              className="mr-2 w-10/12 rounded-md border-2 border-solid border-transparent bg-[#02012D] px-4 py-3 placeholder-white outline-none transition-colors duration-300 focus:border-[#051245] focus:ring-0"
              placeholder="Name"
              type="text"
            />
            <input
              className="w-10/12 rounded-md border-2 border-solid border-transparent bg-[#02012D] px-4 py-3 placeholder-white outline-none transition-colors duration-300 focus:border-[#051245] focus:ring-0"
              placeholder="Company email"
              type="email"
            />
          </div>
          <input
            className="mt-12 w-full rounded-md border-2 border-solid border-transparent bg-[#02012D] px-4 py-3 placeholder-white outline-none transition-colors duration-300 focus:border-[#051245] focus:ring-0"
            placeholder="Compnay name"
            type="text"
          />
          <input
            className="mt-12 w-full rounded-md border-2 border-solid border-transparent bg-[#02012D] px-4 py-3 placeholder-white outline-none transition-colors duration-300 focus:border-[#051245] focus:ring-0"
            placeholder="Role at your company"
            type="text"
          />
          <input
            className="mt-12 w-full rounded-md border-2 border-solid border-transparent bg-[#02012D] px-4 py-3 placeholder-white outline-none transition-colors duration-300 focus:border-[#051245] focus:ring-0"
            placeholder="Phone number"
            type="text"
          />
          <input
            className="mt-12 w-full rounded-md border-2 border-solid border-transparent bg-[#02012D] px-4 py-3 placeholder-white outline-none transition-colors duration-300 focus:border-[#051245] focus:ring-0"
            placeholder="We're curious, how did you hear about us?"
            type="text"
          />

          <select
            id="what-need"
            className="mt-12 w-full rounded-md border-2 border-solid border-transparent bg-[#02012D] px-4 py-3 outline-none transition-colors duration-300 focus:border-[#051245] focus:ring-0"
          >
            <option>What do you need?</option>
            <option value="HID">Hire an individual developer</option>
            <option value="HTD">Build a team of developers</option>
            <option value="GWB">Get to know X-Term better</option>
          </select>

          <select
            id="how-long"
            className="mt-12 w-full rounded-md border-2 border-solid border-transparent bg-[#02012D] px-4 py-3 outline-none transition-colors duration-300 focus:border-[#051245] focus:ring-0"
          >
            <option>How loing will you need X-Team?</option>
            <option value="less-month">less 1 month</option>
            <option value="between-month">1-3 month</option>
            <option value="more-month">3+ month</option>
          </select>

          <select
            id="need-tern"
            className="mt-12 w-full rounded-md border-2 border-solid border-transparent bg-[#02012D] px-4 py-3 outline-none transition-colors duration-300 focus:border-[#051245] focus:ring-0"
          >
            <option>How soon do you need X-Team?</option>
            <option value="less-week">1-2 weeks</option>
            <option value="between-week">2-4 weeks</option>
            <option value="more-week">4+ weeks</option>
          </select>

          <select
            id="need-tern"
            className="mt-12 w-full rounded-md border-2 border-solid border-transparent bg-[#02012D] px-4 py-3 outline-none transition-colors duration-300 focus:border-[#051245] focus:ring-0"
          >
            <option>What skills do you need?</option>
            <option value="react-native">React Native</option>
            <option value="react">React</option>
            <option value="javascript">Javascript</option>
            <option value="php">PHP</option>
            <option value="ruby">Ruby</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
            <option value="mobile">Mobile</option>
            <option value="devops">Devops</option>
            <option value="blockchain">Blockchain</option>
            <option value="data">Data/DBA</option>
            <option value="qa">QA</option>
          </select>

          <button
            type="submit"
            className="mt-12 max-w-max rounded-md bg-[linear-gradient(180deg,#CE9FFC_0%,#A582F7_50.52%,#7367F0_100%)] px-8 py-2"
          >
            GET STARTED
          </button>
        </div>
        <div className="px-40 sm:w-1/2 sm:px-20 md:w-2/5">
          <h5 className="text-center sm:text-sm md:text-lg">
            Trusted by the world&apos;s <br />
            leading brands since 2006.
          </h5>
          <div className="mt-14 flex">
            <div className="flex w-1/2 flex-col items-center gap-7">
              {/* <Image 
                className="contact-image"
                src="/assets/images/contact-us/intel.svg"
                alt="image"
                width={150}
                height={200}
                style={{ width: "100px !important", height: "70px !important", filter: "grayscale(100%) opacity(80%) !important" }}
              /> */}
              {/* <Image 
                className="contact-image"
                src="/assets/images/contact-us/fox.svg"
                alt="image"
                width={150}
                height={200}
                style={{ width: "100px !important", height: "70px !important", filter: "grayscale(100%) opacity(80%) !important" }}
              /> */}
              <Image
                className="contact-image"
                src="/assets/images/contact-us/riot.svg"
                alt="image"
                width={150}
                height={200}
                style={{
                  width: "100px !important",
                  height: "70px !important",
                  filter: "grayscale(100%) opacity(80%) !important",
                }}
              />
              <Image
                className="contact-image"
                src="/assets/images/contact-us/at&t.svg"
                alt="image"
                width={150}
                height={200}
                style={{
                  width: "100px !important",
                  height: "70px !important",
                  filter: "grayscale(100%) opacity(80%) !important",
                }}
              />
              {/* <Image 
                className="contact-image"
                src="/assets/images/contact-us/adp.svg"
                alt="image"
                width={150}
                height={200}
                style={{ width: "100px !important", height: "70px !important", filter: "grayscale(100%) opacity(80%) !important" }}
              /> */}
              <Image
                className="contact-image"
                src="/assets/images/contact-us/kaplan.svg"
                alt="image"
                width={150}
                height={200}
                style={{
                  width: "100px !important",
                  height: "70px !important",
                  filter: "grayscale(100%) opacity(80%) !important",
                }}
              />
              <Image
                className="contact-image"
                src="/assets/images/contact-us/thread.svg"
                alt="image"
                width={150}
                height={200}
                style={{
                  width: "100px !important",
                  height: "90px !important",
                  filter: "grayscale(100%) opacity(80%) !important",
                }}
              />
              <Image
                className="contact-image"
                src="/assets/images/contact-us/chive.svg"
                alt="image"
                width={150}
                height={200}
                style={{
                  width: "100px !important",
                  height: "70px !important",
                  filter: "grayscale(100%) opacity(80%) !important",
                }}
              />
            </div>
            <div className="flex w-1/2 flex-col items-center gap-7">
              {/* <Image 
                className="contact-image"
                src="/assets/images/contact-us/sony.svg"
                alt="image"
                width={150}
                height={200}
                style={{ width: "100px !important", height: "70px !important", filter: "grayscale(100%) opacity(80%) !important" }}
              />
              <Image 
                className="contact-image"
                src="/assets/images/contact-us/dell.svg"
                alt="image"
                width={150}
                height={200}
                style={{ width: "100px !important", height: "70px !important", filter: "grayscale(100%) opacity(80%) !important" }}
              /> */}
              {/* <Image 
                className="contact-image"
                src="/assets/images/contact-us/twitter.svg"
                alt="image"
                width={150}
                height={200}
                style={{ width: "100px !important", height: "70px !important", filter: "grayscale(100%) opacity(80%) !important" }}
              /> */}
              <Image
                className="contact-image"
                src="/assets/images/contact-us/coinbase.svg"
                alt="image"
                width={150}
                height={200}
                style={{
                  width: "100px !important",
                  height: "70px !important",
                  filter: "grayscale(100%) opacity(80%) !important",
                }}
              />
              <Image
                className="contact-image"
                src="/assets/images/contact-us/beachbody.svg"
                alt="image"
                width={150}
                height={200}
                style={{
                  width: "100px !important",
                  height: "70px !important",
                  filter: "grayscale(100%) opacity(80%) !important",
                }}
              />
              <Image
                className="contact-image"
                src="/assets/images/contact-us/discovery.svg"
                alt="image"
                width={150}
                height={200}
                style={{
                  width: "100px !important",
                  height: "70px !important",
                  filter: "grayscale(100%) opacity(80%) !important",
                }}
              />
              <Image
                className="contact-image"
                src="/assets/images/contact-us/pantheon.svg"
                alt="image"
                width={150}
                height={200}
                style={{
                  width: "140px !important",
                  height: "90px !important",
                  filter: "grayscale(100%) opacity(80%) !important",
                }}
              />
              <Image
                className="contact-image"
                src="/assets/images/contact-us/zwift.svg"
                alt="image"
                width={150}
                height={200}
                style={{
                  width: "100px !important",
                  height: "70px !important",
                  filter: "grayscale(100%) opacity(80%) !important",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
