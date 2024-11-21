import Image from "next/image";
import LinkButton from "../ui/nextLink";
export default function HeroBanner() {
  return (
    <div className=" gap-x-14 lg:mx-0 flex flex-col lg:max-w-none h-full z-[999]">
      <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl mt-8 lg:mt-16 z-50">
        <h1 className=" text=[29px] lg:text-[64px] leading-10 lg:leading-[86px] font-bold text-light950_dark-950 capitalize ">
          Invest peacefully in Web3&#39;s Top Projects
        </h1>
        <p className="mt-6 flex flex-col">
          <span className="text-light700_dark-700 leading-[22px] sm:max-w-md lg:max-w-lg">
            ZenPad is a modular launchpad with omni-chain support
          </span>
          <span className="text-light700_dark-700 leading-[22px] sm:max-w-md lg:max-w-lg">
            Access highly screened projects in a fair and transparent manner
          </span>
        </p>
        <div className="mt-10 flex items-center gap-x-6">
          <LinkButton variant="tertiary" href="#projects" className="">
            Explore Projects <Image src={"/assets/icons/fast-arrow-down.svg"} width={20} height={20} alt={""} />
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
