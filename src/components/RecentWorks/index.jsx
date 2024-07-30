import React from 'react'
import Card from '../Card'

function RecentWorks({works}) {

  return (
    <section id='#my-works' name="my-works" className='flex flex-col gap-2 '>
      <h1 className='text-black text-5xl font-extrabold'>My rescent work</h1>
      <div className=' flex overflow-scroll m-[10px] gap-5'>
        {works.map((work,index)=>(
          <Card key ={`${work.name}-${index}`}
                topic ={work.topic}
                technologies={work.technologies}
                domains={work.domains}
                description={work.description}/>
        ))}
      </div>
      
    </section>
  )
}

export default RecentWorks