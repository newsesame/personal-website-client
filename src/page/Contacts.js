import axios from 'axios';
import React from 'react';


import {Col, Container, Row, } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Contacts= () => {
    const [apiData, setApiData] = useState(false);
    useEffect(()=> {
        const fetchData = async() => {

            try{
                const apiUrl = process.env.REACT_APP_WEBSERVER_API_ROOT;
                const response = await axios.get(apiUrl);

                if (response.status === 200){
                setApiData(response?.data?.blog_records);
                
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
        <Container>
        <Row>
            <p>Hi</p>
            
        </Row>
      </Container>
    )
}

export default Contacts