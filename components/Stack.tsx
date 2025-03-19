import React from 'react'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3 } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { DiReact } from 'react-icons/di'
import { SiRedux } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'

const stackItems = [
  {id: 1, name: "HTML", icon: FaHtml5, color: '#E44D26'},
  {id: 2, name: "CSS", icon: FaCss3, color: '#1572B6'},
  {id: 3, name: "JavaScript", icon: SiJavascript, color: '#F7DF1E'},
  {id: 4, name: "Typescript", icon: SiTypescript, color: '#3178C6'},
  {id: 5, name: "Tailwind", icon: SiTailwindcss , color: '#38BDF8'},
  {id: 6, name: "React", icon: DiReact , color: '#61DAFB'},
  {id: 7, name: "Redux", icon: SiRedux , color: '#764ABC'},
  {id: 8, name: "Next.JS", icon: TbBrandNextjs, color: '#000000'},
]
const Stack = () => {
  return (
    <section className='py-6 glass' id='#stack'>
      <div className='max-w-[1200px] mx-auto px-4 text-center'>
        <h2 className='text-5xl text-gray-200 font-bold mb-4'>My Stack</h2>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
          {stackItems.map((item) => (
            <div
              key={item.id}
              className='flex items-center justify-center flex-col rounded-xl p-4'
            >
              <div className='mb-4 bg-white/10 p-6 rounded-xl'>
                {React.createElement(item.icon, {
                  className: "w-32 h-32",
                  style: {color: item.color}
                })}
              </div>
              <p className='text-gray-400 font-semibold'>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stack