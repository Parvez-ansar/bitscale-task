import Image from "next/image";

const Avatar = ({
  className,
  size = 500,
  src,
  alt = "Avatar",
}: {
  className?: string;
  size?: number;
  src: string;
  alt?: string;
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`rounded-full object-cover ${className}`}
    />
  );
};

export default Avatar;
