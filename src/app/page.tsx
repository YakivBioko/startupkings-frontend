import { Header } from "@/views/Home";

export default function Page() {
  return (
    <>
      <div className="relative pl-[90px] pr-[130px] pt-[236px] pb-[225px]">
        <div className="bg-[url('/assets/images/home/background-desktop.svg')] absolute left-0 top-0 w-full h-full bg-[length:100%_100%] -z-[1]" />
        <Header />
      </div>
    </>
  );
}
