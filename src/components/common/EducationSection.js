import React from 'react';
import { Image } from "react-bootstrap";
import cuhkicon from '../../image/cuhkicon.png';

const EducationSection = () => {
  return (
    <>
      <div style={{marginBottom: "0px"}} className='Container space'>
        <h2>Education</h2>
      </div>

      <div className='Container space'>
        <div style={{ flex: '1 1' }}>
          <Image height="" src={cuhkicon} rounded className='shadow cuhkicon'/>
        </div>

        <div style={{ flex: '5 1', paddingLeft: "40px" }}>
          <h3>B.Sc. in Computer Science, <br></br>Minor in Statistics</h3>
          <p>The Chinese University of Hong Kong<br></br>Sept 2022 to Present</p>
        </div>
      </div>
    </>
  );
};

export default EducationSection;
