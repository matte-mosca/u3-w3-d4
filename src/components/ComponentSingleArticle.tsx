import { Col, Card, Button } from "react-bootstrap";
import IArticle from "../Interfaces/Article";
import { useNavigate } from "react-router-dom";

interface articleProps {
  articleData: IArticle;
}

const ComponentSingleArticle = ({ articleData }: articleProps) => {
  const navigate = useNavigate();

  return (
    <Col xs={12} md={6} lg={4}>
      <Card>
        <Card.Img variant="top" src={articleData.image_url} />

        <Card.Body>
          <Card.Title>{articleData.title}</Card.Title>
          <Button
            variant="primary"
            onClick={() => {
              navigate("/detail");
            }}
          >
            More infos
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default ComponentSingleArticle;
