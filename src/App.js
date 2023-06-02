import './App.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import ControlledCarousel from './components/Carousel';
import NavbarMenu from './components/NavbarHeader';
import NavbarFilter from './components/NavbarFilter';
import PostPopular from './components/PostPopular';
import PostNew from './components/PostNew';


function App() {

	return (

	<Container>
		<Row className='header'><NavbarMenu/><ControlledCarousel/></Row>
		<Row><NavbarFilter/></Row>
		<Row>
			<Form className='d-flex justify-content-center'>
					<h3 className='mt-5'>Популярное</h3>
			</Form>
			<Row className='justify-content-beetwen m-0 p-0 mt-5'>
					<Col className='justify-content-center'> <PostPopular img={"popular1.png"}/> </Col>
					<Col className='justify-content-center'><PostPopular img={"popular2.png"}/></Col>
			</Row>
		</Row>
		<Form className='d-flex justify-content-center'>
					<h3 className='mt-5'>Новые публикации</h3>
			</Form>
		<Row className='justify-content-beetwen m-0 p-0 mt-5'>
		  <Col className='justify-content-center'><PostNew img={"post1.png"}/> </Col>
			<Col className='justify-content-center'><PostNew img={"post2.png"}/></Col>
			<Col className='justify-content-center'><PostNew img={"post3.png"}/></Col>
		</Row>
		<Row className='justify-content-beetwen m-0 p-0 mt-3'>
		  <Col className='justify-content-center'><PostNew img={"post4.png"}/> </Col>
			<Col className='justify-content-center'><PostNew img={"post5.png"}/></Col>
			<Col className='justify-content-center'><PostNew img={"post6.png"}/></Col>
		</Row>

		<Row>Футер</Row>
	</Container>
  );
}

export default App;
