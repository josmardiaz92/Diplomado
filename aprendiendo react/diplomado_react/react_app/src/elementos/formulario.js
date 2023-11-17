import styled, {css} from "styled-components";

const Input=styled.input`
    background: rgb(243, 234, 234);
    border-radius: 3px;
    border-bottom: 10%;
    border-top: none;
    border-left: none;
    border-right: none;
    width: 100%;
    height: 25px;
    margin: 10px 0;
`

const Label=styled.label`
    font-weight: bold;
`

export {Input, Label};