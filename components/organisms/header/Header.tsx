import Avatar from "@/components/atoms/avatar/Avatar";

const Header = () => {
  return (
    <header className="h-header border-b border-border bg-body flex items-center justify-end px-5">
      <Avatar
        src="/images/avatars/avatar-1.png"
        alt="Avatar"
        className="w-7 h-7"
      />
    </header>
  );
};

export default Header;
