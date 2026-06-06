import Avatar from "@/components/atoms/avatar/Avatar";
import SortIcon from "@/components/atoms/icons/SortIcon";

const GMTSpaces = ({ wrapperClassName }: { wrapperClassName: string }) => {
  return (
    <div className={`flex items-center px-5 py-3.5 gap-2 ${wrapperClassName}`}>
      <div className="flex items-center">
        <Avatar
          src="/images/avatars/avatar-2.png"
          className="w-6 h-6 not-first:-ml-4"
        />
        <Avatar
          src="/images/avatars/avatar-3.png"
          className="w-6 h-6 not-first:-ml-3"
        />
      </div>
      <span className="flex-1 text-sm font-medium">GMT Spaces</span>
      <SortIcon />
    </div>
  );
};

export default GMTSpaces;
