import CheckMark from "@/components/atoms/check-mark/CheckMark";
import TaskCompleteIcon from "@/components/atoms/icons/TaskCompleteIcon";
import ProgressBar from "@/components/atoms/progress-bar/ProgressBar";

const ProductDemo = () => {
  return (
    <div className="rounded-xl bg-card-gradient py-4 px-5 flex flex-col gap-2 border border-[--palette-blue-50]">
      <div className="flex items-center gap-3">
        <div className="bg-[#4B5563] rounded-full h-[33px] w-[33px] flex items-center justify-center">
          <TaskCompleteIcon className="text-white" />
        </div>
        <div className="flex flex-col text-[#383530]">
          <h4 className="text-sm font-medium">Complete product demo</h4>
          <p className="text-xs font-normal">
            92% of users nailed BitScale after this walkthrough
          </p>
        </div>
      </div>
      <ProgressBar progress={75} showNumber={true} />
      <div className="grid grid-cols-2 gap-y-3 mt-2.5">
        <CheckMark checked text={"Create your data list"} />
        <CheckMark checked text={"Learn about BitAgent"} />
        <CheckMark checked text={"Connect an integration"} />
        <CheckMark text={"Customise waterfall providers "} />
      </div>
    </div>
  );
};

export default ProductDemo;
