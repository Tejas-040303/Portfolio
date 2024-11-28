import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, status }) => {
  return (
    <Col md={4} sm={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br/>
          Status:- <span >{status}</span>
        </div>
      </div>
    </Col>
  );
};
