import React from 'react'
import { HeaderMain } from './components/HeaderMain'
import { Links } from './components/Links'
import { AboutMe } from './components/AboutMe'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { HeroSection } from './components/HeroSection'

export function Home() {
  return (
    <>
      <HeaderMain />
      <HeroSection />
      <Links />
      <AboutMe />
      <Skills />
      <Contact />
    </>
  )
}
