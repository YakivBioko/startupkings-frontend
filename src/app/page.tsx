import { Header } from "@/views/Home";

export default function Page() {
  return (
    <>
      <div className="relative px-[90px] pt-[236px] pb-[80px]">
        <div className="bg-[url('/assets/images/home/background-desktop.svg')] absolute left-0 top-0 w-full h-full bg-[length:100%_100%] -z-[1]" />
        <Header />
      </div>
    </>
  );
}
