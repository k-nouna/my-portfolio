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
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "40px",
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20px",
        }
      }
    ]
  };

  return (
    <section id='my-works' name="my-works" className='py-16 px-4 md:px-10 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12 animate-fadeInUp'>
          <span className='text-[#2a9df4ff] font-semibold text-sm uppercase tracking-wider mb-2 block'>Portfolio</span>
          <h1 className='text-gray-900 text-4xl md:text-5xl font-bold mb-4'>My Work</h1>
          <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
            Discover a selection of my most significant projects, combining technological innovation and real-world impact.
          </p>
        </div>
        
        <div className='mx-4 my-8 slider-container animate-fadeInUp'>
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
        </div>
    </section>
  )
}

export default RecentWorks