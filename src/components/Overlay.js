import React from "react"
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledOverlayDiv = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  visibility: ${props => props.isOpen ? "visible" : "hidden"};
  transition: opacity 0.3s;
  opacity: ${props => props.isOpen ? "1" : "0"};
`

export const Overlay = ({ isOpen, onClick }) => (
  <StyledOverlayDiv onClick={onClick} isOpen={isOpen} />
)

Overlay.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func
}