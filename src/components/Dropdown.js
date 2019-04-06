import React from "react"
import styled from 'styled-components'

const StyledDropdown = styled.div`
  visibility: ${props => props.isOpen ? "visible" : "hidden"}
  position: absolute;
  top: 20px;
  left: 0;
`

export const Dropdown = ({ isOpen }) => (
  <StyledDropdown isOpen={isOpen}>Dropdown</StyledDropdown>
)