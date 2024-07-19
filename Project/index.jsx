import React from 'react'
import "./Project.css"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from '../../data';

const Project = () => {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    centerMode: true,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint:600,
        settings:{
          slidesToShow: 1,
          centerPadding: 0,
        }
      }
    ]
  };
  return (
    <section id='project'>
      <div className="project_top">
        <h1 className="title">Our <span className="g-text">Projects</span></h1>
        <h3 className="sub__title">
        Innovative construction projects, exceptional craftsmanship.
        </h3>
      </div>
      <Slider {...settings} className="projects__container">
        {
          projects.map((project,index) =>(
            <React.Fragment key={index}>
              <div className="image__container">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="box">
                <h1 className="name">{project.title}</h1>
              </div>
              <div className="details">
                <h3 className="name">{project.title}</h3>
                <p className="text__muted description">{project.description}</p>
              </div>
              <button className="btn">Read More</button>
            </React.Fragment>
          ))
        }
      </Slider>
    </section>
  )
}

export default Project