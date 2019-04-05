import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  transform: ${ props => props.isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 350ms ease-in-out;
  width: 240px;
  border-right: 2px solid ${props => props.theme.primary};
  background-color: white;
  z-index: 2;
  display: flex;
  flex: 1;
  box-shadow: 0px 8px 10px -5px rgba(0,0,0,0.2), 0px 16px 24px 2px rgba(0,0,0,0.14), 0px 6px 30px 5px rgba(0,0,0,0.12);
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  align-items: center;
  flex: 1;
`;

const StyledHeader = styled.h1`
  font-weight: 300;
  text-transform: uppercase;
`;

const StyledLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 300;
  padding: 12px 0;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  &:hover {
    background-color: #e9e9e9;
  }
`;

export const Sidebar = ({ isOpen }) => (
  <StyledSidebar isOpen={isOpen}>
    <StyledWrapper>
      <StyledHeader>Content</StyledHeader>
      <StyledLink href="/home">Hjem</StyledLink>
      <StyledLink href="/about">Om oss</StyledLink>
    </StyledWrapper>
  </StyledSidebar>
)

Sidebar.propTypes = {
  isOpen: PropTypes.bool
}

Sidebar.defaultProps = {
  isOpen: false
}