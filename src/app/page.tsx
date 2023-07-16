import {
  Header,
  Companies,
  HowItWorks,
  SmarterWay,
  ReadyToStart,
} from "@/views/Home";

export default function Page() {
  return (
    <>
      <div className="relative px-[90px] pt-[236px] min-h-[100vh]">
        <div className="bg-[url('/assets/images/home/background-desktop.svg')] absolute left-0 top-0 w-full h-full bg-[length:100%_100%] -z-[1]" />
        <Header />
      </div>
      <div className="px-[90px] pt-[224px] pb-[216px]">
        <HowItWorks />
        <Companies className="mt-[200px] px-[60px]" />
        <SmarterWay className="mt-[175px] px-[53px]" />
      </div>
      <ReadyToStart className="mb-[120px]" />
    </>
  );
}
