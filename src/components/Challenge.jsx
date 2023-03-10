import Image from 'next/image'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.png'

export function Challenge() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-slate-900 py-32"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            The challenge
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            You will have to code..
          </p>
          <p className="mt-4 text-lg tracking-tight text-white">
          
          </p>
          <p className=" text-3xl tracking-tight text-white">
            
          </p>
        </div>
      </Container>
    </section>
  )
}
