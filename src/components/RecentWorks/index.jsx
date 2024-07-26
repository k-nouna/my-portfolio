import React from 'react'
import Card from '../Card'

function RecentWorks({works}) {

  return (
    <section id='#my-works' className='n-recent-work-c'>
      {works.map((work,index)=>(
        <Card key ={`${work.name}-${index}`}
              topic ={work.topic}
              picture={work.picture}
              domain={work.domain}/>
      ))}
    </section>
  )
}

export default RecentWorks