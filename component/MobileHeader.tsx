import { useState, useEffect} from "react";
import Image from 'next/image'
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function MobileHeader() {

  const currentRoute = usePathname();

    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
      };


  return (
    <div className="md:hidden">
      <div className="bg-[#34AEDD] py-2 flex fixed w-full z-[999]">
        <div className="w-[50%]">
        <Image
                src="/Images/book.png"
                width={60}
                height={30}
                sizes="100vw"
                alt="close"
                className="ml-3"
              />
        </div>
        <div className="w-[50%] flex justify-end ">
      <button className="mr-3" onClick={handleClick}>{toggle ? <Image
                src="/Images/cut.png"
                width={40}
                height={40}
                sizes="100vw"
                alt="close"
              /> : <Image
                src="/Images/menu.png"
                width={40}
                height={40}
                sizes="100vw"
                alt="menu"
              />}</button>
              </div>
      </div>

      <div  style={{ display: toggle ? "block" : "none" }} className="h-[100vh] fixed bg-[white] w-full z-[997] pt-20">

      <Link href="/">
            <p className={currentRoute === "/" ? "active Lexend-Medium text-[1.1rem] hover:text-[#384994] uppercase my-6 text-center" : "Lexend-Medium text-[1.1rem] hover:text-[#384994] uppercase my-6 text-center"}>Home</p>
            </Link>

            <Link href="Addbook">
            <p className={currentRoute === "/Addbook" ? "active Lexend-Medium text-[1.1rem] hover:text-[#384994] uppercase my-6 text-center" : "Lexend-Medium text-[1.1rem] hover:text-[#384994] uppercase my-6 text-center"}>Add Book</p>
            </Link>

            <Link href="Viewbook">
            <p className={currentRoute === "/Viewbook" ? "active Lexend-Medium text-[1.1rem] hover:text-[#384994] uppercase my-6 text-center" : "Lexend-Medium text-[1.1rem] hover:text-[#384994] uppercase my-6 text-center"}>View Book</p>
            </Link>

            <Link href="Shoppingcart">
            <p className={currentRoute === "/Shoppingcart" ? "active Lexend-Medium text-[1.1rem] hover:text-[#384994] uppercase my-6 text-center" : "Lexend-Medium text-[1.1rem] hover:text-[#384994] uppercase my-6 text-center"}>My Cart</p>
            </Link>
      

      </div>
    </div>
  )
}
