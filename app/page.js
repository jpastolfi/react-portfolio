/* eslint-disable react/no-unescaped-entities */
'use client'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import Image from 'next/image'
import devpic from '../public/dev-pic.jpeg'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import tasklist from '../public/not-your-ordinary-task-list.jpeg'
import nodejs from '../public/node_js.jpeg'
import csharp from '../public/c_sharp.png'
import blazor_blog from '../public/blazor_blog.jpeg'
import java_spring from '../public/java-spring.png'
import { useState } from 'react'


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode && 'dark'}>
      <main className='bg-white-950 px-10 md-px-20 lg:px-40 dark:bg-gray-950'>
        <section className="min-h-screen">
          <nav className='py-10 flex justify-center'>
            {/* <h1 className='text-xl font-burtons dark:text-gray-100'>developed by me</h1> */}
            <ul className='flex items-center justify-between'>
              <li><BsFillMoonStarsFill onClick = {() => setDarkMode(!darkMode)}className='cursor-pointer text-2xl dark:text-gray-200' /></li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="/João Pedro Astolfi CV.pdf" download="Joao Pedro Astolfi CV" target="_blank" rel="nonreferrer">Download CV</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>João Astolfi</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-gray-200'>Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200'>Hi there! I am a fullstack developer focused in React, Node.js and .Net.</p>
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
            <h3 className='text-3xl py-1 text-teal-600 dark:text-teal-600'>About me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I graduated as a Deck Officer in 2016 and spent 6 years at sea, sailing along the coast of Brazil. During this period I worked alongside crewmembers from Asia, Europe and South America, first as a life-saving appliances officer and later as a navigation officer. <br></br>
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              After these years at sea I decided to make a carreer change so that I could spend more time close to my family and friends. I decided to start studying web development and completed three modules in Trybe, a Brazilian web development school, on the following topics:
            </p>
            <ol className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              <li><span className='font-bold text-teal-600'>Basics on web development:</span> Unix & Bash, Git, HTML & CSS, JS & DOM, Unit Testing</li><br></br>
              <li><span className='font-bold text-teal-600'>Front-end development:</span> React, including components, events and state, controlled components, lifecycle, router, tests with RTL, Redux, context API and React hooks.</li><br></br>
              <li><span className='font-bold text-teal-600'>Back-end development:</span> Docker, MySQL, Node.js & Express, JWT, ORM with Sequelize, unit and integration testing w/ Mocha, Chai and Sinon, Typescript. .Net Core, Asp .Net, unit testing with xUnit</li>
              <li><span className='font-bold text-teal-600'>Other tools and principles:</span> Layered architecture, REST, deployment, OOP and SOLID principles</li>
            </ol>
          </div>
          <h3 className='text-3xl py-1 text-teal-600 dark:text-teal-600'>What you can expect from me</h3>
          <div className='lg:flex gap-10'>  
            <div className='bg-white flex flex-col items-center text-current shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={design} width={100} height={100} alt='design'/>
              <h3 className='text-lg font-medium pt-8 pb-2 text-teal-600'>Background</h3>
              <p className='py-2'>
                Used to work with different cultures, behaviours and perspectives.
              </p>
              <p className='py-2 '>Native Portuguese, fluent English and intermediate Italian</p>
              <p className='py-2 '>Adaptability</p>
              <p className='py-2 '>Increased creativity</p>
            </div>
            <div className='bg-white flex flex-col items-center text-current shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={code} width={100} height={100} alt='design'/>
              <h3 className='text-lg font-medium pt-8 pb-2 text-teal-600'>Hard skills</h3>
              <p className='py-2'>
                Programming logic
              </p>
              <p className='py-2 '>Diversity in thought processes and problem-solving </p>
              <p className='py-2 '>Knowledge in software design patterns, REST API and SOLID principles</p>
              <p className='py-2 '>Experience developing front-end, back-end and full stack applications</p>
            </div>
            <div className='bg-white flex flex-col items-center text-current shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={consulting} width={100} height={100} alt='design'/>
              <h3 className='text-lg font-medium pt-8 pb-2 text-teal-600'>Soft skills</h3>
              <p className='py-2'>
                Clear, effective communication and active listening
              </p>
              <p className='py-2 '>Critical thinking</p>
              <p className='py-2 '>Teamwork, collaboration and conflict resolution</p>
              <p className='py-2 '>Attention to detail</p>
              <p className='py-2 '>Continuous and easy learning experience</p>
            </div>
          </div>
        </section>
        <section>
          <div className='text-center'>
            <h3 className='text-3xl py-1 text-teal-600'>Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Below you can find some of my projects, including front-end only, back-end only and full stack ones. When available, you can access both the deployed website and the GitHub repository.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          <div className='bg-white p-5 rounded-lg basis-1/3 flex-1 flex-col items-center flex'>
            <h1 className='mb-3'>API for managing and monitoring farms and crops ma deusing Java, Spring Boot, Spring JPA, Hibernate, MySQL and Docker</ h1>
            <Image src={java_spring} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' alt='image'/>
             <div className='flex justify-evenly mt-3 w-full'>
              <a href='https://github.com/jpastolfi/farm-and-crop-management-api' target="_blank" className='bg-teal-600 text-white font-bold py-2 px-4 rounded'>Github</a>
            </div>
          </div>
          <div className='bg-white p-5 rounded-lg basis-1/3 flex-1 flex-col items-center flex'>
            <h1 className='mb-3'>Fullstack application made using Blazor, .Net, Entity Framework, MySQL, Docker</ h1>
            <Image src={blazor_blog} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' alt='image'/>
             <div className='flex justify-evenly mt-3 w-full'>
              <a href='https://github.com/jpastolfi/blazor-blog' target="_blank" className='bg-teal-600 text-white font-bold py-2 px-4 rounded'>Github</a>
            </div>
          </div>
          <div className='bg-white p-5 rounded-lg basis-1/3 flex-1 flex-col items-center flex'>
            <h1 className='mb-3'>Hotel managing API made using .Net, Entity Framework, MySQL, Docker and JWT</ h1>
            <Image src={csharp} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' alt='image'/>
             <div className='flex justify-evenly mt-3 w-full'>
              <a href='https://github.com/jpastolfi/hotel-manager-api' target="_blank" className='bg-teal-600 text-white font-bold py-2 px-4 rounded'>Github</a>
            </div>
          </div>
          <div className='bg-white p-5 rounded-lg basis-1/3 flex-1 flex-col items-center flex'>
            <h1 className='mb-3'>Former monolithic .Net API converted to a microservice one</ h1>
            <Image src={csharp} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' alt='image'/>
             <div className='flex justify-evenly mt-3 w-full'>
              <a href='https://github.com/jpastolfi/bets-api' target="_blank" className='bg-teal-600 text-white font-bold py-2 px-4 rounded'>Github</a>
            </div>
          </div>
          <div className='bg-white p-5 rounded-lg basis-1/3 flex-1 flex-col items-center flex'>
            <h1 className='mb-3'>Task list</ h1>
            <Image src={tasklist} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' alt='image'/>
             <div className='flex justify-evenly mt-3 w-full'>
              <a href='https://github.com/jpastolfi/to-do-list-crud' target="_blank" className='bg-teal-600 text-white font-bold py-2 px-4 rounded'>Github</a>
              <a href='https://to-do-list-crud-one.vercel.app/' target="_blank" className='bg-teal-600 text-white font-bold py-2 px-4 rounded'>Website</a>
            </div>
          </div>
          <div className='bg-white p-5 rounded-lg basis-1/3 flex-1 flex-col items-center flex'>
            <h1 className='mb-3'>NodeJS API for a blog</ h1>
            <Image src={nodejs} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' alt='image'/>
             <div className='flex justify-evenly mt-3 w-full'>
              <a href='https://github.com/jpastolfi/futebol-clube' target="_blank" className='bg-teal-600 text-white font-bold py-2 px-4 rounded'>Github</a>
            </div>
          </div>
          <div className='bg-white p-5 rounded-lg basis-1/3 flex-1 flex-col items-center flex'>
            <h1 className='mb-3'>NodeJS API for soccer matches</ h1>
            <Image src={nodejs} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' alt='image'/>
             <div className='flex justify-evenly mt-3 w-full'>
              <a href='https://github.com/jpastolfi/blogs-api' target="_blank" className='bg-teal-600 text-white font-bold py-2 px-4 rounded'>Github</a>
            </div>
          </div>
          <div className='bg-white p-5 rounded-lg basis-1/3 flex-1 flex-col items-center flex'>
            <h1 className='mb-3'>C# API for a recipe application</ h1>
            <Image src={csharp} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' alt='image'/>
             <div className='flex justify-evenly mt-3 w-full'>
              <a href='https://github.com/jpastolfi/c-sharp-api-de-receitas' target="_blank" className='bg-teal-600 text-white font-bold py-2 px-4 rounded'>Github</a>
            </div>
          </div>
          <div className='bg-white p-5 rounded-lg basis-1/3 flex-1 flex-col items-center flex'>
            <h1 className='mb-3'>C# Console application simulating a game shop</ h1>
            <Image src={csharp} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' alt='image'/>
             <div className='flex justify-evenly mt-3 w-full'>
              <a href='https://github.com/jpastolfi/c-sharp-games-console' target="_blank" className='bg-teal-600 text-white font-bold py-2 px-4 rounded'>Github</a>
            </div>
          </div>
          </div>
        </section>
      </main>
    </div>
  )
}
