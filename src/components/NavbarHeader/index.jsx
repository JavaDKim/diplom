import { useContext } from "react";
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas, Row } from 'react-bootstrap';
import AppCtx from "../../context"
import "./navbar.css"
import { useNavigate } from "react-router-dom";
// икноки из библиотеки mui //
import PostAddIcon from '@mui/icons-material/PostAdd';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import GroupIcon from '@mui/icons-material/Group';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


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
						<Navbar.Brand><Nav.Link className="link_header" href="/" title="на главную">	<img width={200} src={require('../../assets/images/logo.png')} />	</Nav.Link></Navbar.Brand>
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
										<Nav.Link className="link_header" title="авторизация" onClick={e => { e.preventDefault(); navigate("/auth") }}>	<span>Вход</span></Nav.Link>
									</Nav>}
								{userId && <>
									<Nav className="justify-content-end flex-grow-1 pe-3">
										<Nav.Link className="link_header" title="добавить пост" onClick={e => { e.preventDefault(); navigate("/post/add") }}>	<PostAddIcon style={{ color: "Grey" }} /> Добавить</Nav.Link>
										<Nav.Link className="link_header" title="посты пользователей" onClick={e => { e.preventDefault(); navigate("/posts") }}>	<DynamicFeedIcon style={{ color: "Grey" }} /> Посты</Nav.Link>
										{/* <Nav.Link className="link_header" href="/" title="пользователи">	<GroupIcon style={{ color: "Grey" }} /> Блогеры</Nav.Link> */}
										<Nav.Link className="link_header" title="избранное" onClick={e => { e.preventDefault(); navigate("/post/edit") }}>	<FavoriteIcon style={{ color: "Grey" }} /> Избранное</Nav.Link>

										<NavDropdown
											title={<span><GroupIcon style={{ color: "Grey" }} /> Профиль</span>}
											id={`offcanvasNavbarDropdown-expand-${expand}`}
										>
											<NavDropdown.Item className="link_header" title="настройки" onClick={e => { e.preventDefault(); navigate("/setting") }}>
												<ManageAccountsIcon style={{ color: "Grey" }} /> Настройки
											</NavDropdown.Item>
											<NavDropdown.Divider />

											<NavDropdown.Item className="link_header" title="мой профиль" onClick={e => { e.preventDefault(); navigate(`/profile/${userId}`) }}>
												<ManageAccountsIcon style={{ color: "Grey" }} /> Обо мне </NavDropdown.Item>
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
												}}><ExitToAppIcon style={{ color: "Grey" }} /> Выход</Button>
											</NavDropdown.Item>
										</NavDropdown>
									</Nav>
									<Form size="sm" className="pt-1">
										<Form.Control
											size="sm"
											type="search"
											placeholder="поиск"
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