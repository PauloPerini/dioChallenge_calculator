import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #0b002c;

    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const Content = styled.div`
background-color: #000000;
width: 80%;
min-height: 350px;
border-radius:20px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    gap: 5px;
    

`

export const Column = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const BtnSquare = styled.button`
padding: 20px;
border: 1px solid #000000;
background-color: #00AAF0;
color: #cdcdcd;
font-size: 24px;
font-weight: 700;
flex: 1;
border-radius: 50%;
&:hover{
opacity:0.6;
}
`