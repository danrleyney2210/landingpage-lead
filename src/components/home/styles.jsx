import styled from 'styled-components'
// import Bg from '../../assets/bg.png'



export const Container = styled.div`
max-width: 1098px;
margin: 0 auto;
`;

export const Wrapper = styled.div`
background-image: linear-gradient(45deg, #12121200 77%, #009EC8 130%);
width: 100%;
height: 100vh;
background-color: #121212;

opacity: 1;

.content {
  max-width: 1098px;
  margin: 0 auto;
  padding-top: 50px;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.5em;
  
  color: #fff;
  
  > div {
    max-width: 650px;
    
    h3 {
      font-size: 26px;
      margin: 40px 0 0 0;
      font-weight: 500;
      line-height: 1.5em;
      
      strong {
        font-weight: 700;
      }
    }
    
    .date {
      display: flex;
      align-items: center;
      margin-top: 1rem;
      margin-bottom: 2rem;
      
      svg {
        height: 20px;
        width: 20px;
      }
      
      svg path {
        fill: #009EC8 ;
      }
      
      p {
        margin-left: 1rem;
        font-family: "Poppins", Sans-serif;
        font-size: 18px;
        font-weight: 500;
      }
    }
    
    .form {
      display: flex;
      flex-direction: column;
      input {
        max-width: 450px;
        color: rgb(255, 255, 255);
        border: 1px solid #3E3E3E;
        border-radius: 7px;
        font-weight: 500;
        font-family: Poppins;
        height: 60px;
        padding-left: 40px;
        width: 450px;
        margin-bottom: 10px;
        position: relative;
        font-size: 17px;
        background: rgba(70,70,70, 0.3);
        outline: none;
      }
    }
  }
}
`