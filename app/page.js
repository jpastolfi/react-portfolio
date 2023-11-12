'use client'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import Image from 'next/image'
import devpic from '../public/dev-pic.jpeg'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import tasklist from '../public/not-your-ordinary-task-list.jpeg'
import { useState } from 'react'


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode && 'dark'}>
      <main className='bg-white-950 px-10 md-px-20 lg:px-40 dark:bg-gray-950'>
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-gray-100'>developed by jp</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick = {() => setDarkMode(!darkMode)}className='cursor-pointer text-2xl dark:text-gray-200' /></li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="/João Astolfi CV.pdf" download="Joao Astolfi CV" target="_blank" rel="nonreferrer">Download Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>João Astolfi</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-gray-200'>Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200'>Fullstack developer but I actually prefer backend lol</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href='https://www.linkedin.com/in/jpastolfi/' target='_blank'><AiFillLinkedin /></a>
            <a href='https://github.com/jpastolfi' target='_blank'><AiFillGithub /></a>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:h-96flex flex-col items-center mb-10'>
            <Image src={devpic} alt='pic' layout='fill' objectFit='cover' />
          </div>
        </section>
        <section className='text-center'>
          <div>
            <h3 className='text-3xl py-1 dark:text-gray-200'>Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I have done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              Yeah yeah I am just going to write a lot of random things in here because apparently my lorem is not working so I have to do it manually.
            </p>
          </div>
          <div className='lg:flex gap-10'>  
            <div className='bg-white flex flex-col items-center text-current shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={design} width={100} height={100} alt='design'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful designs</h3>
              <p className='py-2'>
                Creating elegant designs suited for your needs.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1 '>Photoshop</p>
              <p className='text-gray-800 py-1 '>Illustrator</p>
              <p className='text-gray-800 py-1 '>Figma</p>
            </div>
            <div className='bg-white flex flex-col items-center text-current shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={code} width={100} height={100} alt='design'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful designs</h3>
              <p className='py-2'>
                Creating elegant designs suited for your needs.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1 '>Photoshop</p>
              <p className='text-gray-800 py-1 '>Illustrator</p>
              <p className='text-gray-800 py-1 '>Figma</p>
            </div>
            <div className='bg-white flex flex-col items-center text-current shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={consulting} width={100} height={100} alt='design'/>
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful designs</h3>
              <p className='py-2'>
                Creating elegant designs suited for your needs.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1 '>Photoshop</p>
              <p className='text-gray-800 py-1 '>Illustrator</p>
              <p className='text-gray-800 py-1 '>Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div className='text-center'>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I have done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              Yeah yeah I am just going to write a lot of random things in here because apparently my lorem is not working so I have to do it manually.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          <div className='bg-white p-5 rounded-lg basis-1/3 flex-1 flex-col items-center justify-center'>
            <Image src={tasklist} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' alt='image'/>
             <div className='flex justify-evenly mt-3 w-full'>
              <a href='https://github.com/jpastolfi/to-do-list-crud' target="_blank" className='bg-teal-600 text-white font-bold py-2 px-4 rounded'>Github</a>
              <a href='https://to-do-list-crud-one.vercel.app/' target="_blank" className='bg-teal-600 text-white font-bold py-2 px-4 rounded'>Website</a>
            </div>
          </div>
          </div>
        </section>
      </main>
    </div>
  )
}
