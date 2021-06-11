import styled from "styled-components";

export const ResumeSection = styled.section`

`
export const ResumeTitle = styled.h3`

font-size: 26px;
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #4b7dab;
    font-family: "Poppins", sans-serif;
`
export const ResumeItem = styled.div`
    padding: 0 0 20px 20px;
    margin-top: -2px;
    border-left: 2px solid #d43076;
    position: relative;
    
    h4 {
    line-height: 18px;
    font-size: 18px;
    font-weight: 600;
    color: #2c4964;
    margin-bottom: 10px;
    
    h5 {
    font-size: 16px;
    background: #e4ebf3;
    padding: 5px 15px;
    display: inline-block;
    font-weight: 400;
    margin-bottom: 10px;
    font-family: "Poppins", sans-serif;
    }

ul li {
    padding-bottom: 10px;
    &:last-child {
    padding-bottom: 0;
    }
    }
}
.resume-item::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50px;
    left: -9px;
    top: 0;
    background: #fff;
    border: 2px solid #d43076;
}

` 
