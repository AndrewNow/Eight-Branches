import React from "react"
import {
  AcupunctureMoxibustionYearOne,
  AcupunctureMoxibustionYearTwo
} from "./sixSemester/semesters"

const programData = {
  acupunctureMoxibustion: {
    sixSemester: [
      {
        yearOne: [
          {
            termOne: [{
              courses: [
                {
                  code: "103",
                  title: "TCM Theory & Diagnostics III",
                  type: "Lecture",
                  credits: "4 credits",
                },
                {
                  code: "203",
                  title: "Acupoint Theory and Location II",
                  type: "Lecture & Practical",
                  credits: "6 credits",
                },
                {
                  code: "204",
                  title: "Techniques of Acupuncture and Moxibustion",
                  type: "Lecture",
                  credits: "4 credits",
                },
                {
                  code: "303",
                  title: "Herbal Pharmacopeia I",
                  type: "Lecture",
                  credits: "4 credits",
                },
                {
                  code: "504",
                  title: "Physiology",
                  type: "Lecture",
                  credits: "4 credits",
                },
                {
                  code: "600",
                  title: "Clinical Assistance",
                  type: "Lecture",
                  credits: "4 credits",
                },
                {
                  code: "703",
                  title: "Tai Ji II",
                  type: "Lecture",
                  credits: "1 credit",
                },
              ],
            }],
          },
          {
            termTwo: [{
              courses: [
                {
                  code: "103",
                  title: "TCM Theory & Diagnostics III",
                  type: "Lecture Term two",
                  credits: "4 credits",
                },
                {
                  code: "203",
                  title: "Acupoint Theory and Location II",
                  type: "Lecture & Practical",
                  credits: "6 credits",
                },
                {
                  code: "204",
                  title: "Techniques of Acupuncture and Moxibustion",
                  type: "Lecture",
                  credits: "4 credits",
                },
                {
                  code: "303",
                  title: "Herbal Pharmacopeia I",
                  type: "Lecture",
                  credits: "4 credits",
                },
                {
                  code: "504",
                  title: "Physiology",
                  type: "Lecture",
                  credits: "4 credits",
                },
                {
                  code: "600",
                  title: "Clinical Assistance",
                  type: "Lecture",
                  credits: "4 credits",
                },
                {
                  code: "703",
                  title: "Tai Ji II",
                  type: "Lecture",
                  credits: "1 credit",
                },
              ],
            }],
          },
        ],

        yearTwo: [
          {
            termOne: {
              courses: [
                {
                  code: "103",
                  title: "year two term 1 TCM Theory & Diagnostics III",
                  type: "Lecture",
                  credits: "4 credits",
                },
                {
                  code: "203",
                  title: "Acupoint Theory and Location II",
                  type: "Lecture & Practical",
                  credits: "6 credits",
                },
                {
                  code: "204",
                  title: "Techniques of Acupuncture and Moxibustion",
                  type: "Lecture",
                  credits: "4 credits",
                },
                {
                  code: "303",
                  title: "Herbal Pharmacopeia I",
                  type: "Lecture",
                  credits: "4 credits",
                },
                {
                  code: "504",
                  title: "Physiology",
                  type: "Lecture",
                  credits: "4 credits",
                },
                {
                  code: "600",
                  title: "Clinical Assistance",
                  type: "Lecture",
                  credits: "4 credits",
                },
                {
                  code: "703",
                  title: "Tai Ji II",
                  type: "Lecture",
                  credits: "1 credit",
                },
              ],
            },

            termTwo: {
              courses: [
                {
                  code: "103",
                  title: "TCM Theory & Diagnostics III",
                  type: "Lecture Term three",
                  credits: "4 credits",
                },
                {
                  code: "203",
                  title: "Acupoint Theory and Location II",
                  type: "Lecture & Practical",
                  credits: "6 credits",
                },
                {
                  code: "204",
                  title: "Techniques of Acupuncture and Moxibustion",
                  type: "Lecture",
                  credits: "4 credits",
                },
                {
                  code: "303",
                  title: "Herbal Pharmacopeia I",
                  type: "Lecture",
                  credits: "4 credits",
                },
                {
                  code: "504",
                  title: "Physiology",
                  type: "Lecture",
                  credits: "4 credits",
                },
                {
                  code: "600",
                  title: "Clinical Assistance",
                  type: "Lecture",
                  credits: "4 credits",
                },
                {
                  code: "703",
                  title: "Tai Ji II",
                  type: "Lecture",
                  credits: "1 credit",
                },
              ],
            },
          },
        ],
      },
    ],
  },
}

export const SixSemesterAcupunctureMoxibustionProgramData = () => {
  return (
    <>
      <AcupunctureMoxibustionYearOne programData={programData} />
      <AcupunctureMoxibustionYearTwo programData={programData} />
    </>
  )
}

export const EightSemesterAcupunctureMoxibustionProgramData = () => {
  return (
    <>
      <AcupunctureMoxibustionYearOne programData={programData} />
      <AcupunctureMoxibustionYearTwo programData={programData} />
    </>
  )
}
