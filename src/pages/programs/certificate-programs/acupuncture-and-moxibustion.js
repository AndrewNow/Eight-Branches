import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import ProgramLayout from "../../../components/ProgramPageTemplates/programLayout"

const Herbology = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Acupuncture & Moxibustion`

  const programData = {
    programName: "Acupuncture & Moxibustion",
    programType: "Certificate Program",
    about:
      "This certificate program is designed for Regulated Health Practitioners interested in practicing Acupuncture as an adjunct therapy to their primary method of treatment. The program will teach practitioners to use acupuncture for the treatment of pain and musculoskeletal disorders. The hours earned in the program can be applied to Diploma programs if graduates are interested in studying further and becoming a Registered Acupuncturist or a Registered TCM Practitioner.",
    image: (
      <StaticImage
        src="../../../images/Programs/certificate-acupuncture.jpg"
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
        label: "1 Year Program",
        year: [
          {
            label: "Year One",
            data: [
              {
                label: "Term 1",
                courses: [
                  {
                    code: "TCM-1001",
                    title: "Foundation of Traditional Chinese Medicine (A)",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACU-2003",
                    title: "Acupuncture Points Theory (B)",
                    type: "Lecture",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 2",
                courses: [
                  {
                    code: "ACU-2001",
                    title: "Meridian Theory",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACU-2002",
                    title: "Acupuncture Points Theory (A)",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACU-2004",
                    title: "Acupuncture Points Theory (C)",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACU-2007",
                    title: "Acupuncture Techniques (B)",
                    type: "Lecture",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 3",
                courses: [
                  {
                    code: "ACU-2006",
                    title: "Acupuncture Techniques (A)",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "TCM-1002",
                    title: "Foundation of Traditional Chinese Medicine (B)",
                    type: "Lecture",
                    credits: 3,
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
      <Seo title="Acupuncture & Moxibustion" />
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
