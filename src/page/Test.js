import React from 'react';
import {Container, Row} from "react-bootstrap";
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useApi } from '../hooks/useApi';

const Test = () => {
  useDocumentTitle("Test");
  
  const apiUrl = process.env.REACT_APP_WEBSERVER_API_ROOT;
  const { data: apiData, loading, error } = useApi(apiUrl ? `${apiUrl}/songs` : null);
  const songs = apiData?.song_records || [];


    return (
        <Container>
        <Row>
            <p>Hi</p>
            
        </Row>
      </Container>
    )
}

export default Test