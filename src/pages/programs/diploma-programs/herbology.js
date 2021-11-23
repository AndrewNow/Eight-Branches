import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import ProgramLayout from "../../../components/ProgramPageTemplates/programLayout"

const Herbology = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Herbology`

  const programData = {
    programName: "Herbology",
    programType: "Diploma Program",
    about:
      "This program qualifies graduates to apply for professional membership as a Registered Herbalist (RH) with the Ontario Herbalists Association and to write the Pan-Canadian regulatory examinations and to become a Registered TCM Herbalist (R.TCM.H). The program combines Eastern and Western medical theory, clinical practice and internships. In addition to herbology, the curriculum includes training in eastern nutrition, TCM Theory & Diagnostics, advanced Formula preparation, Internal & External Medicine, Gynaecology & Paediatrics. Unlike the other programs, our herbology program is ineligible for OSAP and student loan funding.",
    image: (
      <StaticImage
        src="../../../images/Programs/diploma-herbology.png"
        alt="Image of a student weighing traditional herbal medicine."
        quality={100}
        transformOptions={{ cropFocus: "center" }}
        imgStyle={{ objectFit: "cover" }}
        style={{ height: "100%" }}
      />
    ),
    programDescription: {
      optionOne: {
        title: "2 Year Program (September Start Date)",
        hours: "Program Hours: 2400",
        description:
          "This program can be completed in 2 years studying full-time",
      },
      optionTwo: {
        title: "3 Year Program (January Start Date)",
        hours: "Program Hours: 2400",
        description:
          "This program can be completed in 3 years studying full-time",
      },
      additionalInfo:
        "Both programs qualify graduates to write the Pan-Canadian regulatory examinations and to become a Registered Acupuncturist (R.Ac).",
    },
    courseData: [
      {
        label: "2 Year Program",
        year: [
          {
            label: "Year One",
            data: [
              {
                label: "Term 1 - Spring",
                courses: [
                  {
                    code: "103",
                    title: "TCM Theory & Diagnostics III",
                    type: "Lecture Term three",
                    credits: 4,
                  },
                  {
                    code: "203",
                    title: "Acupoint Theory and Location II",
                    type: "Lecture & Practical",
                    credits: 6,
                  },
                  {
                    code: "204",
                    title: "Techniques of Acupuncture and Moxibustion",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "303",
                    title: "Herbal Pharmacopeia I",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "504",
                    title: "Physiology",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "600",
                    title: "Clinical Assistance",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "703",
                    title: "Tai Ji II",
                    type: "Lecture",
                    credits: 1,
                  },
                ],
              },
              {
                label: "Term 2 - Winter",
                courses: [
                  {
                    code: "103",
                    title: "TCM Theory & Diagnostics III",
                    type: "Lecture Term three",
                    credits: 4,
                  },
                  {
                    code: "203",
                    title: "Acupoint Theory and Location II",
                    type: "Lecture & Practical",
                    credits: 6,
                  },
                  {
                    code: "204",
                    title: "Techniques of Acupuncture and Moxibustion",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "303",
                    title: "Herbal Pharmacopeia I",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "504",
                    title: "Physiology",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "600",
                    title: "Clinical Assistance",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "703",
                    title: "Tai Ji II",
                    type: "Lecture",
                    credits: 1,
                  },
                ],
              },
            ],
          },
          {
            label: "Year Two",
            data: [
              {
                label: "Term 1 - Spring",
                courses: [
                  {
                    code: "103",
                    title: "TCM Theory & Diagnostics III",
                    type: "Lecture Term three",
                    credits: 4,
                  },
                  {
                    code: "203",
                    title: "Acupoint Theory and Location II",
                    type: "Lecture & Practical",
                    credits: 6,
                  },
                  {
                    code: "204",
                    title: "Techniques of Acupuncture and Moxibustion",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "303",
                    title: "Herbal Pharmacopeia I",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "504",
                    title: "Physiology",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "600",
                    title: "Clinical Assistance",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "703",
                    title: "Tai Ji II",
                    type: "Lecture",
                    credits: 1,
                  },
                ],
              },
              {
                label: "Term 2 - Winter",
                courses: [
                  {
                    code: "103",
                    title: "TCM Theory & Diagnostics III",
                    type: "Lecture Term three",
                    credits: 4,
                  },
                  {
                    code: "203",
                    title: "Acupoint Theory and Location II",
                    type: "Lecture & Practical",
                    credits: 6,
                  },
                  {
                    code: "204",
                    title: "Techniques of Acupuncture and Moxibustion",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "303",
                    title: "Herbal Pharmacopeia I",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "504",
                    title: "Physiology",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "600",
                    title: "Clinical Assistance",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "703",
                    title: "Tai Ji II",
                    type: "Lecture",
                    credits: 1,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: "3 Year Program",
        year: [
          {
            label: "Year One",
            data: [
              {
                label: "Term 1 - Spring",
                courses: [
                  {
                    code: "103",
                    title: "TCM Theory & Diagnostics III",
                    type: "Lecture Term three",
                    credits: 4,
                  },
                  {
                    code: "203",
                    title: "Acupoint Theory and Location II",
                    type: "Lecture & Practical",
                    credits: 6,
                  },
                  {
                    code: "204",
                    title: "Techniques of Acupuncture and Moxibustion",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "303",
                    title: "Herbal Pharmacopeia I",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "504",
                    title: "Physiology",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "600",
                    title: "Clinical Assistance",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "703",
                    title: "Tai Ji II",
                    type: "Lecture",
                    credits: 1,
                  },
                ],
              },
              {
                label: "Term 2 - Winter",
                courses: [
                  {
                    code: "103",
                    title: "TCM Theory & Diagnostics III",
                    type: "Lecture Term three",
                    credits: 4,
                  },
                  {
                    code: "203",
                    title: "Acupoint Theory and Location II",
                    type: "Lecture & Practical",
                    credits: 6,
                  },
                  {
                    code: "204",
                    title: "Techniques of Acupuncture and Moxibustion",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "303",
                    title: "Herbal Pharmacopeia I",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "504",
                    title: "Physiology",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "600",
                    title: "Clinical Assistance",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "703",
                    title: "Tai Ji II",
                    type: "Lecture",
                    credits: 1,
                  },
                ],
              },
            ],
          },
          {
            label: "Year Two",
            data: [
              {
                label: "Term 1 - Spring",
                courses: [
                  {
                    code: "103",
                    title: "TCM Theory & Diagnostics III",
                    type: "Lecture Term three",
                    credits: 4,
                  },
                  {
                    code: "203",
                    title: "Acupoint Theory and Location II",
                    type: "Lecture & Practical",
                    credits: 6,
                  },
                  {
                    code: "204",
                    title: "Techniques of Acupuncture and Moxibustion",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "303",
                    title: "Herbal Pharmacopeia I",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "504",
                    title: "Physiology",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "600",
                    title: "Clinical Assistance",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "703",
                    title: "Tai Ji II",
                    type: "Lecture",
                    credits: 1,
                  },
                ],
              },
              {
                label: "Term 2 - Winter",
                courses: [
                  {
                    code: "103",
                    title: "TCM Theory & Diagnostics III",
                    type: "Lecture Term three",
                    credits: 4,
                  },
                  {
                    code: "203",
                    title: "Acupoint Theory and Location II",
                    type: "Lecture & Practical",
                    credits: 6,
                  },
                  {
                    code: "204",
                    title: "Techniques of Acupuncture and Moxibustion",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "303",
                    title: "Herbal Pharmacopeia I",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "504",
                    title: "Physiology",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "600",
                    title: "Clinical Assistance",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "703",
                    title: "Tai Ji II",
                    type: "Lecture",
                    credits: 1,
                  },
                ],
              },
            ],
          },
          {
            label: "Year Three",
            data: [
              {
                label: "Term 1 - Spring",
                courses: [
                  {
                    code: "103",
                    title: "TCM Theory & Diagnostics III",
                    type: "Lecture Term three",
                    credits: 4,
                  },
                  {
                    code: "203",
                    title: "Acupoint Theory and Location II",
                    type: "Lecture & Practical",
                    credits: 6,
                  },
                  {
                    code: "204",
                    title: "Techniques of Acupuncture and Moxibustion",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "303",
                    title: "Herbal Pharmacopeia I",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "504",
                    title: "Physiology",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "600",
                    title: "Clinical Assistance",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "703",
                    title: "Tai Ji II",
                    type: "Lecture",
                    credits: 1,
                  },
                ],
              },
              {
                label: "Term 2 - Winter",
                courses: [
                  {
                    code: "103",
                    title: "TCM Theory & Diagnostics III",
                    type: "Lecture Term three",
                    credits: 4,
                  },
                  {
                    code: "203",
                    title: "Acupoint Theory and Location II",
                    type: "Lecture & Practical",
                    credits: 6,
                  },
                  {
                    code: "204",
                    title: "Techniques of Acupuncture and Moxibustion",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "303",
                    title: "Herbal Pharmacopeia I",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "504",
                    title: "Physiology",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "600",
                    title: "Clinical Assistance",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "703",
                    title: "Tai Ji II",
                    type: "Lecture",
                    credits: 1,
                  },
                ],
              },
              {
                label: "Term 3 - Fall",
                courses: [
                  {
                    code: "103",
                    title: "TCM Theory & Diagnostics III",
                    type: "Lecture Term three",
                    credits: 4,
                  },
                  {
                    code: "203",
                    title: "Acupoint Theory and Location II",
                    type: "Lecture & Practical",
                    credits: 3,
                  },
                  {
                    code: "204",
                    title: "Techniques of Acupuncture and Moxibustion",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "303",
                    title: "Herbal Pharmacopeia I",
                    type: "Lecture",
                    credits: 2,
                  },
                  {
                    code: "504",
                    title: "Physiology",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "600",
                    title: "Clinical Assistance",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "703",
                    title: "Tai Ji II",
                    type: "Lecture",
                    credits: 1,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }

  return (
    <Layout title={siteTitle}>
      <Seo title="Herbology" />
      <ProgramLayout programData={programData} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Herbology
