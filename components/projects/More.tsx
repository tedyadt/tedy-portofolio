import React from 'react'
import Image from 'next/image'

function More() {
    return (
      <div className="py-20 flex flex-col items-center justify-center space-y-4">
        <p className="text-lg text-fun-gray-light">
          Want to see more of my work?
        </p>
        <a 
          href="https://github.com/tedyadt" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center space-x-3 px-6 py-3 bg-fun-gray-dark hover:bg-fun-pink/10 border border-fun-gray/20 hover:border-fun-pink/50 rounded-xl transition-all duration-300 group"
        >
          <Image src="/static/icons/github.svg" width={24} height={24} alt="GitHub" className="opacity-70 group-hover:opacity-100" />
          <span className="font-bold text-white group-hover:text-fun-pink transition-colors">Explore my GitHub</span>
        </a>
      </div>
    );
}

export default More