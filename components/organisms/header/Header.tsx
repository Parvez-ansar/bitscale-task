import Avatar from "@/components/atoms/avatar/Avatar";
import { Button } from "@/components/atoms/button/Button";
import DatabaseIcon from "@/components/atoms/icons/DatabaseIcon";

const Header = () => {
  return (
    <header className="h-header border-b border-border bg-body flex items-center justify-end px-5 gap-3">
      <div className="p-1.5 px-2 pl-2.5 bg-success/10 flex items-center gap-3 rounded-[10.5px]">
        <DatabaseIcon />
        <span className="text-sm text-btn-accent font-medium">
          450000/5500000
        </span>
        <Button
          variant="primary"
          className="bg-btn-accent h-5.5 text-xs font-medium px-2">
          Booster Plan
        </Button>
      </div>
      <Avatar
        src="/images/avatars/avatar-1.png"
        alt="Avatar"
        className="w-7 h-7"
      />
    </header>
  );
};

export default Header;
