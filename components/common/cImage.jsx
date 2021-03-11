import Image from "next/image"
import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

/**
 * 
 * Functional component to use nextjs Image with cloudinary
 */
const myLoader = ({ src, width }) => {
  return `https://res.cloudinary.com/djetpo84s/image/upload/w_${width},f_auto/v1614310082/jamiepask.com/${src}`
}

const myLoaderBlur = ({ src, width }) => {
  return `https://res.cloudinary.com/djetpo84s/image/upload/e_blur:200,w_100/v1614310082/jamiepask.com/${src}`
}

const Cimage = ({
  width,
  height,
  src,
  className,
  sizes = "(min-width: 1000px) and (max-width: 1999px) 800px, (min-width: 2000px) 1500px, 100vw"
}) => {
  // const cloundinary_id = "djetpo84s"
  const [ loading, setLoading ] = useState(true)

  const handleLoad = (e) => {
    setLoading(false)
  }

  return (
    <div className={className}>
    { 
      loading && 
        <div style={{ width: "100%",position: "absolute" }}>
          <Image
            src={src}
            alt="Loading"
            width={width}
            height={height}
            loader={myLoaderBlur}
          />
        </div> 
    }

    <Image
        src={src}
        alt="Picture of the author"
        loader={myLoader}
        width={width}
        height={height}
        sizes={sizes}
        onLoad={handleLoad}
      />
    </div>
  )
};

export default styled(Cimage)`
  width: 100%;
  position: relative;
`;

