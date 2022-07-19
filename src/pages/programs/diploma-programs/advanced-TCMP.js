import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import ProgramLayout from "../../../components/ProgramPageTemplates/programLayout"

const Herbology = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Advanced TCMP Program`

  const programData = {
    programName: "Post-Graduate Advanced TCMP",
    programType: "Diploma Program",
    about:
      "This 1-year program prepares post-graduates to qualify as an Advanced Registered Traditional Chinese Medicine Practitioner or Doctor of Traditional Chinese Medicine, according to different Provincial designations. In addition to the TCMP curriculum, the Advanced curriculum focuses on integrated treatment and specialized fields as well as the study of the Chinese medicine classics such as the Huang Di Nei Jing and the Shang Han Lun.",
    image: (
      <StaticImage
        src="../../../images/Programs/diploma-advanced-TCMP.png"
        alt="Image of a student weighing traditional herbal medicine."
        quality={100}
        transformOptions={{ cropFocus: "center" }}
        imgStyle={{ objectFit: "cover" }}
        style={{ height: "100%" }}
      />
    ),
    programDescription: {
      optionOne: {
        title: "1 Year Program",
        hours: "Program Hours: 970 (includes 250 clinical hours)",
        description:
          "This program can be completed in 2 years studying full-time",
      },
      additionalInfo:
        "This Program can be taken fully online with additional on-site components for specialization accredidations. ",
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
                    code: "TCM-1006",
                    title: "Huang Di Nei Jing",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "TCM-1007",
                    title: "Shang Hang Lun",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HBT-1205",
                    title: "Integrated Treatment - Respiratory Disease",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HBT-1206",
                    title:
                      "Integrated Treatment - Digestive and Colorectal Disease",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACU-2010",
                    title:
                      "Korean Five Element Acupuncture, Cosmetic Acupuncture",
                    type: "Lecture/Practical",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 2",
                courses: [
                  {
                    code: "TCM-1009",
                    title: "Jing Gui Yao Lue",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "TCM-1010",
                    title: "Wen Bing Xue",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HBT-1207",
                    title: "Integrated Treatment - Cardiovascular Disease",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HBT-1208",
                    title: "Integrated Treatment - Oncology",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "BIO-5012",
                    title: "Microbiology",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACU-2009",
                    title: "Japanese Acupuncture & Moxibustion",
                    type: "Lecture/Practical",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 3",
                courses: [
                  {
                    code: "HBT-1209",
                    title:
                      "Integrated Treatment - Traumatology and Orthopaedics",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HBT-1210",
                    title: "Integrated Treatment - Autoimmune Disorders",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HBT-1211",
                    title: "Integrated Treatment - Psychoemotional Disorders",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "BIO-5014",
                    title: "Advanced Pharmacology",
                    type: "Lecture",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Clinical Experience",
                courses: [
                  {
                    code: "CLC-9041",
                    title: "Adv.TCMP Clinic Internship (250 hours)",
                    type: "Residency",
                    credits: 16,
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
      <Seo
        title="Advanced TCMP Program"
        description="For Practitioners looking for more knowledge in the Classics, Integrated
Medicine and International Techniques."
      />
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
