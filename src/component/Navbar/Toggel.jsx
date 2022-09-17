import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import {HiMenu} from 'react-icons/hi'

export default function Example() {
  return (
    <div className="fixed right-32 top-2 w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-gradient-to-r border-tara-orange from-tara-yellow to-tara-orange shadow-tara-yellow px-4 py-2 text-sm font-medium text-white outline-none">
            <HiMenu className='text-xl'/>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="bg-gradient-to-r border-2 border-tara-orange from-tara-yellow to-tara-orange px-4 py-1 text-white shadow-tara-yellow absolute right-0 mt-2 w-40 origin-top-right divide-y rounded-md shadow-lg z-50 ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
            <div className="px-1 py-1">
            <Menu.Item>
                {({ active }) => (
                  <a href='/course'>
                        <button
                        className="text-tara-black group flex w-full items-center rounded-md px-2 py-1 text-lg font-semibold"
                        >
                        Home
                        </button>
                    </a>
                )}
            </Menu.Item>
            <Menu.Item>
                {({ active }) => (
                  <a href='/course'>
                        <button
                        className="text-tara-black group flex w-full items-center rounded-md px-2 py-1 text-lg font-semibold"
                        >
                        Services
                        </button>
                    </a>
                )}
            </Menu.Item>
            <Menu.Item>
                {({ active }) => (
                  <a href='/course'>
                        <button
                        className="text-tara-black group flex w-full items-center rounded-md px-2 py-1 text-lg font-semibold"
                        >
                        Experience
                        </button>
                    </a>
                )}
            </Menu.Item>
            <Menu.Item>
                {({ active }) => (
                  <a href='/course'>
                        <button
                        className="text-tara-black group flex w-full items-center rounded-md px-2 py-1 text-lg font-semibold"
                        >
                        Portfolio
                        </button>
                    </a>
                )}
            </Menu.Item>
            <Menu.Item>
                {({ active }) => (
                  <a href='/course'>
                        <button
                        className="text-tara-black group flex w-full items-center rounded-md px-2 py-1 text-lg font-semibold"
                        >
                        Testimonal
                        </button>
                    </a>
                )}
            </Menu.Item>

            <Menu.Item>
                {({ active }) => (
                  <a href="https://www.google.com" target=" _blank">
                  <button className='bg-gradient-to-r border-2 border-white from-tara-yellow to-tara-orange rounded-md px-4 py-1 mx-2 text-white shadow-2xl shadow-tara-yellow'>Contact</button>
              </a>
                )}
            </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}