import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Calendar } from '@/components/Calender'

export default function Home() {
  return (
    
    <>
      <Head>
        <title>HAKS - 2023</title>
        <meta
          name="description"
          content=""
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Calendar />
        <Faqs />
      </main>
      <Footer />
    </>
    
  )
}
