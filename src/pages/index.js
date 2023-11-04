import * as React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"

import Banner from "../components/Banner"
import Intro from "../components/Intro"
import Terminal from "../components/Terminal"
import Projects from "../components/Projects"
import Resume from "../components/Resume"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main>
      <Helmet>

        <title>Knetters - Portfolio and Resume</title>
        <meta name="description" content="Digital resume" />
        <link rel="icon" type="image/x-icon" href="/img/favicon-32x32.png" />
        
      </Helmet>

      <Banner />

      <Layout>
        <Intro />
        <Terminal />
        <Projects />
        <Resume />
        <Footer />
      </Layout>
    </main>
  )
}
