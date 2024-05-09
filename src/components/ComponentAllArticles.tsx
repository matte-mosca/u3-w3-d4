import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import ComponentSingleArticle from "./ComponentSingleArticle";
import IArticle from "../Interfaces/Article";

const ComponentAllArticles = () => {
  const [article, setArticle] = useState<IArticle[]>([]);

  const fetchArticle = async () => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles"
      );
      if (response.ok) {
        const allArticles = await response.json();
        const arrayOfArticles = allArticles.results;
        setArticle(arrayOfArticles);
        console.log(arrayOfArticles);
      } else {
        throw new Error("Errore nella chiamata");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <Container>
      <Row className="mt-5">
        {article.map((singleArticle) => {
          return (
            <ComponentSingleArticle
              key={singleArticle.id}
              articleData={singleArticle}
            />
          );
        })}
      </Row>
    </Container>
  );
};
export default ComponentAllArticles;
