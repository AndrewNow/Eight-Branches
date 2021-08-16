import React from "react"
import styled from "styled-components"
import { YearOneTermOne } from "./terms/terms"
import { YearOneTermTwo } from "./terms/terms"
import breakpoints from '../../breakpoints'

export const AcupunctureMoxibustionYearOne = ({ programData }) => {
  return (
    <>
      <Year>
        <h1>Year One</h1>
        <ProgramData>
          <YearOneTermOne programData={programData} />
          <YearOneTermTwo programData={programData} />
        </ProgramData>
      </Year>
    </>
  )
}
export const AcupunctureMoxibustionYearTwo = ({ programData }) => {
  return (
    <>
      <Year>
        <h1>Year Two</h1>
        <ProgramData>
          <YearOneTermOne programData={programData} />
          <YearOneTermTwo programData={programData} />
        </ProgramData>
      </Year>
    </>
  )
}

const Year = styled.section`
  width: 85%;
  margin: 0 auto;
  padding-top: 5rem;

  h1 {
    padding-bottom: 2.5rem;
  }
  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
  }
`

const ProgramData = styled.div`
  border: 1px solid black;
  border-bottom: none;
  background-color: var(--color-lightestbeige);
  box-sizing: border-box;
`
