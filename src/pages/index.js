import * as React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"

import Banner from "../components/Banner"
import Intro from "../components/Intro"
import Terminal from "../components/Terminal"
import Projects from "../components/Projects"

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>Knetters</title>
        <meta name="description" content="Digital resume" />
      </Helmet>

      <Banner />

      <Layout>
        <Intro />
        <Terminal />
        <Projects />
      </Layout>
    </main>
  )
}
