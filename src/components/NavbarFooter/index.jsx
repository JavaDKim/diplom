import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./style.css"
function NavbarFooter() {
	return (
		<>
			<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
				<Container className='footer'>
					<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
						</Nav>
						<Nav>
							<Nav.Link eventKey={2} href="#memes">
								ГЛАВНАЯ
							</Nav.Link>
							<Nav.Link eventKey={3} href="#memes">
								КАТЕГОРИИ
							</Nav.Link>
							<Nav.Link eventKey={4} href="#memes">
								ПОСТЫ
							</Nav.Link>
							<Nav.Link eventKey={5} href="#assa">
								КОНТАКТЫ
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default NavbarFooter;