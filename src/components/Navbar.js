import React from 'react'
import PropTypes from 'prop-types'
import ReactSVG from 'react-svg'
import styled from 'styled-components'

const StyledNav = styled.nav`
  background-color: ${props => props.theme.primary};
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
`;

const StyledButton = styled.button`
  text-transform: uppercase;
  margin: 0;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding: 12px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  border-radius: 50%;
  outline: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const StyledLinkContainer = styled.ul`
  list-style: none;
  display: flex;
`;

const StyledLink = styled.a`
  margin-left: 16px;
  color: white;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
`;

export const Navbar = ({toggleSidebar}) => (
  <StyledNav>
    <StyledButton onClick={toggleSidebar}>
      <ReactSVG
        src="menu-icon.svg"
        svgStyle={{
          fill: "white",
          height: "22px",
          width: "22px"
        }}
      />
    </StyledButton>
    <StyledLinkContainer>
      <li>
        <StyledLink href="/about">Om oss</StyledLink>
      </li>
      <li>
        <StyledLink href="/hjem">Hjem</StyledLink>
      </li>
    </StyledLinkContainer>
  </StyledNav>
)

Navbar.propTypes = {
  toggleSidebar: PropTypes.func
}
