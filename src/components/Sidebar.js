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
  background-color: white;
  z-index: 2;
  display: flex;
  flex: 1;
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
  font-size: 28px;
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
  position: relative;

  &:hover {
    color: #333;
  }

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 10px;
    left: 0;
    background-color: #333;
    visibility: hidden;
    transform: scaleX(0);
    -webkit-transform: scaleX(0);
    -webkit-transition: transform 0.3s ease-in-out 0s;
    transition: transform 0.3s ease-in-out 0s;
  }

  &:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`;

export const Sidebar = ({ isOpen }) => (
  <StyledSidebar isOpen={isOpen}>
    <StyledWrapper>
      <StyledHeader>Min app</StyledHeader>
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