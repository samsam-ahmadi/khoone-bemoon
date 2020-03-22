import styled from "styled-components";
import Box from "./Box";

const Container = styled(Box)`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: ${p => p.theme.mobile}) {
    width: 100%;
  }
  @media (min-width: ${p => p.theme.tablet}) {
    width: 929px;
  }
  @media (min-width: ${p => p.theme.laptop}) {
    width: 1249px;
  }
  @media (min-width: ${p => p.theme.desktop}) {
    width: 1889px;
  }
`;
export default Container;
