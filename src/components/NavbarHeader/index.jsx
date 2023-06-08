import { useContext } from "react";
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas, Row } from 'react-bootstrap';
import AppCtx from "../../context"
import "./navbar.css"
import { useNavigate } from "react-router-dom";

function NavbarMenu() {
	const {
		setUser,
		userId,
		setUserId,
		setToken
	} = useContext(AppCtx);
	const navigate = useNavigate()
	return (
		<Row className='navbar'>
			{['lg'].map((expand) => (
				<Navbar key={expand} bg="opacity-100" expand={expand} className="mb-3">
					<Container fluid>
						<Navbar.Brand><Nav.Link className="link_header" href="/" title="на главную">	<span>Лого</span>	</Nav.Link></Navbar.Brand>
						<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
							placement="end"
						>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
									Меню сайта
								</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								{!userId &&
									<Nav className="justify-content-end flex-grow-1 pe-3">
										<Nav.Link className="link_header" href="/auth" title="авторизация">	<span>Вход</span></Nav.Link>
									</Nav>}
								{userId && <>
									<Nav className="justify-content-end flex-grow-1 pe-3">
										<Nav.Link className="link_header" href="/posts" title="посты пользователей">	<span>Посты</span></Nav.Link>
										<Nav.Link className="link_header" href="/" title="пользователи">	<span>Блогеры</span></Nav.Link>
										<Nav.Link className="link_header" href="/" title="избранное">	<span>Избранное</span></Nav.Link>
										<NavDropdown
											title="Профиль"
											id={`offcanvasNavbarDropdown-expand-${expand}`}
										>
											<NavDropdown.Item className="link_header" href="/profile" title="мой профиль">
												<span>Обо мне</span>
											</NavDropdown.Item>
											<NavDropdown.Divider />
											<NavDropdown.Item>
												<Button className="btn_header" title="Выход" onClick={(e) => {
													e.preventDefault()
													setUser("")
													setUserId("")
													setToken("")
													localStorage.removeItem("travelBlogUser")
													localStorage.removeItem("travelBlogToken");
													localStorage.removeItem("travelBlogId");
													navigate("/")
												}}> Выход</Button>
											</NavDropdown.Item>
										</NavDropdown>
									</Nav>
									<Form size="sm" className="pt-1">
										<Form.Control
											size="sm"
											type="search"
											placeholder="Search"
											className="me-2"
											aria-label="Search"
										/>
									</Form>
								</>}
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			))
			}
		</Row >
	);
}

export default NavbarMenu;