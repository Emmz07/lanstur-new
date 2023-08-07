'use client'
import React, { useState } from 'react';
import Image from 'next/image'


const Header = () => {
    const [navbar, setNavbar] = useState(false)
  return (
  <header className="text-gray-600 body-font">
    <div id='head-dead'>
      <a id="head-img">
      <Image className="object-cover object-center rounded" alt="hero" src="/img/Lanstur11.png" width={120} height={190}/>
      </a>
      <div>
        <button id='head-butt'  className='p-2 text-gray-700 rounded-md outine-none focus:border-400-gray' onClick={() => setNavbar(!navbar)}>
        {navbar ? (
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/></svg>       ):(
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/></svg>
        )}
        </button>
      </div> 
        </div>
        <div className={navbar ? " block" : "hidden"}>
            <div id='menu-wrapper' >
                <ul id='menu-nav' >
                    <li className='pd-6 text-xl text-black py-2'>
                       Home 
                    </li>
                    <li className='pd-6 text-xl text-black py-2'>
                        Explore
                    </li>
                    <li className='pd-6 text-xl text-black py-2'>
                        Find Jobs
                    </li>
                    <li className='pd-6 text-xl text-black py-2'>
                        Sign in
                    </li>
                </ul>

            </div>
        </div>
  </header>
  )
}

export default Header
