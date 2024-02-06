import Link from "next/link";
import Image from "next/image";
const MenuItem = ({ icon, href, children }) => (
    <div className="flex gap-4 items-center ml-8 pl-4">
      <Image src={icon} alt="logo" width={28} height={28} />
      <Link href={href} className="text-base font-medium text-green-600 lg:text-lg">
        {children}
      </Link>
    </div>
  );
  
  export default MenuItem;
  