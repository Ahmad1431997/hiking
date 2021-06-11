import styled from "styled-components"
import {NavLink , Link} from "react-router-dom"

export const HomeImg=styled.div`
text-align:center;
p{
font-family: Georgia, 'Times New Roman', Times, serif;
font-size:15pt;
}

`;
export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const NavHome = styled(Link)`
padding:20px;
&.active{
    background-color:red;
}
`;