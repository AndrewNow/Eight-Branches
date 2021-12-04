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
                label: "Term 1",
                courses: [
                  {
                    code: "TCM-1001",
                    title: "Foundation of Traditional Chinese Medicine (A)",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "BIO-5001",
                    title: "Anatomy I",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "BIO-5004",
                    title: "Pharmacology",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "BIO-5013",
                    title: "Advanced Western Pathology Case Studies",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "TCM-1001",
                    title: "Foundation of Traditional Chinese Medicine (A)",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "TCM-1001",
                    title: "Foundation of Traditional Chinese Medicine (A)",
                    type: "Lecture",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 2",
                courses: [
                  {
                    code: "TCM-1002",
                    title: "Foundation of Traditional Chinese Medicine (B)",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "TCM-1003",
                    title: "Diagnostics of Traditional Chinese Medicine (A)",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "BIO-5011",
                    title: "Anatomy II",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "BIO-5002",
                    title: "Physiology",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HRB-8001",
                    title: "TCM Nutrition",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "BIO-5006",
                    title: "Western Medical Diagnostics & Examination",
                    type: "Lecture",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 3",
                courses: [
                  {
                    code: "TCM-1004",
                    title: "Diagnostics of Traditional Chinese Medicine (B)",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "BIO-5003",
                    title: "Pathology",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HRB-8002",
                    title: "Introduction to TCM Herbology and Formula",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HRB-8003",
                    title: "Herbal Materia Medica I",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HRB-8004",
                    title: "Herbal Materia Medica II",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "PRO-7001",
                    title:
                      "Interpersonal Skills, Practice Management, Professionalism ",
                    type: "Elective",
                    credits: 3,
                  },
                  {
                    code: "SHA-6001",
                    title: "Self Healing Arts",
                    type: "Elective",
                    credits: 3,
                  },
                ],
              },
            ],
          },
          {
            label: "Year Two",
            data: [
              {
                label: "Term 1",
                courses: [
                  {
                    code: "HBT-1201",
                    title: "TCM Internal Medicine",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HRB-8005",
                    title: "Herbal Formula I",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HRB-8006",
                    title: "Herbal Formula II",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HRB-8008",
                    title:
                      "Dui Yao & Pao Zhi: Herbal Combination & Preparation",
                    type: "Lecture",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 2",
                courses: [
                  {
                    code: "HRB-8007",
                    title: "Herbal Formula III and Dispensary Management",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HRB-8009",
                    title: "Patent Herbal Medicine",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HBT-1202",
                    title: "TCM Gynecology & Pediatric Diseases",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HBT-1203",
                    title: "TCM External Medicine and Misc.",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HBT-1204",
                    title: "TCM Orthopedics, Sports Medicine, Traumatology",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "BIO-5014",
                    title: "Advanced Pharmacology",
                    type: "Elective",
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
