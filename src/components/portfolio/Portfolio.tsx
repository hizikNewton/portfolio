import React from "react";
import { Card } from "react-bootstrap";
import { SectionTitle, ContainerComp } from "../shared";
import * as S from "./styles";

interface Props {}

const PortfolioElement = () => {
  return (
    <>
      {[...Array(4)].map((i) => (
        <S.PortfolioItem className="col-lg-4 col-md-6">
          <Card border="danger">
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>Danger Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </S.PortfolioItem>
      ))}
    </>
  );
};

export const Portfolio = (props: Props) => {
  return (
    <ContainerComp>
      <S.PortfolioSection>
        <div className="container">
          <SectionTitle>
            <h2>Portfolio</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </SectionTitle>

          <div className="row portfolio-container">
            <PortfolioElement />
          </div>
        </div>
      </S.PortfolioSection>
    </ContainerComp>
  );
};
