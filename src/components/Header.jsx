import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

function MobileNavigation() {
  return (
    <Popover>
      {({ open, close }) => (
        <>
          <Popover.Button className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none">
            <span className="sr-only">Toggle Navigation</span>
            <svg
              aria-hidden="true"
              className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
              fill="none"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <path
                d="M0 1H14M0 7H14M0 13H14"
                className={clsx('origin-center transition', {
                  'scale-90 opacity-0': open,
                })}
              />
              <path
                d="M2 2L12 12M12 2L2 12"
                className={clsx('origin-center transition', {
                  'scale-90 opacity-0': !open,
                })}
              />
            </svg>
          </Popover.Button>
          <Transition.Root>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                as="ul"
                className="absolute inset-x-0 top-full mt-4 origin-top space-y-4 rounded-2xl bg-white p-6 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
              >
                <li>
                  <Link href="#profiles">
                    <a className="block w-full" onClick={() => close()}>
                      Profiles
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#challenge">
                    <a className="block w-full" onClick={() => close()}>
                      Challenge
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#speakers">
                    <a className="block w-full" onClick={() => close()}>
                      Speakers
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#infos">
                    <a className="block w-full" onClick={() => close()}>
                      Pratical informations
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#calender">
                    <a className="block w-full" onClick={() => close()}>
                      Agenda
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#faqs">
                    <a className="block w-full" onClick={() => close()}>
                      FAQ
                    </a>
                  </Link>
                </li>

              </Popover.Panel>
            </Transition.Child>
          </Transition.Root>
        </>
      )}
    </Popover>
  )
}

export function Header() {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 text-sm">
          <ul className="flex items-center">
            <li>
              <Link href="#">
                <a>
                  <span className="sr-only">Home</span>
                  <Logo className="h-10 w-auto" />
                </a>
              </Link>
            </li>
            <li className="ml-12 hidden md:block">
              <Link href="#profiles">
                <a className="rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                  Profiles
                </a>
              </Link>
            </li>
            <li className="ml-6 hidden md:block">
              <Link href="#challenge">
                <a className="rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                  Challenge
                </a>
              </Link>
            </li>
            <li className="ml-6 hidden md:block">
              <Link href="#speakers">
                <a className="rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                  Speakers
                </a>
              </Link>
            </li>
            <li className="ml-6 hidden md:block">
              <Link href="#infos">
                <a className="rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                  Pratical informations
                </a>
              </Link>
            </li>
            <li className="ml-6 hidden md:block">
              <Link href="#calendar">
                <a className="rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                  Agenda
                </a>
              </Link>
            </li>
            <li className="ml-6 hidden md:block">
              <Link href="#faqs">
                <a className="rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                  FAQ
                </a>
              </Link>
            </li>
            <li className="ml-auto hidden md:block">
              <Link href="/Landing">
                <a className="rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900">
                  
                </a>
              </Link>
            </li>
            <li className="ml-auto md:ml-8">

            </li>
            <li className="ml-5 -mr-1 md:hidden">
              <MobileNavigation />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}
