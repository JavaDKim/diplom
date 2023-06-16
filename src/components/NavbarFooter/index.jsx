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
	const exit = (e) => {
		e.preventDefault()
		setUser("")
		setUserId("")
		setToken("")
		localStorage.removeItem("travelPostsAll");
		localStorage.removeItem("travelBlogUser");
		localStorage.removeItem("travelBlogToken");
		localStorage.removeItem("travelBlogId");
		localStorage.removeItem("travelBlogUserInfo");
		navigate("/")
	}

	const postsFavor = (e) => {
		e.preventDefault()
		navigate("/favorites")
	}



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


						</Nav>

					</>}
				</Offcanvas.Body>
			</Navbar.Offcanvas>
		</Container >
				</Navbar >
			))
}
		</Row >
	);
}

export default NavbarMenu;