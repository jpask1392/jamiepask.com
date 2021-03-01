import Image from "next/image"
import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

/**
 * 
 * Functional component to use nextjs Image with cloudinary
 */
const myLoader = ({ src, width }) => {
  return `https://res.cloudinary.com/djetpo84s/image/upload/w_${width}/v1614310082/jamiepask.com/${src}`
}

const Cimage = ({width, height, src, className}) => {
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
          <img 
            style={{ width: "100%" }}
            src={`https://res.cloudinary.com/djetpo84s/image/upload/e_blur:200,w_100/v1614310082/jamiepask.com/${src}`}
            alt="loading"
          />
        </div> 
    }
    <Image
        src={src}
        alt="Picture of the author"
        loader={myLoader}
        width={width}
        height={height}
        sizes="(min-width: 1000px) 400px"
        onLoad={handleLoad}
      />
    </div>
  )
};

export default styled(Cimage)`
  width: 100%;
  position: relative;
`;

