import React, { useState, useEffect } from "react"

export const ImageGrid = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(["foo", "bar"])
  })

  return (<div>Images {images.length}</div>);
}