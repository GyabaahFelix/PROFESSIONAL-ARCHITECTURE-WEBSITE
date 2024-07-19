import React from 'react'
import "./ServiceCard.css"

const ServiceCard = ({
  name,
  icon,
  description
}) => {
  return (
    <div className="service__card">
      <div className="icon__container">
        {icon}
        <h3 className="name">{name}</h3>
        <p className="text__muted description">{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard