import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I'm Dmitriy!</h2>
      {/* link other site */}
      {/* <p>Need a developer? <a href="/contact">Contact me.</a></p>  */}
      {/* Quick download page into gatsby */}
      <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
    </Layout>
  )
}

export default IndexPage