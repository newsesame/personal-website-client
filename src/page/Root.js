import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import {Col, Container, Row, Image } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Education from '../components/layout/Education';
import selfie from '../image/selfie.jpg';
import cuhkicon from '../image/cuhkicon.png';
const categoryColors = {
    "Language": "hsl(208,54%, 73%)",  // Node.js 綠色
    // "Frontend": "#b2b2b2", // JavaScript 黃色
    "Backend": "hsl(208,54%, 92%)",  // Node.js 綠色
    "Database": "hsl(208,54%, 73%)",  // Node.js 綠色
    "Others": "hsl(208,54%, 92%)",  // Node.js 綠色
    // 其他類別和顏色...
  };
const techStack = {
    "Language": [
        { name: 'Python', image: 'Python.png', familiarity: "Medium" },
        { name: 'GO Lang', image: 'Golang.png',familiarity: "Medium" },
        { name: 'Java', image: 'Java.png',familiarity: "Medium" },

    ],
    // "Frontend": [
    //     { name: 'HTML5', image: 'path-to-image/html5.png',familiarity: "Medium" },
    //     { name: 'CSS3', image: 'path-to-image/css3.png',familiarity: "Medium"},
    //     { name: 'JavaScript', image: 'path-to-image/javascript.png',familiarity: "Medium" },
    // ],
    "Backend": [
        { name: 'Node.js', image: 'nodejs.png', familiarity: "Medium" },
        { name: 'Golang', image: 'gofiber.png', familiarity: "Medium"},
    ],
    "Database": [
        { name: 'MongoDB', image: 'mongodb.svg', familiarity: "Medium" },
        { name: 'Postgresql', image: 'postgresql.png', familiarity: "Basic" },
        
    ],
    "Others": [
        { name: 'Selenium', image: 'selenium.webp', familiarity: "Medium" },
        { name: 'Docker', image: 'Docker.png', familiarity: "Medium" },
        
    ],
};
// import Education from '../page/Education';
const Root = () => {
    // Extract the params in the url
    const params = useParams()
    // console.log(params)
    // const [apiData, setApiData] = useState(false);
    // useEffect(()=> {
    //     const fetchData = async() => {

    //         try{
    //             const apiUrl = process.env.REACT_APP_WEBSERVER_API_ROOT + "/"+params.id;
    //             const response = await axios.get(apiUrl);

    //             if (response.status === 200){
    //             setApiData(response?.data?.record);
                
    //             }

    //         } catch (error){
    //             console.log(error.response)
    //         }
    //     };
    //     fetchData();
    //     return ()=>{};


    // }, []);

    // console.log(apiData);


    return (
        <div fluid>

            <div  className='Container text-center' >
                <h1 style={{ flex: '1 1 100px' }}>Welcome to My Personal Website</h1>
                
               
                {/* <h1 style={{ flex: '1 1 100px' }}>Welcome to My Personal Website</h1> */}


            </div>
            <div  className='Container text-center space' >
                <p style={{ flex: '1 1 100px' }}className='text-center'> (I am really bad at and not interested in Frontend.... I feel so sorry if the design is unpleasant to you. -,-
                <br/>I just want to practice my backend and database skills. And the webserver is written in GoLang and the database is MongoDB.)
                </p>
            </div>


            <div className='Container space'>
                <div style={{ flex: '1 1',}}>
                    <Image className="selfie items" src={selfie} roundedCircle />
                </div>
                
                <div className="items" style={{ flex: '3 1' }}>
                    <h2>About Me</h2>
                    <p>
                        Hello. I am a Year 3 Computing Science student at the Chinese University of Hong Kong, with a minor in Statistics. Currently, I'm pursuing my minor in statistics and 
                        working on various software development projects. 
                        
                        This website showcases my education, experience, and projects.
                    </p>
                    <Col className='no-padding'>
                        <Row className="d-flex align-items-center">
                            <Col> Please visit my Project on Github:<a href="https://github.com/newsesame" target="_blank" rel="noopener noreferrer"><FaGithub size={50} /></a></Col>
                  
                                
                        </Row>
                        <Row className="d-flex align-items-center">
                            
    
                            <Col>Also, Feel free to connect me via linkedin:<a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer"><FaLinkedin size={50} style={{ marginRight: '10px' }} /></a></Col>
                                
                    
                    
                            
                        
                        </Row>
                        <Row className="d-flex align-items-center">
                            <Col>
                                I do Leetcode sometimes as well! 
                                <a href="https://leetcode.com/u/newsesame/" target="_blank" rel="noopener noreferrer">
                                <Image  style={{ 
                                        // backgroundColor: "#fff",  // 設置白色背景
                                        // borderRadius: "50%",       // 圓形背景
                                        // padding: "10px",           // 添加內邊距使圖標四周有空白
                                        // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" ,// 添加陰影
                                        marginTop:"7.5px",
                                        marginBottom:"7.5px"
                                        
                                    }} src="Leetcode.png" alt="photo"   height="35px" roundedCircle/>
                                </a></Col>
                  
                                
                        </Row>
                    </Col>

                    
                    
                </div>

            </div>
            <div style={{marginBottom: "0px",}} className='Container space'>

            <h2>Education</h2>

           
            </div>
            <div className='Container space'>
                <div style={{ flex: '1 1' }}><Image height="" src={cuhkicon} rounded className='shadow cuhkicon'/></div>
                <div style={{ flex: '5 1', paddingLeft: "40px" }} >
                    <h3 >B.Sc. in Computer Science <br></br>Minor in Statistics</h3>
                    <p>The Chinese University of Hong Kong<br></br>Sept 2022 to Present</p>
                </div>
            </div>

           
            <div style={{marginBottom: "0px",}} className='Container space'>
            <h2>Tech Stack</h2>
            </div>
            <div className='Container'>

                <Col>
                {Object.keys(techStack).map((category, index) => (
                
                <Row 
                    key={index}                            
                    style={{ 
                    backgroundColor: categoryColors[category],
                    borderRadius: "15px", // 圓角效果,
                    marginBottom: "10px",
                    padding: "15px"
                }}>
                    <Col md="3">
                    <h3 style={{marginBottom: "0px",}}>{category}</h3>
                    <p>(Familiarity)</p>
                    </Col>
                    {techStack[category].map((tech, idx) => (

                        <Col 
                            key={idx} 
                            className="d-flex flex-column align-items-center" >
                            <Row>
                                <Image  style={{ 
        backgroundColor: "#fff",  // 設置白色背景
        borderRadius: "50%",       // 圓形背景
        padding: "10px",           // 添加內邊距使圖標四周有空白
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" ,// 添加陰影
        marginBottom:"5px"
        
      }} className="shadow" src={tech.image} alt={tech.name}   height="60px" />
                            </Row>
                            <Row>
                                <p style={{marginBottom: "0px",}}>{tech.name}</p>
                            </Row>
                            <Row>
                                <p>({tech.familiarity})</p>
                            </Row>
                        </Col>
                    ))}
                </Row>
                    
                ))}
                </Col>
                
            </div>


            {/* <div style={{marginBottom: "0px",}} className='Container'>

                <h2>About This Project</h2>
            </div>
            <div style={{marginBottom: "0px",}} className='Container'>
                <p>qweqweqeqweqweq</p>
            </div>
            <img src={process.env.REACT_APP_WEBSERVER_API_ROOT+"cover/66ba8dc39357a6a189f9f26c"} alt="Image"/>
            <Row>
                <Col md={6} className="mx-auto">

                    <Row className="">
                        <Col md="3" className="text-center">
                            <Image height="100" src={selfie} roundedCircle fluid />
                        </Col>
                        <Col md="9" className="d-flex align-items-center">
                            <div>
                                <h2>About Me</h2>
                                <p>
                                    Hi, I'm Josh Chau. I'm Currently a year 3 computer science student, with a passion for 
                                    software development and data analytics skills. Currently, I'm pursuing my minor in statistics and 
                                    working on various software development projects. This website showcases my 
                                    education, experience, and projects.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col md="6" xs="12">
                            <h2>Education</h2>
                            
                        </Col>
                    </Row>
                    <Row className='hover-grey-section text-center'>

                            <Col md="3" className="text-center">
                                <Image height="10px" src={cuhkicon} rounded/>
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

            </Row> */}
        </div>
    )
}

export default Root