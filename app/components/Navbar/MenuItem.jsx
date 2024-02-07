import Image from "next/image";
import Link from "next/link";

const MenuItem = ({ icon, href, children }) => (
  <div className="flex gap-4 items-center ml-8 pl-2">
    <Image src={icon} alt="logo" width={22} height={22} />
    <Link href={href} className="text-base font-medium text-green-600 lg:text-sm">
      {children}
    </Link>
  </div>
);

export default MenuItem;
