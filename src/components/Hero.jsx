import Image from 'next/image'


import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import logoKS from '@/images/logos/KS.svg'
import logoTsp from '@/images/logos/Tsp.png'
import logoTezos from '@/images/logos/tezos.png'
import logoMarigold from '@/images/logos/marigold.png'

export function Hero() {
  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        HAKS 2023
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        A hackathon made by students for students.
      </p>
      <div className="mt-36 lg:mt-44">
        <p className="font-display text-base text-slate-900">
          Trusted by these companies so far
        </p>
        <ul className="mt-8 flex items-center justify-center space-x-8 sm:flex-col sm:space-x-0 sm:space-y-10 xl:flex-row xl:space-y-0 xl:space-x-12">
          <li>
            <ul className="flex flex-col items-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-12">
              <li className="flex">
                <Image
                  src={logoKS}
                  alt="Transistor"
                  layout="fixed"
                  unoptimized
                />
              </li>
              <li className="flex">
                <Image src={logoTsp} alt="Tuple" layout="fixed" unoptimized />
              </li>
              <li className="flex">
                <Image
                  src={logoTezos}
                  alt="StaticKit"
                  layout="fixed"
                  unoptimized
                />
              </li>
            </ul>
          </li>
          <li>
            <ul className="flex flex-col items-center space-y-8 sm:flex-row sm:space-y-0 sm:space-x-12">
              <li className="flex">
                <Image
                  src={logoMarigold}
                  alt="Mirage"
                  layout="fixed"
                  unoptimized
                />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Container>
  )
}
