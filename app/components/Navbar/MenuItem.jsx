import Image from "next/image";
import Link from "next/link";

const MenuItem = ({ icon, href, children, active }) => {
  const linkColor = active ? "text-blue-500" : "text-green-600";

  return (
    <div className="flex gap-4 items-center ml-8 pl-2">
      <Image src={icon} alt="logo" width={22} height={22} />
      <Link href={href}>
        <span className={`cursor-pointer text-base font-medium lg:text-sm ${linkColor}`}>
          {children} {console.log(linkColor)}
        </span>
      </Link>
    </div>
  );
};

export default MenuItem;
