import Image from "next/image"
import Toggle from "./Toggle"

export const Navbar = () =>{
    return (
        <>
            <div className="md:block hidden z-20 bg-[#f4f4f4] fixed w-full shadow-lg dark:bg-[#1f1f1f] duration-300 dark:text-[#d3d3d3]">
                <div className="container mx-auto flex flex-row items-center justify-between">
                    <div className="mt-2">
                    <Image
                        src="/h.png"
                        width={70}
                        height={70}
                        alt='h'
                    />
                    </div>
                    <ul className="z-50 flex flex-row items-center gap-10 tracking-wider font-semibold">
                        <a href="#header"><li className="hover:text-[#ff3877] duration-150">HOME</li></a>
                        <a href="#sobre"><li className="hover:text-[#ff3877] duration-150">SOBRE</li></a>
                        <a href="#skills"><li className="hover:text-[#ff3877] duration-150">SKILLS</li></a>
                        {/* <li>PROJETOS</li> */}
                        <a href="#contato"><li className="hover:text-[#ff3877] duration-150">CONTATO</li></a>
                        <Toggle />
                    </ul>
                </div>
            </div>

            <div className="w-full py-6">

            </div>
        </>
    )
}

export default Navbar