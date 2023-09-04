"use client"
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { LogoIcon, LogoMark } from '@/assets/icons/Logo'
import { CCIcon } from '@/assets/icons/CC'
import { CRMIcon } from '@/assets/icons/CRM'
import { ZoomIcon } from '@/assets/icons/Zoom'
import { WifiIcon } from '@/assets/icons/Wifi'
import { InformationCircleIcon } from '@heroicons/react/24/solid'
import { RightArrowIcon } from '@/assets/icons/RightArrow'
import GetQuoteButton from '@/Components/GetQuoteButton'
import classNames from '@/utils/classNames'

const products = [
  { name: 'Five9 - Contact Center', description: 'Simple and secure', href: '#', icon: CCIcon, cta: false },
  { name: 'Salesforce - CRM', description: 'Simple and secure', href: '#', icon: CRMIcon, cta: false },
  { name: 'Zoom - Cloud Collaboration', description: 'Simple and secure', href: '#', icon: ZoomIcon, cta: false },
  { name: 'Zoox Smart WIFI', description: 'Connect with third-party tools', href: '#', icon: WifiIcon, cta: false },
]

const links = [
  { name: 'Webinars', href: 'webinars', icon: <RightArrowIcon color='blue' width={15} />, cta: false },
  { name: 'Blogs', href: 'blogs', icon: <RightArrowIcon color='green' width={15} />, cta: false }
]

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon, cta: true },
  { name: 'More info', href: '#', icon: InformationCircleIcon, cta: true },
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white sticky top-0 z-10 border-b-2 border-slate-100">
      <nav className="mx-auto w-full flex items-center justify-between p-5 lg:px-8" aria-label="Global">
        <div className="flex lg:justify-start">
          <a href="/" className="-m-1.5 p-1.5 tab-i" tabIndex={0}>
            <span className="sr-only">CXlab</span>
            <LogoIcon width={120} />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button className={`flex items-center gap-x-1 text-sm md:text-base lg:text-lg font-semibold leading-6 ${open ? 'text-orange-700' : 'text-gray-900'} focus:outline-none transition-all`}>
                  Solutions
                  <ChevronDownIcon className={classNames(open ? 'rotate-180 ' : '', 'h-5 w-5 flex-none text-gray-400 transition-all')} aria-hidden="true" />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 -translate-y-10"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-350"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-10"
                >
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-2xl  overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-3">
                      <div className="m-0 p-0 flex">
                        <div className="flex-auto">
                          <h6 className="pb-4 pt-4 pl-5 text-gray-400 font-bold">Explore</h6>
                          {products.map((item) => (
                            <div
                              key={item.name}
                              className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-100"
                            >
                              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                <div className="h-6 w-6 text-gray-600" aria-hidden="true">{<item.icon />}</div>
                              </div>
                              <div className="flex-auto">
                                <a href={item.href} className="block font-semibold text-gray-900">
                                  {item.name}
                                  <span className="absolute inset-0" />
                                </a>
                                <p className="mt-1 text-gray-600">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex-1">
                          <h6 className="pb-4 pt-4 pl-5 text-gray-400 font-bold">Useful links</h6>
                          {links.map((item) => (
                            <div
                              key={item.name}
                              className="group relative rounded-lg px-4 mb-2 text-sm leading-6"
                            >
                              <div className="w-15 h-11 p-3 flex flex-nowrap flex-none items-center justify-start rounded-lg hover:bg-gray-100">
                                <div className="h-6 w-6 text-gray-60" aria-hidden="true">
                                  {item.icon}
                                </div>
                                <a href={item.href} className="block font-semibold text-gray-900">
                                  {item.name}
                                  <span className="absolute inset-0" />
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 group hover:bg-gray-100"
                        >
                          <item.icon className="group-hover:text-orange-600 h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <a href="#" className="text-sm md:text-base lg:text-lg font-semibold leading-6 text-gray-900">
            Services
          </a>
          <a href="#" className="text-sm md:text-base lg:text-lg font-semibold leading-6 text-gray-900">
            Why Us
          </a>
          <a href="#" className="text-sm md:text-base lg:text-lg font-semibold leading-6 text-gray-900">
            Contact Sales
          </a>
        </Popover.Group>
        <GetQuoteButton className='h-12 px-8' />
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">CXlab</span>
              <LogoMark width={40} />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Solutions
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none transition-all')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className={`block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-${item.cta ? '500' : '900'} hover:bg-gray-50`}
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Why Us
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Sales
                </a>
              </div>
              <div className="py-6">
                <GetQuoteButton mobile />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Header