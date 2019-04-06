import React, { useState, useEffect } from "react"
import styled from "styled-components"

const StyledGrid = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
`

const StyledGridItem = styled.div`
  background-color: ${props => props.theme.primary}
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  &.small {
    grid-row: span 1;
    grid-column: span 1;
  }

  &.medium {
    grid-row: span 2;
    grid-column: span 2;
  }

  &.large {
    grid-row: span 3;
    grid-column: span 3;
  }

  &.tall {
    grid-row: span 3;
    grid-column: span 2;
  }

  &.wide {
    grid-row: span 2;
    grid-column: span 3;
  }
`

export const ImageGrid = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([{
      size: "medium",
      name: "one"
    }, {
      size: "large",
      name: "two"
    }, {
      size: "medium",
      name: "three"
    }, {
      size: "small",
      name: "four"
    }, {
      size: "tall",
      name: "five"
    }, {
      size: "wide",
      name: "six"
    }, {
      size: "wide",
      name: "seven"
    }, {
      size: "medium",
      name: "eight"
    }])
  })

  const imageItems = images.map((image, index) => <StyledGridItem key={index} className={image.size}>{image.name}</StyledGridItem>)

  return (
    <StyledGrid>
      {imageItems}
    </StyledGrid>
  );
}