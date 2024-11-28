import { Row, Col } from "react-bootstrap";

export const EducationCard = ({ degree, year, details }) => {
  return (
    <Row className="align-items-center mb-3">
      <Col md={2}></Col>
      <Col md={5} className="text-start">
        <h5>
          {degree} ({year})
        </h5>
      </Col>
      <Col md={4} className="text-start">
        <p>{details}</p>
      </Col>
      <Col md={2}></Col>
    </Row>
  );
};
