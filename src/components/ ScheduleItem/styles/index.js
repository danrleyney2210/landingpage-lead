import styled from "styled-components"



export const Container = styled.div`
width: 100%;
color: white;
display: grid;
grid-template-columns: 4fr 8fr;
/* grid-template-rows: 300px; */
padding: 70px 0;

.date-content{
  h2{
    font-size: 80px;
    font-weight: 600;
  }
  
  p{
    margin-top: -60px;
    
    
    .point{
      font-size: 60px;
      margin: 0 5px;
      color: var(--green);
      font-weight: 500;
    }
  }
}


.description-content{

  span{
    font-size: 16px;
    font-weight: 400;
    background: linear-gradient(90deg, #427BC0 0%, #03B5B7 100%);
    padding: 14px 25px;
    border-radius: 7px;
    line-height: 20px;
    display: block;
    width: 110px;
    height: 44px;
    text-align: center;
  }

  h2{
    font-size: 35px;
    font-weight: 500;
    margin: 20px 0;
  }

  p{
    font-size: 17px;
    font-weight: 500;
  }
  
}




`;