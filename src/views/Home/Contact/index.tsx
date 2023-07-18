import React from "react";

export default function Contact() {
  return (
    <div className="px-10 py-20">
      <h2 id="contact">Contact us</h2>
      <div className="m-auto flex max-w-xl flex-col items-end gap-8 rounded-xl border border-[#051245] bg-card-gradient px-8 py-10 shadow-xl">
        <input
          className="w-full rounded-md border-2 border-solid border-transparent bg-[#02012D] px-4 py-3 outline-none transition-colors duration-300 focus:border-[#051245] focus:ring-0"
          placeholder="Your E-mail"
        />
        <textarea
          className="min-h-[12rem] w-full rounded-md border-2 border-solid border-transparent bg-[#02012D] px-4 py-4 outline-none transition-colors duration-300 focus:border-[#051245] focus:ring-0"
          placeholder="Your message"
        />
        <button
          type="submit"
          className="max-w-max rounded-md bg-[#DCD3FB] px-8 py-2"
        >
          SEND
        </button>
      </div>
    </div>
  );
}
