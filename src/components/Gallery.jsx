import React from 'react'
import Image from 'next/image'

const Gallery = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font  mb-4 text-gray-900">Our Clients</h1>
    </div>
    <div id='gallery-img' className="flex flex-wrap ml-6">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
        <Image className="object-cover object-center rounded" alt="hero" src="/img/clients/client-1.png" width={258} height={277} />
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
        <Image className="object-cover object-center rounded" alt="hero" src="/img/clients/client-2.png" width={258} height={277} />
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
        <Image className="object-cover object-center rounded" alt="hero" src="/img/clients/client-3.png" width={258} height={277} />
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
        <Image className="object-cover object-center rounded" alt="hero" src="/img/clients/client-4.png" width={258} height={277} />
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
        <Image className="object-cover object-center rounded" alt="hero" src="/img/clients/client-5.png" width={258} height={277} />
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
        <Image className="object-cover object-center rounded" alt="hero" src="/img/clients/client-6.png" width={258} height={277} />
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Gallery
