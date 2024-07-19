import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <section id='contact'>
      <div className="container">
        <div className="contact__form">
          <div className="contact__form__top"></div>
          <h1 className="title">
            <span className="g-text">Join forces with us!</span>
          </h1>
          <p className="text__muted">
          We construct with meticulous care and dedication, crafting buildings that endure through the ages. It's just that simple!

          </p>
          </div>
          <div className="contact__form__middle"></div>
          <div className="row">
            <input type="text" placeholder='First name' name='firstname' className='control'/>
            <input type="text" placeholder='Last name' name='lastname' className='control'/>
          </div>
          <div className="row">
            <input type="email" placeholder='Email address' name='email' className='control'/>
            <input type="tel" placeholder='Phone number' name='phone' className='control'/>
          </div>
          <textarea name="message" cols={30} rows={10} placeholder='Message' className='control'></textarea>
          <div className="contact__form__bottom"></div>
          <div className="contact__options"></div>
        
      </div>
    </section>
  )
}

export default Contact