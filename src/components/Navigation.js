import { Container, Nav, Navbar } from "react-bootstrap";
import {useLocation} from "react-router-dom"

const Navigation = () => {
    const location = useLocation()
    return(
        <Navbar bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="/">홈</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/insert" active={location.pathname === "/insert"}>추가</Nav.Link>
            <Nav.Link href="/" active={location.pathname === "/"}>전체보기</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}
export default Navigation;