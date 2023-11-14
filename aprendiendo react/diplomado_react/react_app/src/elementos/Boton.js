import styled, {css} from "styled-components";

const Boton=styled.button`
    color: white;
    background: #ff6d00;
    display: inline-block;
    margin-top: 10px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    font-family: verdana, Arial, Helvetica, sans-serif;
    cursor: pointer;
    width: ${props=>props.anchocompleto ? '100%' : 'auto'};

    &:hover{
        color: white;
        background: #00b0f0;    
    }

    ${props=>props.rojo && css`
        color: white;
        background: red;
    `}
    ${props=>props.verde && css`
        color: white;
        background: green;
    `}
`;

export default Boton;