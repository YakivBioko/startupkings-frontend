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
      <div className="min-h-[100vh] bg-[url('/assets/images/home/background-desktop.svg')] absolute left-0 top-0 w-full h-full bg-[length:100%_100%] -z-[1]" />
      <Header className="relative px-[90px] pt-[236px] min-h-[100vh]" />
      <HowItWorks className="px-[90px] pt-[224px]" />
      <Companies className="mt-[200px] pt-[60px] px-[60px] flex-col md:flex-row lg:px-[110px] xl:px-[148px]" />
      <SmarterWay className="mt-[175px] px-[148px]" />
      <ReadyToStart className="mb-[120px]" />
    </>
  );
}
