import Image from "next/image";
import Link from "next/link";

const MenuItem = ({ icon, href, children, active }) => {
  const linkColor = active ? "text-green-600  rounded font-middum bg-white" : "text-white";

  return (
      <Link href={href}>
    <div className={`flex gap-4 items-center p-2 ${linkColor}`}>
      <Image src={icon} alt="logo" width={22} height={22} />
        <span className={`cursor-pointer text-base font-medium lg:text-sm ${linkColor}`}>
          {children} {console.log(linkColor)}
        </span>
    </div>
      </Link>
  );
};

export default MenuItem;
