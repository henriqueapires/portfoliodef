import Image from "next/image"
import Toggle from "./Toggle"

export const Navbar = () =>{


    return (
        <>
            <div className="z-20 bg-[#f4f4f4] fixed w-full shadow-lg dark:bg-[#1f1f1f] duration-300 dark:text-[#d3d3d3]">
                <div className="container mx-auto flex flex-row items-center justify-between">
                    <div className="mt-2">
                    <Image
                        src="/../public/h.png"
                        width={70}
                        height={70}
                        alt='h'
                    />
                    </div>
                    <ul className="flex flex-row items-center gap-10 tracking-wider font-semibold">
                        <li>HOME</li>
                        <li>SOBRE</li>
                        <li>SKILLS</li>
                        <li>PROJETOS</li>
                        <li>CONTATO</li>
                        <Toggle/>
                    </ul>
                </div>
            </div>

            <div className="w-full py-6">

            </div>
        </>
    )
}