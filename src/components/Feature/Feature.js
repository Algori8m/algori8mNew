import React from 'react'
import {FaWhatsapp } from "react-icons/fa";
import './Feature.css'


function Feature() {
  return (
    <>
        <a href='https://wa.me/message/6BB7JS45Y55XP1' className='featureWhatsaapWrapper'>
            <FaWhatsapp className='featureWhatsaap' size={55} color="white" />
        </a>
    </> 
  )
}

export default Feature