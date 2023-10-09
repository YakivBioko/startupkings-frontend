import {
  Achievement,
  Contact,
  Hero,
  HowItWorks,
  ReadyToStart,
  Services,
  SmarterWay,
  Team,
  Testinominals,
} from "@/views/Home";

export default function Page() {
  return (
    <>
      <div className="absolute left-0 top-0 -z-[1] h-full min-h-[100vh] w-full bg-[url('/assets/images/home/background-desktop.svg')] bg-[length:100%_100%]" />
      <Hero className="relative min-h-[100vh] px-[90px] pt-[236px]" />
      <HowItWorks className="px-12 md:px-[90px]" />
      <SmarterWay />
      <ReadyToStart />
      <Services />
      <Team />
      <Achievement />
      <Testinominals />
      <Contact />
    </>
  );
}
