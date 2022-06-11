import { css } from "styled-components";
export function breakOne(props) {
  return css`
    @media only screen and (max-width: 800px) {
      ${props}
    }
  `;
}
export function breakTwo(props) {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
}
