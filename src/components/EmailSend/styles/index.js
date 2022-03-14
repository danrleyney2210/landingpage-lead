import styled from "styled-components"



export const Container = styled.div`

max-width: 880px;
min-height: 295px;
border: 1px solid var(--line);
margin: 0 auto;
background-color: #191919;
padding: 70px 60px;
color: white;
border-radius: 20px;


h2{
  font-size: 23px;
  font-weight: 500;
  text-align: center;



  @media (max-width: 770px){
    margin-bottom: 10px;
  }
}


.wrap-input{
  display: grid;
  grid-template-columns: 8fr 4fr;



  @media (max-width: 770px){
    display: flex;
    flex-direction: column;
  }

  input{
    border-radius: 7px;
    height: 60px;
    margin: 20px 5px;
    padding: 8px 16px 8px 30px;
    outline: none;
    font-size: 17px;
    color: white;
    border: none;


    @media (max-width: 770px){
      margin: 5px;
    }
  }

  input[type="button"]{
    background: linear-gradient(-90deg, rgb(3, 181, 183) 0%, rgb(66, 123, 192) 100%);
    border: none;
    font-weight: 500;
    text-transform: uppercase;
  }
}



`;