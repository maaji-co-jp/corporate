import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";

const description =
  "株式会社Maajiは「テクノロジーで世界を自由に」を掲げ、Webサービスの受託開発、開発組織づくり、新規事業の開発支援を行う開発会社です。";

const Head = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `)
  const { title, siteUrl } = data.site.siteMetadata

  return (
    <Helmet>
      <html lang="ja" />
      <title>{`${title} | テクノロジーで世界を自由に`}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#2D548E" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={`${title} | テクノロジーで世界を自由に`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta name="twitter:card" content="summary" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Noto+Sans+JP:wght@400;500;700;800&display=swap"
      />

      <style>{`html { scroll-behavior: smooth; } body { -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; }`}</style>
    </Helmet>
  )
}

export default Head
