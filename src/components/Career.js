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
const Career = () => {



    return (
        
        <>
        <div className='Container space'>
            <h2 style={{ flex: '1 1 100px' }}>CareerPart</h2>
        </div>
        <div className="Container">
            <p>I would like become an Quant Developer.
                <br></br>
                <br></br>

            "Programming is not 10% enough in the whole branch of computer science."" This is one of the things my professor said that impressed me a lot.  
            I have always believed that as a computer science undergraduate, my value does not lie in the fact that I only call different library/tech stacks. I also do not want this to be my career for the next few decades, although I do know that we need to know a lot of application knowledge in the workplace.  
            
            </p>
        </div>
            
            
            


        </>
    
    )
}

export default Career