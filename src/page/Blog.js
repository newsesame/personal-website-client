import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';


import {Col, Container, Row, } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Blog = () => {
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
        <Container>
            <Row>
                <Col xs = "12"><h1> HI</h1> </Col>
                <Col xs = "12"> <p>Contact</p></Col>
            </Row>
        </Container>
    )
}

export default Blog