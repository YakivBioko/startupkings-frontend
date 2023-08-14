"use client";

import React from "react";
import { PopupButton } from "react-calendly";

export function BookACall() {
  return (
    <div>
      <PopupButton
        className=" rounded-full bg-[#14E410] p-4 text-[15px] font-semibold text-[#152B70]"
        url="https://calendly.com/startupkings/phone-30-min"
        // @ts-ignore
        rootElement={
          typeof window !== "undefined"
            ? document.getElementById("calendly")
            : null
        }
        text="Schedule a quick call"
      />
      <div id="calendly" />
    </div>
  );
}
