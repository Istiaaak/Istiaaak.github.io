/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <Image
          src={backgroundImage}
          alt=""
          width={2347}
          height={1244}
          layout="fixed"
          unoptimized
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            HAKS 2022
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            You will go thought a 2-day hackathon starting from 21st to 23rd April 2023 near Paris.
          </p>
          <p className="mt-4 text-lg tracking-tight text-white">
          Don't miss the chance to compete for the prize :
          </p>
          <p className=" text-3xl tracking-tight text-white">
            the 24.000 € prize pool awaits you!
          </p>
          <ButtonLink href="/register" color="white" className="mt-10">
            Register
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
