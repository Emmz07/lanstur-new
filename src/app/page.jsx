import Image from 'next/image'
import HeroSection from '@/components/hero-section'
import Content from '@/components/content'
import Feature from '@/components/feature'
import Step from '@/components/step'
import Flex from '@/components/flex'
import Rating from '@/components/Rating'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footerlist from '@/components/Footerlist'
import Popup from '@/components/pop-up'



export default function Home() {
  return (
    <main>
      <Popup />
      <HeroSection />
      <Content />
      <Feature />
      <Step />
      <Flex />
      <Rating />
      <Gallery />
      <Contact />
      <Footerlist />
    </main>
  )
}
