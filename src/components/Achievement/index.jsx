import React, { useState,useEffect } from 'react'
import "./Achievement.css"
import { FaDiagramProject, FaUsersLine } from 'react-icons/fa6'
import Odometer from 'react-odometerjs';

import { GiTeamIdea } from 'react-icons/gi'
import { FaAward } from 'react-icons/fa'

const Achievement = () => {
  const [clients,setClients] = useState(0);
  const [projects,setProjects] = useState(0);
  const [teams,setTeams] = useState(0);
  const [awards,setAwards] = useState(0);
  useEffect(()=>{
    const timeOutId = setTimeout(() => {
      setClients(120);
      setProjects(150);
      setTeams(44);
      setAwards(89);
    },3000);

    return () => clearTimeout(timeOutId)
  },[])
  return (
    <div className='achievement__container'>
      {/* Start Achievements */}
      <div className="achievement">
        <div className="icon__container">
          <FaUsersLine/>
        </div>
        <div className="details">
          <div className="count__row">
            <Odometer value={clients} className="title"/>
            <h1 className="g1-text title">K</h1>
          </div>
          <div className="small text__muted">Happy Customers</div>
        </div>
      </div>
      {/* End Achievements */}

      {/* Start Achievements */}
      <div className="achievement">
        <div className="icon__container">
          <FaDiagramProject/>
        </div>
        <div className="details">
          <div className="count__row">
            <Odometer value={projects} className="title"/>
            <h1 className="g1-text title">+</h1>
          </div>
          <div className="small text__muted">Completed Projects</div>
        </div>
      </div>
      {/* End Achievements */}

      {/* Start Achievements */}
      <div className="achievement">
        <div className="icon__container">
          <GiTeamIdea/>
        </div>
        <div className="details">
          <div className="count__row">
            <Odometer value={teams} className="title"/>
            <h1 className="g1-text title">+</h1>
          </div>
          <div className="small text__muted">Expert Workers</div>
        </div>
      </div>
      {/* End Achievements */}


      {/* Start Achievements */}
      <div className="achievement">
        <div className="icon__container">
          <FaAward/>
        </div>
        <div className="details">
          <div className="count__row">
            <Odometer value={awards} className="title"/>
            <h1 className="g1-text title">+</h1>
          </div>
          <div className="small text__muted">Awards won</div>
        </div>
      </div>
      {/* End Achievements */}


    </div>
  )
}

export default Achievement