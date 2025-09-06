import React from 'react'
export default function Contact(){
  return (
    <section id="contact" className="py-12">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="text-slate-300 mb-4">Feel free to reach out via email or connect on LinkedIn/GitHub.</p>
      <ul className="space-y-2 text-slate-300">
        <li><strong>Email:</strong> <a className="text-primary" href="mailto:vasanthvs.7032@gmail.com">vasanthvs.7032@gmail.com</a></li>
        <li><strong>Phone:</strong> 7032800833</li>
        <li><strong>LinkedIn:</strong> <a className="text-primary" href="https://www.linkedin.com/in/vasanth-gondrala/">linkedin.com/in/vasanth-gondrala</a></li>
        <li><strong>GitHub:</strong> <a className="text-primary" href="https://github.com/vasanthgondrala-7">github.com/vasanthgondrala-7</a></li>
      </ul>
    </section>
  )
}