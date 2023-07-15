import Image from "next/image";
import Circle from "./Circle";

export default function Header() {
  return (
    <div className="flex justify-between gap-[160px]">
      <div className="max-w-[670px]">
        <div className="flex items-center gap-[14px] pl-[15px] mb-[17px]">
          <Circle className="text-[#D67F04]" />
          <Circle className="text-[#14E410]" />
          <Circle className="text-[#9C7EFF]" />
        </div>
        <span className="text-white text-[58px] font-bold -tracking-[1.74px] mb-[19px]">
          <span className="text-[#C27E01]">Get</span> The Perfect{" "}
          <span className="text-[#14E410]">Talent</span>
          <br />
          For Your <span className="text-[#D67F04]">Startup</span>
        </span>
        <p className="text-white text-[18px] leading-[158.7%] -tracking-[0.54px] mb-[25px]">
          Hire Pre-Vetted Remote Developers, Designers & Product Managers With
          World Class Technical And Communication Skills, Without Worrying About
          Crazy Fees Or The Legal Hassle.
        </p>
        <button className="rounded-[40px_40px_0_40px] text-black bg-[#14E410] text-[15px] font-bold leading-[1.587] px-[32px] py-[22px] flex items-center gap-2.5">
          Hire Talent{" "}
          <span>
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="14.5" cy="14.5" r="14.5" fill="white" />
              <path
                d="M22.7071 14.7071C23.0976 14.3166 23.0976 13.6834 22.7071 13.2929L16.3431 6.92893C15.9526 6.53841 15.3195 6.53841 14.9289 6.92893C14.5384 7.31946 14.5384 7.95262 14.9289 8.34315L20.5858 14L14.9289 19.6569C14.5384 20.0474 14.5384 20.6805 14.9289 21.0711C15.3195 21.4616 15.9526 21.4616 16.3431 21.0711L22.7071 14.7071ZM8 15H22V13H8V15Z"
                fill="#02012D"
              />
            </svg>
          </span>
        </button>
      </div>

      <div>
        <Image
          src="/assets/images/home/avatars.png"
          alt="avatars"
          width={380}
          height={330}
        />
      </div>
    </div>
  );
}
