import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarFilter() {
	return (
		<Navbar bg="light" variant="light">
			<Container>
				<Nav className="justify-content-between flex-grow-1 pe-3">
					<Nav.Link href="#home">Европа</Nav.Link>
					<Nav.Link href="#features">Азия</Nav.Link>
					<Nav.Link href="#pricing">Америка</Nav.Link>
					<Nav.Link href="#pricing">Африка</Nav.Link>
					<Nav.Link href="#pricing">Море</Nav.Link>
					<Nav.Link href="#pricing">Горы</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	)
}
export default NavbarFilter