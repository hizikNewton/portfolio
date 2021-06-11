import React, { ReactElement } from "react";
import { Container } from "react-bootstrap";
import * as S from "./styles";

interface Props {
  children: ReactElement | ReactElement[];
}

export const SectionTitle = ({ children }: Props) => {
  return <S.SectionTitle>{children}</S.SectionTitle>;
};
export const ContainerComp = ({ children }: Props) => {
  return (
    <Container>
      <S.Content>{children}</S.Content>
    </Container>
  );
};
