import React from "react";
import * as S from "./styles";
import MeBrand from "../../assets/img/me.jpg";
import { ContainerComp } from "../shared";
interface Props {}

export const About = (props: Props) => {
  return (
    <S.AboutSection id="about" className="about">
      <ContainerComp>
        <S.AboutContent>
          <S.ImageContainer>
            <img className="" src={MeBrand} />
          </S.ImageContainer>
          <S.AboutTextBox>
            <div className="box">
              <h3>About Me</h3>
              <p>
                I am Innovative,Creative,and Results-oriented frontend developer
                with a goal to create interactive software and web application
                with the user in mind, I create applications with a usable and
                intuitive user interface.
              </p>
            </div>
          </S.AboutTextBox>
        </S.AboutContent>
      </ContainerComp>
    </S.AboutSection>
  );
};
