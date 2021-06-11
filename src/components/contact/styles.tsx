import styled from "styled-components";
export const ContactSection = styled.section`
`
export const ContactAbout = styled.div`
h3 {
    font-size: 36px;
    margin: 0 0 10px 0;
    padding: 0;
    line-height: 1;
    font-weight: 300;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #d43076;
}
p {
    font-size: 14px;
    line-height: 24px;
    font-family: "Playfair Display", serif;
    color: #3c6387;


}
`

export const Row = styled.div`
display:flex;
justify-content:space-evenly;
`
export const SocialLinks = styled.div`
    padding-bottom: 20px;
a {
    font-size: 18px;
    display: inline-block;
    background: #fff;
    color: #d43076;
    line-height: 0;
    padding: 8px 0;
    margin-right: 4px;
    border-radius: 50%;
    text-align: center;
    width: 36px;
    height: 36px;
    transition: 0.3s;
    border: 1px solid #d43076;
}
a:hover {
    background: #d43076;
    color: #fff;
}
`
export const Info = styled.div`
    color: #5a656e;

    i{

    font-size: 32px;
    color: #d43076;
    line-height: 0;
    margin-right: 15px;
    }
    p{

    font-size: 14px;
    margin: 0;
    }

`

export const Form = styled.form`

.loading {
    display: none;
    background: #fff;
    text-align: center;
    padding: 15px;
    }
    
.loading:before {
    content: "";
    display: inline-block;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin: 0 10px -6px 0;
    border: 3px solid #18d26e;
    border-top-color: #eee;
    -webkit-animation: animate-loading 1s linear infinite;
    animation: animate-loading 1s linear infinite;
}
textarea {
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
}

input:focus,textarea:focus {
    border-color: #d43076;
}

input[type="submit"] {
    background: #d43076;
    border: 0;
    padding: 10px 24px;
    color: #fff;
    transition: 0.4s;
    border-radius: 50px;
}
button[type="submit"]:hover {
    background: #dd5a92;
}

@-webkit-keyframes animate-loading {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes animate-loading {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }


}
`
