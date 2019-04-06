import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Dropdown } from "./Dropdown"

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

const StyledDropdownContainer = styled.button`
  color: ${props => props.theme.text};
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  border: 0;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  outline: none;
`;

export const Navbar = ({toggleSidebar}) => {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  }

  return (
    <StyledNav>
      <StyledButton onClick={toggleSidebar}>
        <i className="material-icons md-light">menu</i>
      </StyledButton>
      <StyledDropdownContainer onClick={toggleDropdown}>
        Nicolai <i className="material-icons md-light">arrow_drop_down</i>
        <Dropdown isOpen={dropdownIsOpen} />
      </StyledDropdownContainer>
    </StyledNav>
  )
}

Navbar.propTypes = {
  toggleSidebar: PropTypes.func
}
