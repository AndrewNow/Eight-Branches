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
    programType: "Diploma Program",
    about:
      "This acupuncture program can be completed in 2 years (includes summer study) or 3 years (summers off). Our program is hybrid delivery, which incudes both online and on-site study formats. In addition to acupuncture, the curriculum includes training in moxibustion, nutrition, herbology, eastern massage, cupping, gua sha and the taoist arts.",
    image: (
      <StaticImage
        src="../../../images/Programs/diploma-acupuncture.png"
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
        hours: "Program Hours: 2268 (includes 668 clinical hours)",
        description:
          "This program can be completed in 2 years studying full-time starting in September or Janurary",
      },
      optionTwo: {
        title: "3 Year Program (January Start Date)",
        hours: "Program Hours: 2268 (includes 668 clinical hours)",
        description:
          "This program can be completed in 3 years studying Fall to Spring starting in September or January.",
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
                    code: "EMA-4001",
                    title: "Eastern Bodywork I",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "PRO-7001",
                    title:
                      "Interpersonal Skills, Practice Management, Professionalism",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "TCM-1005",
                    title: "TCM History, Pinyin, Chinese Language, etc.",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "SHA-6001",
                    title: "Self Healing Arts",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "CLC-9000",
                    title: "Clinical Observation (68 Hours)",
                    type: "Lecture",
                    credits: 4,
                  },
                ],
              },
              {
                label: "Term 2",
                courses: [
                  {
                    code: "ACU-2008",
                    title:
                      "Acupuncturist Safety, Jurisprudence, Regulation, Intro to Clinic",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACU-2001",
                    title: "Meridian Theory",
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
                    code: "ACU-2005",
                    title: "Acupuncture Allied Therapies",
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
                    code: "CLC-9001",
                    title: "Clinical Internship A (50 Hours)",
                    type: "Internship",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 3",
                courses: [
                  {
                    code: "TCM-1003",
                    title: "Diagnostics of Traditional Chinese Medicine (A)",
                    type: "Lecture",
                    credits: 3,
                  },
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
                  {
                    code: "BIO-5002",
                    title: "Physiology",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "EMA-4002",
                    title: "Eastern Bodywork II",
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
                    code: "CLC-9002",
                    title: "Clinical Internship B (50 Hours)",
                    type: "Lecture",
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
                    code: "TCM-1004",
                    title: "Diagnostics of Traditional Chinese Medicine (B)",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACU-2003",
                    title: "Acupuncture Points Theory (B)",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "EMA-4003",
                    title: "Tui Na",
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
                    code: "ACT-3005",
                    title: "Acupuncture Therapeutics",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "CLC-9002",
                    title: "Clinical Internship (50 Hours)",
                    type: "Internship",
                    credits: 3,
                  },
                  {
                    code: "RES-9021",
                    title: "Residency (50 Hours)",
                    type: "Residency",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 2",
                courses: [
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
                  {
                    code: "BIO-5004",
                    title: "Pharmacology",
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
                    code: "ACT-3001",
                    title: "Acupuncture Internal Medicine",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACT-3003",
                    title: "Acupuncture External Medicine and Misc.",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "RES-9021",
                    title: "Residency (100 Hours)",
                    type: "Residency",
                    credits: 6,
                  },
                ],
              },
              {
                label: "Term 3",
                courses: [
                  {
                    code: "HRB-8001",
                    title: "TCM Nutrition",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "BIO-5005",
                    title: "Neuroanatomy & Emergency Medicine",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACT-3002",
                    title: "Acupuncture Gynecology & Pediatric Diseases",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "BIO-5006",
                    title: "Western Medical Diagnostics & Examination",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACT-3004",
                    title:
                      "Acupuncture Orthopedics, Sports Medicine, Traumatology",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "RES-9021",
                    title: "Residency (100 Hours)",
                    type: "Residency",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 4",
                courses: [
                  {
                    code: "PRO-7002",
                    title: "Exam Preparation, Career Planning",
                    type: "Lecture",
                    credits: 3,
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
                label: "Term 1",
                courses: [
                  {
                    code: "TCM-1001",
                    title: "Foundation of Traditional Chinese Medicine (A)",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "EMA-4001",
                    title: "Eastern Bodywork I",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "PRO-7001",
                    title:
                      "Interpersonal Skills, Practice Management, Professionalism",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "TCM-1005",
                    title: "TCM History, Pinyin, Chinese Language, etc.",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "SHA-6001",
                    title: "Self Healing Arts",
                    type: "Lecture",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 2",
                courses: [
                  {
                    code: "ACU-2008",
                    title:
                      "Acupuncturist Safety, Jurisprudence, Regulation, Intro to Clinic",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACU-2001",
                    title: "Meridian Theory",
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
                    code: "ACU-2005",
                    title: "Acupuncture Allied Therapies",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACU-2002",
                    title: "Acupuncture Points Theory (A)",
                    type: "Lecture",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 3",
                courses: [
                  {
                    code: "TCM-1003",
                    title: "Diagnostics of Traditional Chinese Medicine (A)",
                    type: "Lecture",
                    credits: 3,
                  },
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
                  {
                    code: "BIO-5002",
                    title: "Physiology",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "EMA-4002",
                    title: "Eastern Bodywork II",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "BIO-5011",
                    title: "Anatomy II",
                    type: "Lecture",
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
                    code: "TCM-1004",
                    title: "Diagnostics of TCM (B)",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACU-2007",
                    title: "Acupuncture Points Theory (B)",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "BIO-5004",
                    title: "Tui Na",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HRB-8002",
                    title: "Pathology",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACT-3001",
                    title: "Acupuncture Therapeutics",
                    type: "Lecture",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 2",
                courses: [
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
                  {
                    code: "BIO-5004",
                    title: "Pharmacology",
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
                    code: "ACT-3001",
                    title: "Acupuncture Internal Medicine",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACT-3003",
                    title: "Acupuncture External Medicine and Misc.",
                    type: "Lecture",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 3",
                courses: [
                  {
                    code: "HRB-8001",
                    title: "TCM Nutrition",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "BIO-5005",
                    title: "Neuroanatomy & Emergency Medicine",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACT-3002",
                    title: "Acupuncture Gynecology & Pediatric Diseases",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "BIO-5006",
                    title: "Western Medical Diagnostics & Examination",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACT-3004",
                    title:
                      "Acupuncture Orthopedics, Sports Medicine, Traumatology",
                    type: "Lecture",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 4",
                courses: [
                  {
                    code: "PRO-7002",
                    title: "Exam Preparation, Career Planning",
                    type: "Lecture",
                    credits: 3,
                  },
                ],
              },
            ],
          },
          {
            label: "Year Three",
            data: [
              {
                label: "Internships & Residencies",
                courses: [
                  {
                    code: "CLC-9000",
                    title: "Clinical Observation (68 Hours)",
                    type: "Clinical",
                    credits: 4,
                  },
                  {
                    code: "CLC-9001",
                    title:
                      "Clinical Internship A (Transitional Clinic 50 Hours)",
                    type: "Clinical",
                    credits: 3,
                  },
                  {
                    code: "CLC-9002",
                    title: "Clinical Internship B (50 Hours)",
                    type: "Clinical",
                    credits: 3,
                  },
                  {
                    code: "CLC-9002",
                    title: "Clinical Internship B (200 Hours)",
                    type: "Clinical",
                    credits: 12,
                  },
                  {
                    code: "CLC-9002",
                    title: "Clinical Internship B (50 Hours)",
                    type: "Clinical",
                    credits: 3,
                  },
                  {
                    code: "RES-9021",
                    title: "Residency (50 Hours)",
                    type: "Residency",
                    credits: 3,
                  },
                  {
                    code: "RES-9021",
                    title: "Residency (100 Hours)",
                    type: "Residency",
                    credits: 6,
                  },
                  {
                    code: "RES-9021",
                    title: "Residency (100 Hours)",
                    type: "Residency",
                    credits: 6,
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
