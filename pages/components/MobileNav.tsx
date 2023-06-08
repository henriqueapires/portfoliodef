import React, { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { CgMenuRightAlt } from "react-icons/cg";
import { IoCloseSharp } from 'react-icons/io5';
import Image from 'next/image';
import Toggle from './Toggle';

const navigation = [
  { name: 'Home', href: '#header' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Skills', href: '#skills' },
  // { name: 'Projetos', href: '#' },
  { name: 'Contato', href: '#contato' },
];

export const MobileNavbar = () => {
  return (
    <>
      <div className="md:hidden block z-20 bg-[#f4f4f4] fixed w-full shadow-lg dark:bg-[#1f1f1f] duration-300 dark:text-[#d3d3d3]">
      <div className="container mx-auto flex flex-row items-center justify-between">
        <div className="mt-2">
          <Image src="/h.png" width={45} height={45} alt='h' />
        </div>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`${
                  open ? 'text-gray-900' : 'text-gray-500'
                } inline-flex items-center justify-center p-2 rounded-md hover:text-gray-900 `}
              >
                <span className="sr-only">Open main menu</span>
                <CgMenuRightAlt className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>

              <Transition
                show={open}
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  static
                  className="absolute right-0 top-0 transition transform md:hidden"
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-[#3D3D3D] divide-y-2 divide-gray-50">
                    <div className="px-5 pt-5 pb-6">
                      <div className="flex items-center justify-between">
                        <div className="-mr-2">
                          <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <IoCloseSharp className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="mt-6">
                        <nav className="grid gap-y-8">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 block rounded-md text-base font-medium text-gray-700 dark:text-white hover:text-gray-900 "
                            >
                              {item.name}
                            </a>
                          ))}
                          <Toggle />
                        </nav>
                        
                      </div>
                    </div>
                  </div>
                  
                </Popover.Panel>
                
                </Transition>
            </>
            )}
        </Popover>
        </div>
        </div>
    </>
    );
};

export default MobileNavbar