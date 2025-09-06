import React from 'react'
const skills = ['HTML','CSS','Bootstrap','JavaScript','React.js','Python','Express','Node.js','SQLite','MongoDB','Git','Power BI']
export default function Skills(){
  return (
    <section id="skills" className="py-12">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map(s => <span key={s} className="px-3 py-1 bg-slate-700 rounded">{s}</span>)}
      </div>
    </section>
  )
}