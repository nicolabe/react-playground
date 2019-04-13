import React from "react"
import styled from 'styled-components'

const StyledDropdown = styled.div`
  visibility: ${props => props.isOpen ? "visible" : "hidden"};
  position: absolute;
  opacity: ${props => props.isOpen ? "1" : "0"};
  transition: opacity 150ms ease-in-out;
  background-color: white;
  width: 150px;
  right: 0;
  border-radius: 4px;
  margin-top: 12px;
`

const StyledDropdownContent = styled.div`
  padding: 18px;
`

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const StyledListItem = styled.li`
  &:not(:last-child) {
    padding-bottom: 16px;
  }
`

const StyledLink = styled.a`
  position: relative;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;

  &:hover {
    color: #333;
  }

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
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

`

export const Dropdown = ({ isOpen }) => (
  <StyledDropdown role="dialog" isOpen={isOpen}>
    <StyledDropdownContent>
      <StyledList>
        <StyledListItem>
          <StyledLink>Min side</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink>Logg ut</StyledLink>
        </StyledListItem>
      </StyledList>
    </StyledDropdownContent>
    <i className="material-icons md-light dropdown-caret">arrow_drop_up</i>
  </StyledDropdown>
)