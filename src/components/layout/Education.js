// src/App.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaSchool } from 'react-icons/fa'; // 使用 react-icons 庫來添加圖標

function Education() {
    const educationList = [
        { icon: <FaSchool />, description: "Bachelor of Science in Computer Science" },
        { icon: <FaSchool />, description: "Master of Science in Software Engineering" }
    ];

    return (
        <div>
            <h2 className="my-4">Education</h2>
            {educationList.map((education, index) => (
                <Row key={index} className="align-items-center mb-3">
                    <Col xs={2} className="d-flex justify-content-center">
                        {education.icon}
                    </Col>
                    <Col xs={10}>
                        {education.description}
                    </Col>
                </Row>
            ))}
        </div>
    );
}

// function App() {
//     return (
//         <Container>
//             <h1 className="text-center my-5">My Blog</h1>
//             <Education />
//         </Container>
//     );
// }

export default Education