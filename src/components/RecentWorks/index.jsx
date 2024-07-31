import React from 'react'
import Card from '../Card'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function RecentWorks({works}) {

  var settings = {
    dots:true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 4,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10%",
        }
      }
    ]
  };

  return (
    <section id='#my-works' name="my-works" className='flex flex-col gap-2'>
      <h1 className='text-black text-4xl font-extrabold'>My works</h1>
      
        <div className='m-[15px] slider-container'>
        <Slider {...settings}>
            {works.map((work,index)=>(
              <Card key ={`${work.name}-${index}`}
                    topic ={work.topic}
                    technologies={work.technologies}
                    domains={work.domains}
                    description={work.description}/>
            ))}
          </Slider>
        </div>
      
      
    </section>
  )
}

export default RecentWorks