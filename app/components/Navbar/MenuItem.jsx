import Image from "next/image";
import Link from "next/link";

const MenuItem = ({ icon, href, children, active }) => {
  const linkColor = active ? "text-white  rounded font-middum bg-white" : "text-white";

  return (
      <Link href={href}>
    <div className={`flex gap-4 items-center px-2 py-2 ${linkColor}`}>
      <Image src={icon} alt="logo" width={20} height={20} />
        <span className={`cursor-pointer text-base font-medium lg:text-sm ${linkColor}`}>
          {children} {console.log(linkColor)}
        </span>
    </div>
      </Link>
  );
};

export default MenuItem;
