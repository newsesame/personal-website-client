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
    // Extract the params in the url
    const params = useParams()
    console.log(params)
    const [apiData, setApiData] = useState(false);
    useEffect(()=> {
        const fetchData = async() => {

            try{
                const apiUrl = process.env.REACT_APP_WEBSERVER_API_ROOT + "/"+params.id;
                const response = await axios.get(apiUrl);

                if (response.status === 200){
                setApiData(response?.data?.record);
                
                }

            } catch (error){
                console.log(error.response)
            }
        };
        fetchData();
        return ()=>{};


    }, []);

    console.log(apiData);


    return (
        <div className='fixed-element'>
            <Row>
                <Col md={6} className="mx-auto">
                    <Row className="mt-5">
                        <Col className="text-center">
                            <h1>Welcome to My Personal Website</h1>
                        </Col>
                    </Row>
                    <Row className="">
                        <Col md="3" className="text-center">
                            <Image height="100" src={selfie} roundedCircle fluid />
                        </Col>
                        <Col md="9" className="d-flex align-items-center">
                            <div>
                                <h2>About Me</h2>
                                <p>
                                    Hi, I'm [Your Name]. I'm a [Your Profession/Student] with a passion for 
                                    [Your Interests/Skills]. Currently, I'm pursuing my minor in statistics and 
                                    working on various software development projects. This website showcases my 
                                    education, experience, and projects.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md="6" xs="12">
                            <h2>Education</h2>
                            {/* <Education /> */}
                        </Col>
                    </Row>
                    <Row className='hover-grey-section text-center'>

                            <Col md="3" className="text-center">
                                <Image height="100" src={cuhkicon} rounded/>
                            </Col>
                            
                            <Col md="3" className="d-flex align-items-center text-center" fluid>
                                <p>Bachelor of Science in Computer Science"</p>

                            </Col>
                        
                
                    </Row>
                </Col>
            </Row>
            <Row>
                <h1>                qweqwdqnfnqeqwdqwdqwdqwdqw</h1>
                <h1>                qweqwdqnfnqeqwdqwdqwdqwdqw</h1>
                <h1>                qweqwdqnfnqeqwdqwdqwdqwdqw</h1>
                <h1>                qweqwdqnfnqeqwdqwdqwdqwdqw</h1>
                <h1>                qweqwdqnfnqeqwdqwdqwdqwdqw</h1>
                <h1>                qweqwdqnfnqeqwdqwdqwdqwdqw</h1>
                <h1>                qweqwdqnfnqeqwdqwdqwdqwdqw</h1>
                <h1>                qweqwdqnfnqeqwdqwdqwdqwdqw</h1>
                <h1>                qweqwdqnfnqeqwdqwdqwdqwdqw</h1>

            </Row>
        </div>
    )
}

export default Root