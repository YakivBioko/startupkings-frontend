import {
  Header,
  Companies,
  HowItWorks,
  SmarterWay,
  ReadyToStart,
  Services,
} from "@/views/Home";

export default function Page() {
  return (
    <>
      <div className="min-h-[100vh] bg-[url('/assets/images/home/background-desktop.svg')] absolute left-0 top-0 w-full h-full bg-[length:100%_100%] -z-[1]" />
      <Header className="relative px-[90px] pt-[236px] min-h-[100vh]" />
      <HowItWorks className="px-[90px]" />
      <Companies className="px-[60px] flex-col md:flex-row lg:px-[110px] xl:px-[148px]" />
      <SmarterWay />
      <ReadyToStart />
      <Services />
    </>
  );
}
