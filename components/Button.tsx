import styled from "styled-components";

const Button = styled.button<{ outline?: boolean }>`
  border: 0px;
  background: ${p => (p.outline ? "transparent" : p.theme.primary)};
  border-radius: 31px;
  padding: 9px 35px;
  border: ${p => (p.outline ? `2px solid ${p.theme.primary}` : "0px")};
  color: ${p => (p.outline ? p.theme.primary : "#FFF")};
  margin: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: ${p => p.theme.fnt14};
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${p => p.theme.secondry};
    border: ${p => (p.outline ? `2px solid ${p.theme.secondry}` : "0px")};
    color: #fff;
  }
`;

export default Button;
