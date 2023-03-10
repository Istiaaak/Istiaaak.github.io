import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Calendar } from '@/components/Calender'
import { Speakers } from '@/components/Speakers'
import { Resources } from '@/components/Resources'
import { Pricing } from '@/components/Pricing'
import { Challenge } from '@/components/Challenge'
import { Infos } from '@/components/Infos'








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
        <CallToAction />
        <Resources />
        <Challenge />
        <Speakers />
        <Infos />
        <Calendar />
        <Faqs />
      </main>
      <Footer />
    </>
    
  )
}
