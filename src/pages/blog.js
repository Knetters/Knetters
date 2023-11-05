import * as React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"

import BlogIntro from "../components/BlogIntro"
import BlogPostList from "../components/BlogPostList"
import Footer from "../components/Footer"

export default function Blog() {
  return (
    <main>
      <Helmet>

        <title>Knetters - Blog</title>
        <meta name="description" content="Digital resume" />
        <link rel="icon" type="image/x-icon" href="/img/favicon-32x32.png" />
        
      </Helmet>

      <Layout>
        <BlogIntro />
        <BlogPostList />

        <Footer />
      </Layout>
    </main>
  )
}