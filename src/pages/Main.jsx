import { Row, Col, Form } from 'react-bootstrap';
import { useContext, useEffect } from "react";
import AppCtx from "../context";

import PostPopular from '../components/PostPopular';
import PostNew from '../components/PostNew';
import NavbarFilter from '../components/NavbarFilter';
import Footer from '../components/Footer';
import Header from '../components/Header';


function Main() {

	
		useEffect(() => {
		  document.title = 'Главная страница';
		}, []);
	 
	return <>
		<Row>
			<Row className='d-flex justify-content-center m-0 p-0' ><Header /></Row>
			<Row className='d-flex justify-content-center m-0 p-0 mt-2'><NavbarFilter /></Row>
			<Form className='d-flex justify-content-center'>
				<h3 className='mt-5'>Популярное</h3>
			</Form>
			<Row className='justify-content-beetwen m-0 p-0 mt-3'>
				<Col xs={12} md={6} className='justify-content-center mt-2'> <PostPopular img={"popular1.png"} /> </Col>
				<Col xs={12} md={6} className='justify-content-center mt-2'><PostPopular img={"popular2.png"} /></Col>
			</Row>
		</Row>
		<Form className='d-flex justify-content-center'>
			<h3 className='mt-5'>Новые публикации</h3>
		</Form>
		<Row className='justify-content-beetwen m-0 p-0'>
			<Col xs={12} md={4} className='justify-content-center mt-3'><PostNew img={"post1.png"} /> </Col>
			<Col xs={12} md={4} className='justify-content-center mt-3'><PostNew img={"post2.png"} /></Col>
			<Col xs={12} md={4} className='justify-content-center mt-3'><PostNew img={"post3.png"} /></Col>
		</Row>
		<Row className='justify-content-beetwen m-0 p-0'>
			<Col xs={12} md={4} className='justify-content-center mt-3'><PostNew img={"post4.png"} /> </Col>
			<Col xs={12} md={4} className='justify-content-center mt-3'><PostNew img={"post5.png"} /></Col>
			<Col xs={12} md={4} className='justify-content-center mt-3'><PostNew img={"post6.png"} /></Col>
		</Row>
		<Row className='justify-content-center m-0 p-0 mt-3'>
			<Footer />
		</Row>


	</>
}

export default Main;