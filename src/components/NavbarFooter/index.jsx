import "./style.css"
import { useContext, useEffect, useState } from "react";
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas, Row } from 'react-bootstrap';
import AppCtx from "../../context"
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
		setToken,
		postsSrv,
		setPostsSrv,
		textSearch,
		setTextSearch
	} = useContext(AppCtx);
	const navigate = useNavigate()

	const postsFavor = (e) => {
		e.preventDefault()
		navigate("/favorites")
	}



	return (
		<Row className='navbar_footer'>
			{['lg'].map((expand) => (
				<Navbar key={expand} bg="opacity-100" expand={expand} className="mb-3">
					<Container fluid>
						<Navbar.Brand><Nav.Link className="link_header" href="/" title="на главную">	<img width={100} src={require('../../assets/images/logo.png')} />	</Nav.Link></Navbar.Brand>
						<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{ color: "gray" }} />
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
										<Nav.Link className="link_header" title="добавить пост" onClick={e => { e.preventDefault(); navigate("/post/add") }}>	<PostAddIcon style={{ color: "gray" }} /> Добавить</Nav.Link>
										<Nav.Link className="link_header" title="посты пользователей" onClick={e => { e.preventDefault(); navigate("/posts") }}>	<DynamicFeedIcon style={{ color: "gray" }} /> Посты</Nav.Link>
										{/* <Nav.Link className="link_header" href="/" title="пользователи">	<GroupIcon style={{ color: "Grey" }} /> Блогеры</Nav.Link> */}
										<Nav.Link className="link_header" title="избранное" onClick={postsFavor}>	<FavoriteIcon style={{ color: "gray" }} /> Избранное</Nav.Link>


									</Nav>

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