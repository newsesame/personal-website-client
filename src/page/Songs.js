import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';


import {Col, Container, Row, Image } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Education from '../components/layout/Education';
import selfie from '../image/selfie.jpg';
import cuhkicon from '../image/cuhkicon.png';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Bootstrap JS (如果需要使用 Bootstrap 的 JavaScript 組件)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// import Education from '../page/Education';
const Root = () => {


    const [songs, setSongs] = useState([]);
    const apiUrl = process.env.REACT_APP_WEBSERVER_API_ROOT;
    console.log(apiUrl);
    useEffect(() => {
      const fetchSongs = async () => {
        try {
            // const apiUrl = process.env.REACT_APP_WEBSERVER_API_ROOT;
            const response = await axios.get(apiUrl+ "/songs");
            setSongs(response?.data?.song_records);
        } catch (error) {
          console.error('Error fetching songs:', error);
        }
      };
  
      fetchSongs();
    }, []);

    console.log(songs);

    return (
        <>
            <div className='Container-h'>
                <h2>My Play List</h2>
                <p className="no-margin">All song information is captured by the Python + Selenium web scraper script and stored in my MongoDB.</p>
                <hr></hr>
    
                {songs.map((group, index) => {
                    
                    const shouldRenderYear = index === 0 || group.year !== songs[index - 1].year;

                    // Every Year
                    return (
                        <div key={index}>
                            
                            {shouldRenderYear && <h2>{group.year}</h2>}
                            <div
                                style={{
                                    // backgroundColor: "#DCDCDC",
                                    // borderColor: "#343a40",
                                    // color: "#343a40",
                                    padding: "0 px",
                                    width:"360px"}}>

<button
    type="button"
    data-bs-toggle="collapse"
    data-bs-target={`#collapse-${index}`}
    aria-expanded="true"
    aria-controls={`#collapse-${index}`}
    style={{
    
    backgroundColor: "hsl(208, 54%, 73%)", 
    color: "white",

    margin: "10px 0px",
    display: "inline-block",
    border: "none",
    padding: "2px 10px",
    borderRadius: "8px",
    outline: "none",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",           // 鼠標懸停時變為指針
  }}
  onMouseEnter={(e) => {
    const p = e.target.querySelector('p');
    if (p) {
      e.target.style.backgroundColor = "hsl(208, 54%, 92%)"; // 鼠標懸停時變色
      p.style.backgroundColor = "hsl(208, 54%, 92%)"; // 同步 p 背景顏色
    }
  }}
  onMouseLeave={(e) => {
    const p = e.target.querySelector('p');
    if (p) {
      e.target.style.backgroundColor = "hsl(208, 54%, 73%)"; // 鼠標移開時恢復
      p.style.backgroundColor = "transparent"; // 恢復 p 背景顏色
    }
  }}
>
  <p style={{ fontSize: "20px", outline: "none" , transition: "background-color 0.3s ease, box-shadow 0.3s ease",}}  className="no-margin no-padding">
    {group.month}
  </p>
</button>
                            </div>
                            <div
                                id={`collapse-${index}`}
                                className="accordion-collapse collapse show"
                                data-bs-parent="#accordionExample">
                                <p>** ⬆️⬆️ Click the month number above to expand/collapse the playlist!</p>
                                <div style={{ border: '1px solid black', padding: "20px" }}>
                                <p>List: </p>

                                <ul className='p-0'>
                                {group.songs.map((song) => (
                                    <li key={song.song_id}>
                                            
                                            <Row>
                                                <Col md={3}>
                                                    <div className='cover'>
                                                        <img src={apiUrl+"/cover/" + song.cover_image} alt="song cover" />
                                                    </div>
                                                </Col>

                                                <Col md={4} className="d-flex flex-column justify-content-center">
                                                    <div style={{paddingLeft:"30px"}}>
                                                    <Row><h4 className='p-0'>{song.title}</h4></Row>
                                                    <Row>{song.artist}</Row>
                                                    <Row>{song.album}</Row>
                                                    </div>
                                                </Col>
                                                <Col md={3} className="d-flex flex-column justify-content-center">
                                                <Row dangerouslySetInnerHTML={{ __html: song.lyricst ? song.lyricst.replace(/\n/g, '<br>') : "Unknown" }} />
                                                    <Row>{song.composer}</Row>
                                                </Col>
                                                <Col md={2} className="d-flex flex-column justify-content-center">
                                                <a href={song.song_url} target="_blank" rel="noopener noreferrer">
                                                    <button
                                                        style={{
                                                        backgroundColor: "hsl(208,54%, 73%)",  // 綠色背景
                                                        color: "white",              // 白色字體
                                                        padding: "10px 20px",        // 增加內邊距
                                                        border: "none",              // 移除邊框
                                                        borderRadius: "8px",         // 圓角
                                                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // 添加陰影
                                                        cursor: "pointer",           // 鼠標懸停時變為指針
                                                        transition: "background-color 1.0s ease", // 過渡效果
                                                        }}
                                                        onMouseEnter={(e) => {
                                                        e.target.style.backgroundColor = "hsl(208,54%, 92%)"; // 鼠標懸停時變色
                                                        }}
                                                        onMouseLeave={(e) => {
                                                        e.target.style.backgroundColor = "hsl(208,54%, 73%)"; // 鼠標移開時恢復
                                                        }}
                                                    >
                                                        KKBOX
                                                    </button>
                                                    </a>
                                                </Col>
                                            </Row>
                                        {/* </div> */}
                                    </li>
                                ))}                                    

                                </ul>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
    




    // // Extract the params in the url
    // const groupedSongs = {
    //     "2024": {
    //       "01": [
    //         { song_id: "1", title: "Song A", artist: "Artist A", added_date: "2024-01" },
    //         { song_id: "2", title: "Song B", artist: "Artist B", added_date: "2024-01" }
    //       ],
    //       "02": [
    //         { song_id: "3", title: "Song C", artist: "Artist C", added_date: "2024-02" }
    //       ]
    //     },
    //     "2023": {
    //         "12": [
    //         { song_id: "4", title: "Song D", artist: "Artist D", added_date: "2023-12" }
    //         ]
    //     }
    // };


    // // console.log(apiData);


    // return (
    //     Object.keys(groupedSongs).map(year => (
    //         <div key={year} className='Container-h'>
                
    //         <h2>{year}</h2>
    //         {Object.keys(groupedSongs[year]).map(month => (
    //             <div key={month}>
    //             <h3>{month}</h3>
    //             <ul className='d-flex flex-column'>
    //                 {groupedSongs[year][month].map(song => (
    //                 <li key={song.song_id}>{song.title} by {song.artist}</li>
    //                 ))}
    //             </ul>
    //             </div>
    //         ))}
    //         </div>
    //     ))
        
    // );
}

export default Root