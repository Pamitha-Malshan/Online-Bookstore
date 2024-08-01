import { useState, useEffect} from "react";
import Image from 'next/image'
import Link from "next/link";

export default function MobileHeader() {

    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle);
      };


  return (
    <div className="md:hidden">
      <div className="bg-[#34AEDD] py-2 flex">
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
        <div className="w-[50%] flex justify-end">
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

      <div  style={{ display: toggle ? "block" : "none" }}>

         <Link href="">
        <p className="Lexend-Medium text-[1.1rem] text-center mt-6">Home</p>
        </Link>
      

      </div>
    </div>
  )
}
