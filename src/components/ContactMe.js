import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';


import {Col, Container, Row, Image } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Education from '../components/layout/Education';
import selfie from '../image/selfie.jpg';
import cuhkicon from '../image/cuhkicon.png';


// import Education from '../page/Education';
const Root = () => {



    return (
        <div fluid>

            <div  className='Container text-center' >
                <h1 style={{ flex: '1 1 100px' }}>Welcome to My Personal Website</h1>
                
               
                {/* <h1 style={{ flex: '1 1 100px' }}>Welcome to My Personal Website</h1> */}


            </div>
  
        </div>
    )
}

export default ContactMe