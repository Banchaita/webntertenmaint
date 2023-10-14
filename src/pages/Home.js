import React from 'react'
import Link from 'next/link';
import Navbar from '@/components/Navbar'


const Home = () => {
  return (
    <>
      <section className='home-area'>
        <Navbar />
        <div className="flex justify-center items-center mt-14 mb-7">
          <p className="uppercase text-2xl">Choose your entertainment</p>
        </div>
        <div className="flex justify-center items-center">

          <div className="grid grid-cols-2 gap-4">
            <Link href="/StoryTeller">
              <div className="storyteller p-4">
              </div>
            </Link>

            <Link href="/Musicon">
              <div className="musicon p-4">
              </div>
            </Link>

            <Link href="/LifeStyle">
              <div className="lifestyle p-4">
              </div>
            </Link>

            <Link href="/SoundTrack">
              <div className="soundtrack p-4">
              </div>
            </Link>
          </div>
        </div>

      </section>

    </>
  )
}

export default Home