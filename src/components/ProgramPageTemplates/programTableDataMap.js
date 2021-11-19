import React from "react"
import styled from "styled-components"
// import { YearOneTermOne } from "./terms/terms"
// import { YearOneTermTwo } from "./terms/terms"
import breakpoints from "../breakpoints"
import ProgramYearDataMap from "./programYearDataMap"

export const ProgramTableDataMap = ({ programOption }) => {
  // programOption is shorthand for {programData.courseData.optionXYZ}
  //
  // whereby "optionXYZ" refers to the program configuration option (2 year program offering, 3 year program offering... etc.)

  return (
    <>
      <Year>
        {programOption.year.map(yearData => {
          return (
            <>
              <h1>{yearData.label}</h1>
              <ProgramData>
                {yearData.data.map((term, index) => (
                  <ProgramYearDataMap term={term} index={index} key={index} />
                ))}
              </ProgramData>
            </>
          )
        })}
      </Year>
    </>
  )
}

const Year = styled.section`
  width: 85%;
  margin: 0 auto;

  h1 {
    padding-top: 5rem;
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
