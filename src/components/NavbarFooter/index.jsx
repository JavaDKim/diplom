import { Nav, Container, Navbar } from 'react-bootstrap';
import { useContext } from "react";
import AppCtx from "../../context"
import "./style.css"
import { Link } from 'react-router-dom';


function NavbarFooter() {
	const { userId } = useContext(AppCtx)
	return (
		<>
			{/* Ирина */}
			<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
				<Container className='footer'>
					<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
						</Nav>
						<Nav>
							{!userId && <>
								<Nav.Link>
									<Link to="/auth" title="авторизация">	<span>ВХОД</span>	</Link>
								</Nav.Link>
							</>}
							{userId && <>
								<Nav.Link eventKey={2} href="#memes">
									ГЛАВНАЯ
								</Nav.Link>
								<Nav.Link eventKey={3} href="#memes">
									КАТЕГОРИИ
								</Nav.Link>
								<Nav.Link eventKey={4} href="#memes">
									ПОСТЫ
								</Nav.Link>
							</>}

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