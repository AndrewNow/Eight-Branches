import React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { graphql } from "gatsby"

const PsychedelicAssistedTherapy = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Acupuncture & Moxibustion`

  return (
    <Layout title={siteTitle}>
      <Seo title="Psychedelic Assited Therapy" />
      {/* <ProgramLayout programData={programData} /> */}
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

export default PsychedelicAssistedTherapy
