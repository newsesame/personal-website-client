import React from 'react';
import { Col, Row, Image } from "react-bootstrap";

const categoryColors = {
  "Language": "hsl(208,54%, 73%)", // Deep Blue
  "Backend": "hsl(208,54%, 92%)",  // Pale Blue
  "Database": "hsl(208,54%, 73%)",
  "Others": "hsl(208,54%, 92%)",  
};

const techStack = {
  "Language": [
    { name: 'Python', image: 'Python.png', familiarity: "Medium" },
    { name: 'GO Lang', image: 'Golang.png', familiarity: "Medium" },
    { name: 'Java', image: 'Java.png', familiarity: "Medium" },
  ],
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

const TechStackSection = () => {
  return (
    <>
      <div style={{marginBottom: "0px"}} className='Container space'>
        <h2>Tech Stack</h2>
      </div>

      <div className='Container'>
        <Col>
          {Object.keys(techStack).map((category, index) => (
            <Row 
              key={index}                            
              style={{ 
                backgroundColor: categoryColors[category],
                borderRadius: "15px",
                marginBottom: "10px",
                padding: "15px"
              }}>
              
              {/* Title Column */}
              <Col md="3">
                <h3 style={{marginBottom: "0px"}}>{category}</h3>
                <p>(Familiarity)</p>
              </Col>

              {/* Element Columns */}
              {techStack[category].map((tech, idx) => (
                <Col 
                  key={idx} 
                  className="d-flex flex-column align-items-center">
                  <Row>
                    <Image  
                      style={{ 
                        backgroundColor: "#fff", 
                        borderRadius: "50%", 
                        padding: "15px",           
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 
                        marginBottom: "5px",
                        width: "90px",  
                        height: "90px", 
                        objectFit: "cover" 
                      }} 
                      className="shadow" 
                      src={tech.image} 
                      alt={tech.name} 
                    />
                  </Row>
                  
                  <Row>
                    <p style={{ marginBottom: "0px" }}>{tech.name}</p>
                  </Row>
                </Col>
              ))}
            </Row>
          ))}
        </Col>
      </div>
    </>
  );
};

export default TechStackSection;
