import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div id='tainted' className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-5xl text-5xl mb-4 font-large text-gray-900">Find The Best <span>Freelancers </span> 
        <br className="hidden lg:inline-block" />For Your E-Commerce Business
      </h1>
      <p id="hero-para" className="mb-8 leading-relaxed ">
        Introducting Lanstur, your trusted ally in the world of freelance services! With a committment to excellence and passion for delivering topnotch results.  
      </p>
      <div id='clicks' className="flex justify-center">
        <a href=""><button id='click1' className="inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg">Get Started Now</button></a>
        <a href=""><button id='click2' className="ml-4 inline-flex text-black-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Sign In</button></a>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image className="object-cover object-center rounded ml-3 pl-0" alt="hero" src="/img/invest2.png" width={428} height={377} />
    </div>
  </div>
</section>
  )
}

export default HeroSection