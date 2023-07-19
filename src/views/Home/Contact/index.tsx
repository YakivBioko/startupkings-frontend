"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { sendEmail, SendEmailProps } from "@/api";

export default function Contact() {
  const { register, handleSubmit } = useForm<SendEmailProps>({
    shouldUseNativeValidation: true,
  });

  const onSubmit: SubmitHandler<SendEmailProps> = async (data) => {
    const result = await sendEmail(data);
    console.log(result);
  };

  return (
    <form className="px-12 py-20" onSubmit={handleSubmit(onSubmit)}>
      <h2 id="contact" className="text-[30px] font-bold md:text-[58px]">
        Contact us
      </h2>
      <div className="m-auto flex max-w-xl flex-col items-end gap-8 rounded-xl border border-[#051245] bg-card-gradient px-8 py-10 shadow-xl">
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
        <button
          type="submit"
          className="max-w-max rounded-md bg-[linear-gradient(180deg,#CE9FFC_0%,#A582F7_50.52%,#7367F0_100%)] px-8 py-2"
        >
          SEND
        </button>
      </div>
    </form>
  );
}
