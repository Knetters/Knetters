import * as React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"

import Footer from "../components/Footer"

export default function Blog() {
  return (
    <main>
      <Helmet>

        <title>Knetters - Blog</title>
        <meta name="description" content="Digital resume" />
        {/* <script src="/script/terminal-logic.js" type="text/javascript" /> */}
        <link rel="icon" type="image/x-icon" href="/img/favicon-32x32.png" />
        
      </Helmet>

      <Layout>
        <h1>Blog</h1>
        <ul>
            <a href="/blog/post-1"><li>post 1</li></a>
            <a href="/blog/post-2"><li>post 2</li></a>
        </ul>
        <Footer />
      </Layout>
    </main>
  )
}