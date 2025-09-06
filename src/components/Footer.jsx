import React from 'react'
export default function Footer(){
  return (
    <footer className="mt-12 py-6 text-center text-slate-400 border-t border-slate-700">
      © {new Date().getFullYear()} Vasanth Gondrala — All rights reserved.
    </footer>
  )
}