import React from "react";
import { Hero } from "./HeroStyle";
import { Container } from "react-bootstrap";

interface Props {}

export const HeroComp = (props: Props) => {
  return (
    <Container>
      <Hero id="hero">
        <h1>Hi, I'm Isaac!</h1>
        <h2>I'm a Frontend Developer.</h2>
      </Hero>
    </Container>
  );
};
