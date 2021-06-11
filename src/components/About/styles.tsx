import styled from "styled-components";

export const AboutSection = styled.section`
  .content {
    margin: 50px;
  }

  .content h3 {
    font-weight: 500;
    font-size: 34px;
    color: #2c4964;
  }

  .content p {
    margin-bottom: 0;
  }
`;
export const ImageContainer = styled.div`
  img {
    position: relative;
    max-height: 215px;
    max-width: 250px;
    border-radius: 50%;
    box-shadow: 10px 20px 10px 0 #ccc;

    @media (max-width: 991px) {
      text-align: center;
      max-width: 80%;
    }
    @media (max-width: 600px) {
      min-height: 107px !important;
      min-width: 125px !important;
    }
  }
`;

export const AboutContent = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const AboutTextBox = styled.div`
  .box {
    background-image: linear-gradient(purple, purple),
      linear-gradient(purple, purple), linear-gradient(purple, purple),
      linear-gradient(purple, purple);
    background-repeat: no-repeat;
    background-size: 4px 50%, 10% 4px, 4px 50%, 10% 4px,
      calc(100% - 8px) calc(100% - 8px);
    background-position: left bottom, left bottom, right top, right top, 4px 4px;
    padding: 15px;
  }
`;
