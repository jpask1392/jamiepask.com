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
  return `https://res.cloudinary.com/djetpo84s/image/upload/t_media_lib_thumb,f_auto,r_10/v1614310082/jamiepask.com/${src}`
}

const Cimage = ({
  width = false,
  height = false,
  src,
  className,
  layout = 'responsive',
  sizes = "(min-width: 1000px) and (max-width: 1999px) 800px, (min-width: 2000px) 1500px, 100vw",
  priority = false
}) => {
  return (
    <div className={className} style={{ position: "relative" }}>
      <div style={{ position: "absolute", left: "1%", top: "1%", opacity: 1, width: "99%", height: "99%" }}>
        <Image
          src={src}
          alt=""
          loader={myLoaderBlur}
          width={width}
          height={height}
          sizes={sizes}
          layout={layout}
          loading="eager"
        />
      </div>

      <Image
        src={src}
        alt=""
        loader={myLoader}
        width={width}
        height={height}
        sizes={sizes}
        layout={layout}
        priority={priority}
      />
    </div>
  )
};

export default styled(Cimage)`
  width: 100%;
  position: relative;
`;

