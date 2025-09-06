import React from 'react'
export default function Hero(){
  return (
    <section className="py-20 text-center">
      <h1 className="text-5xl font-extrabold mb-4">Hi, I'm <span className="text-primary">Vasanth Gondrala</span></h1>
      <p className="text-xl text-slate-300">Frontend Developer | Full-Stack Learner</p>
      <div className="mt-6 flex justify-center gap-4">
        <a href="/vasanth_resume.pdf" download className="px-6 py-3 border border-slate-500 rounded">Download Resume</a>
        <a href="#projects" className="px-6 py-3 border border-slate-500 rounded">View Projects</a>
      </div>
    </section>
  )
}
