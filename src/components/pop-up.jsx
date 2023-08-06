"use client"
import React from 'react';
import { useEffect, useRef } from 'react'


const Popup = () => {

  useEffect(() => {
  setTimeout(() => {
    modalRef.current.classList.add('show-modal')
  }, 30000)
  }, [])
  const modalRef = useRef()
  const closeModal = () => {
    modalRef.current.classList.remove('show-modal')
  }
  return (
    <div ref={modalRef} id='popup' className="popup">
    <div id='popup-wrap' className=" shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
      <h2 id='news-head' className="text-white text-lg mb-1 font-medium title-font">Subscribe To Our Newsletter</h2>
          <button id='close' onClick={closeModal} className="text-white bg-indigo-500 border-0  px-5 focus:outline-none hover:bg-indigo-600 rounded text-lg">X</button>
      <p className="leading-relaxed text-white mb-5">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
      <div className="relative mb-4">
        <textarea id="message" name="message" placeholder='Email' className="w-full bg-gray-500 rounded border border-white-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-15 text-base outline-none text-white-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button id='sub' className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Subscribe</button>
    </div>
  </div>
  )
}

export default Popup