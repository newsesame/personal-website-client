// import logo from './logo.svg';

import './App.css';
import './Large.css'
import {Routes, Route} from "react-router-dom"

import Home from "./page/Home"
import Blog from './page/Blog';
import Header from "./components/layout/Header";
import Root from './page/Root';
import Test from './page/Contacts';
// import Contacts from "./page/Contacts"
import Songs from "./page/Songs"
import Career from "./components/Career"

import { Col, Row } from 'react-bootstrap';



function App() {
  
  return (
    <>
				
		<div style={{ paddingTop: '70px' }}></div>
		<Row>
			<Col md="6"className="mx-auto" >

		
				<Header/>
			
			</Col>
		</Row>
		<Routes >
		<Route path = "/" element={<Root/>}/>
		<Route path = "/test" element={<Test/>}/>

		<Route path = "/songs" element={<Songs/>}/>
		<Route path = "/career" element={<Career/>}/>
		<Route path = "/blog" element={<Home/>}/>
		<Route path = "/blog/:id" element={<Blog/>}/>
		{/* <Route path = "/contacts" element={<Contacts/>}/> */}


		</Routes>
    </>
  );
}

export default App;
