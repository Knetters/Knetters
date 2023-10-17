import * as React from "react"
// import Helmet from "react-helmet"
// import { withPrefix, Link } from "gatsby"

import Layout from "../components/Layout"
import Banner from "../components/Banner"
import Intro from "../components/Intro"
import Terminal from "../components/Terminal"
import Projects from "../components/Projects"


export default function Home() {
  return (
    <main>
      <Banner />

      <Layout>
        {/* <Helmet>
          <script src={withPrefix('/terminal-logic.js')} type="text/javascript" />
        </Helmet> */}

        <Intro />
        <Terminal />
        <Projects />

      </Layout>
    </main>
  )
}
