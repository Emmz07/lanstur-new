import React from 'react'
import Image from 'next/image'


const Header = () => {
  return (
  <header className="text-gray-600 body-font">
    <div id='head-dead'>
      <a id="head-img">
      <Image className="object-cover object-center rounded" alt="hero" src="/img/Lanstur11.png" width={120} height={190}/>
      </a>
      <a id='head-menu'>
      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="28px" height="28px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/></svg>
      </a>
    </div>
  </header>
  )
}

export default Header
