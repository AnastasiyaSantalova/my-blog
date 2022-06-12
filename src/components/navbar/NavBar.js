import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="/">Nastya's Talks</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/articles">Articles</Nav.Link>
						<Nav.Link href="/about">About Me</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	)
}

export default NavBar;