import React from 'react'
import Image from 'next/image'


const Header = () => {
  return (
  <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <a id="head-img">
      <Image className="object-cover object-center rounded" alt="hero" src="/img/Lanstur11.png" width={170} height={200}/>
      </a>
      <nav id='nav-bars' className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a id='nav-bar' className="mr-5 hover:text-gray-900">Home</a>
        <a id='nav-bar' className="mr-5 hover:text-gray-900">Jobs Postings</a>
        <a id='nav-bar' className="mr-5 hover:text-gray-900">Freelancers</a>
        <a id='nav-bar' className="mr-5 hover:text-gray-900">Become a Freelancer</a>
      </nav>
      <div id='top-nav' >
        <a className="mr-5" id='top-right-signin' >Sign In</a>
          <a id='top-right-signup' className="pt-1.5 pb-1.5 pl-3 pr-3">
            <button className='button-me'>Sign Up</button>
          </a>
      </div>

    </div>
  </header>
  )
}

export default Header
