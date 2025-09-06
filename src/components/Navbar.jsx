import React from 'react'
export default function Navbar(){
  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-800 shadow z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="font-bold text-xl text-primary">Vasanth Gondrala</div>
        <div className="space-x-4">
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#skills" className="hover:text-primary">Skills</a>
          <a href="#projects" className="hover:text-primary">Projects</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </div>
      </div>
    </nav>
  )
}