import React from "react";
import CheckIcon from "../icons/CheckIcon";

const CheckMark = ({
  checked,
  text,
  wrapperClassName,
  iconClassName,
}: {
  checked?: boolean;
  checkedWrapperClassName?: string;
  wrapperClassName?: string;
  iconClassName?: string;
  text?: string;
}) => {
  if (checked) {
    return (
      <div className="flex items-center gap-1.5">
        <div className="flex items-center justify-center h-3.5 w-3.5 bg-info rounded-full">
          <CheckIcon className={`text-white ${iconClassName} mt-px`} />
        </div>
        {text && <span className="text-xs font-medium">{text}</span>}
      </div>
    );
  } else {
    return (
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center h-3.5 w-3.5 border-2 border-muted rounded-full" />
        {text && <span className="text-xs font-medium">{text}</span>}
      </div>
    );
  }
};

export default CheckMark;
