import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo-100.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
                <a href="https://www.linkedin.com/in/tejas-pawar-b63054253/"><img src={navIcon1} alt="" /></a>
                {/* github link */}
                <a href="https://github.com/Tejas-040303"><img src={navIcon2} alt="" style={{ width: "17.5px", height: "17.5px" }}/></a>
                <a href="https://www.instagram.com/tej04330/"><img src={navIcon3} alt="" /></a>
              </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
