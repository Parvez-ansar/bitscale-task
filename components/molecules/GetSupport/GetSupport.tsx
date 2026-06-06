import BranchLogo from "@/components/atoms/brand-logo/BranchLogo";
import ChevronRightIcon from "@/components/atoms/icons/ChevronRightIcon";
import React from "react";

const GetSupport = ({ className }: { className?: string }) => {
  return (
    <div className={`${className}`}>
      <div className={`justify-self-end-end bg-subtle py-4 px-3`}>
        <div className="flex items-center justify-between">
          <BranchLogo href="#" width={61} height={15} />
          <ChevronRightIcon className="rotate-270" />
        </div>
        <span className="text-xs font-medium text-[#4B5563]">
          Get Support at Bitscale
        </span>
      </div>
    </div>
  );
};

export default GetSupport;
