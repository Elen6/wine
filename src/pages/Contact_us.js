import React, { useState } from 'react'
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import './Contact_us.css';
import sent_bySimon from "../assets/sent_bySimon.png";



const Contact_us = () => {
  const [state, setState] = useState({})
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return { ...prevState, [name]: value }
    }
    )
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(state)
    e.target.reset()
  }



  return (
    <div>
      <div className='contact-container' >
        <img className='sent_bySimonContact' src={sent_bySimon} alt="logo" />
        <div className='menu-contact'>
          <Menu />
        </div>

        <div>


          <div className='create'>
            <form className='form-body' onSubmit={handleSubmit}>

              <input
                onChange={handleChange}
                name="Name"
                type="text"

                required
                placeholder='Name'
              />


              <input
                onChange={handleChange}
                name="Surname"
                type="text"
                placeholder='Surname'
                required
              />


              <input
                onChange={handleChange}
                name="e-mail"
                type="email"
                required
                placeholder='E-mail'

              />



              <textarea cols="30" rows="10"
                onChange={handleChange}
                name="textarea"
                type="text"
                required
                placeholder='Message'
              >
              </textarea>
              <button>Send Message</button>

            </form>



          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact_us;