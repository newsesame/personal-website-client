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
                    // 渲染年份时检查是否与前一个年份相同
                    const shouldRenderYear = index === 0 || group.year !== songs[index - 1].year;
    
                    return (
                        <div key={index}>
                            {/* 仅在条件满足时渲染年份 */}
                            {shouldRenderYear && <h2>{group.year}</h2>}
                            <div
                                style={{
                                    // backgroundColor: "#DCDCDC",
                                    // borderColor: "#343a40",
                                    // color: "#343a40",
                                    padding: "0 px",
                                    width:"35px"}}>
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse-${index}`}
                                aria-expanded="true"
                                aria-controls={`#collapse-${index}`}
                                style={{backgroundColor: "#DCDCDC", marginBottom: "5px",  display: "inline-block"}}>
                                
                                <h3 style={{ margin: "0px",  display: "inline-block" }}>
                                    {group.month}
                                </h3>
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
                                                    <a href={song.song_url} target="_blank" rel="noopener noreferrer"><button>kkbox</button></a>
                                                </Col>
                                            </Row>
                                        {/* </div> */}
                                    </li>
                                ))}                                    
                                    {/* {group.songs.map((song) => (
                                        <li key={song.song_id}>
                                            <div className='Container d no-margin'>
                                                
                                                
                                                <Row>
                                                    <Col md={3} className='cover p-0'>
                                                        <div className='cover'>
                                                            <img src={"http://localhost:8080/cover/" + song.cover_image} alt="song cover"/>
                                                        </div>
                                                    </Col>
                                                    <Col md={4} className="d-flex flex-column justify-content-center p-0">
                                                        
                                                        <Row><h4 className="p-0">{song.title}</h4></Row>
                                                        <Row>{song.artist}</Row>
                                                        <Row>{song.album}</Row>
                                                    </Col>
                                                    <Col md={3} className="d-flex flex-column justify-content-center p-0">
                                                        <Row>{song.lyricst ? song.lyricst : "Unknown"}</Row>
                                                        <Row>{song.composer ? song.composer : "Unknown"}</Row>
                                                    </Col>
                                                    <Col md={2} className="d-flex flex-column justify-content-center p-0">
                                                        <a href={song.song_url} target="_blank" rel="noopener noreferrer"><button>kkbox</button></a>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </li>
                                    ))} */}
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