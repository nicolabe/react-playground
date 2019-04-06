import React from "react"
import styled from "styled-components"
import { ImageGrid } from "./ImageGrid"

const StyledMain = styled.main`
  padding: 32px 32px 0 44px;
  margin: 0;
  min-height: 100vh;
`;

const StyledHeader = styled.h1`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 28px;
`;

export const MainContent = () => (
  <StyledMain>
    <StyledHeader>Info</StyledHeader>
    <ImageGrid />
  </StyledMain>
)