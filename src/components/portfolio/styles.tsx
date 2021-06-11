import styled from "styled-components";

export const PortfolioSection = styled.section`

`

export const PortfolioItem  = styled.div`
    margin-bottom: 30px;
    .portfolio-wrap {
    transition: 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }
  .portfolio-wrap::before {
    display:flex;
    content: "";
    background: rgba(44, 73, 100, 0.6);
    position: absolute;
    left: 30px;
    right: 30px;
    top: 30px;
    bottom: 30px;
    transition: all ease-in-out 0.3s;
    z-index: 2;
    opacity: 0;
  }
  `
  
export const PortfolioInfo = styled.div` 
    opacity: 0;
    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 3;
    transition: all ease-in-out 0.3s;
h4 {
    font-size: 20px;
    color: #fff;
    font-weight: 600;
  }
  p {
    color: #ffffff;
    font-size: 14px;
    text-transform: uppercase;
  }
`
export const PortfolioLinks = styled.div`
opacity: 0;
    left: 0;
    right: 0;
    bottom: 10%;
    text-align: center;
    z-index: 3;
    position: absolute;
    transition: all ease-in-out 0.3s;
a {
    color: #fff;
    margin: 0 2px;
    font-size: 28px;
    display: inline-block;
    transition: 0.3s;
  }
  a:hover {
    color: #e684ae;
  }
  .portfolio-wrap:hover::before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
  }
  
`/* 

.skills .progress {
  height: 50px;
  display: block;
  background: none;
}

.skills .progress .skill {
  padding: 10px 0;
  margin: 0 0 6px 0;
  text-transform: uppercase;
  display: block;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  color: #2c4964;
}

.skills .progress .skill .val {
  float: right;
  font-style: normal;
}

.skills .progress-bar-wrap {
  background: #fbeaf1;
}

.skills .progress-bar {
  width: 1px;
  height: 10px;
  transition: .9s;
  background-color: #dd5a92;
} */