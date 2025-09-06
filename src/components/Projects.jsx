import React from 'react'
import { projects } from '../data/projects'
export default function Projects(){
  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(p => (
          <div key={p.id} className="bg-slate-800 p-4 rounded">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-slate-300 mt-2">{p.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {p.tech.map(t => <span key={t} className="px-2 py-1 bg-slate-700 text-sm rounded">{t}</span>)}
            </div>
            <div className="mt-3 flex gap-4">
              <a href={p.github} className="text-primary">GitHub</a>
              <a href={p.live} className="text-slate-300">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}