import React from 'react';
import { Col, Row, Image } from "react-bootstrap";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import selfie from '../../image/selfie.jpg';

const AboutSection = () => {
  return (
    <div className='Container space'>
      <div style={{ flex: '1 1' }}>
        <Image className="selfie items" src={selfie} roundedCircle />
      </div>
      
      <div className="items" style={{ flex: '3 1' }}>
        <h2>About Me</h2>
        <p>
          Hello. I am a Year 3 Computer Science student at the Chinese University of Hong Kong, with a minor in Statistics. Currently, I'm pursuing my minor in statistics and 
          working on various software development projects.
        </p>
        <Col className='no-padding'>
          <Row className="align-items-center">
            <Col> Please visit my Project on Github:
              <a href="https://github.com/newsesame" target="_blank" rel="noopener noreferrer">
                <FaGithub size={50} color="black"/>
              </a>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col>Also, feel free to connect me via linkedin:
              <a href="https://www.linkedin.com/in/josh-chau/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={50} style={{ marginRight: '10px' }} />
              </a>
            </Col>
          </Row>

          <Row className="align-items-center">
            <Col>
              I do Leetcode sometimes as well! 
              <a href="https://leetcode.com/u/newsesame/" target="_blank" rel="noopener noreferrer">
                <Image style={{ 
                  marginTop:"7.5px",
                  marginBottom:"7.5px"
                }} src="Leetcode.png" alt="photo" height="35px" roundedCircle/>
              </a>
            </Col>
          </Row>
        </Col>
      </div>
    </div>
  );
};

export default AboutSection;
