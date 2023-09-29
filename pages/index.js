import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

import Buildingabout from '@/components/Buildingabout'
import Callaction from '@/components/Callaction'
import Gallary from '@/components/Gallary'
import Service from '@/components/Service'
import Brand from '@/components/Brand'
import Testimonial from '@/components/Testimonial'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
 
   <Hero />
   <Gallary />
   <Service />
 <Buildingabout />
 <Brand />
 <Testimonial />
   <Callaction />
   </>
  )
}
