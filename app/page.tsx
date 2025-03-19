import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stack from '@/components/Stack'
import { LogoAnimation } from '@/components/LogoAnimation'
import { Portofolio } from '@/components/Portofolio'
import { KeyMetrics } from '@/components/KeyMetrics'
import { Contact } from '@/components/Contact'

const home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Stack />
    <LogoAnimation />
    <Portofolio />
    <KeyMetrics />
    <Contact />
    </>
  )
}

export default home