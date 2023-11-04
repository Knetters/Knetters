import * as React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"

export default function NotFound() {
  return (
    <main>
      <Helmet>

        <title>Knetters</title>
        <meta name="description" content="Digital resume" />
        <link rel="icon" type="image/x-icon" href="/img/favicon-32x32.png" />
        
      </Helmet>

      <Layout>
        <div className="notfound-section">
            <span className="notfound">404</span>
            <h1>Knetters! deze pagina bestaat niet... <a href="/">Terug</a></h1>
        </div>
      </Layout>
    </main>
  )
}
