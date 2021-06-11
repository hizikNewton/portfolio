import styled from "styled-components";

export const SectionTitle = styled.div`
  padding-bottom: 30px;
  h2 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 15px;
    padding-bottom: 15px;
    position: relative;
    color: #345676;
  }
  h2::after {
    content: "";
    position: absolute;
    display: block;
    width: 50px;
    height: 3px;
    background: #d43076;
    bottom: 0;
    left: 0;
  }
  p {
    margin-bottom: 0;
  }
`;
export const Content = styled.div`
  background-color: #eeeded;
`;
