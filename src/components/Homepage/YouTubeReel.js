import React from "react"
import styled from "styled-components"
import breakpoints from "../breakpoints"

const YouTubeReel = () => {
  return (
    <Wrapper>
      <Over />
      <Video>
        <iframe
          width="100%"
          height="100%"
          style={{
            display: "block",
          }}
          src="https://www.youtube.com/embed/GT2f6tnommk"
          title="YouTube video player"
          frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Video>
    </Wrapper>
  )
}

export default YouTubeReel

const Wrapper = styled.section`
  background: var(--color-sandbeige);
  position: relative;
  width: 100%;
  padding-bottom: 25vh;

  @media (max-width: ${breakpoints.l}px) {
    padding-bottom: 30vh;
  }
`
const Over = styled.div`
  position: sticky;
  bottom: 0;
  left: 50%;
  width: 52%;
  height: 80vh;
  margin: 0 auto;
  margin-bottom: 600px;
  background: var(--color-sandbeige);
  z-index: 5;
  @media (max-width: ${breakpoints.xl}px) {
    left: 0;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 500px;
  }
  @media (max-width: ${breakpoints.m}px) {
    left: 0;
    width: 100%;
    height: auto;
    aspect-ratio: 16/12;
    margin: 0 auto;
  }
  @media (max-width: ${breakpoints.s}px) {
    height: 30vh;
  }
`

const Video = styled.div`
  position: sticky;
  display: block;
  z-index: 1;
  aspect-ratio: 16/9;
  width: 50%;
  height: auto;
  bottom: 25%;
  left: 0;
  margin: 0 auto;
  @media (max-width: ${breakpoints.xl}px) {
    width: 70%;
  }
  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
    left: 0;
    margin: 0 auto;
  }
`
