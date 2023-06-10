"use client"

import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'


export default function Home() {
  return (
    <>
    <div className='absolute'>
      <Background />
    </div>
    <div className='relative'>
      <Navbar />
      <Hero />
      <About />
    </div>
    </>
  )
}
