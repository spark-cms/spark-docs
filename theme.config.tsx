import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useConfig } from 'nextra-theme-docs';

export default {
  project: {
    link: 'https://github.com/spark-cms/spark-docs'
  },
  head: () => {
    const { asPath } = useRouter();
    const config = useConfig();

    const title = asPath === "/" ? "Documentation - SPARK" : config.title + " - SPARK";

    return (
      <>
        <meta property="og:url" content={`https://docs.spark-cms.io${asPath}`} />
        <meta name="description" content="This is the official documentation for SPARK." />
        <meta property="og:description" content="This is the official documentation for SPARK." />
        <meta property="theme-color" content="#ff7b28" />
        <meta name="apple-mobile-web-app-title" content="SPARK Docs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@EntropicSoft" />
        <meta name="twitter:creator" content="@EntropicSoft" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content="This is the official documentation for SPARK." />
        <meta name="twitter:image" content="https://docs.spark-cms.io/img/SPARK_og_banner.png" />
        <meta name="twitter:image:width" content="2400" />
        <meta name="twitter:image:height" content="1256" />
        <meta name="twitter:image:alt" content="SPARK Logo on a dark background" />
      </>
    )
  },
  useNextSeoProps() {
    const pathname = usePathname();

    if (pathname !== '/') {
      return {
        titleTemplate: '%s - SPARK'
      }
    } else {
      return {
        titleTemplate: 'Documentation - SPARK'
      }
    }
  },
  darkMode: true,
  primaryHue: 23,
  primarySaturation: 100,
  logo: (
    <div style={{ display: "flex", alignItems: "center", fontSize: "1.2rem", fontWeight: "900", color: "#fff" }}>
      <img src="/img/spark_logo.svg" width={48} height={48} alt="Logo" style={{ marginRight: "0.5rem", width: "3rem" }} />
      <span>SPARK</span>
    </div>
  ),
  logoLink: "/",
  banner: {
    dismissible: true,
    key: "spark-alpha-1",
    text: "⚠️ SPARK is in alpha. Expect bugs and breaking changes. ⚠️",
  },
  feedback: {
    content: null
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{' '}
        <a href="https://entropic.software" target="_blank">
          Entropic Software
        </a>
        . All rights reserved.
      </span>
    )
  },
  editLink: {
    text: "Edit this page on GitHub",
    component: ({ className, children, filePath }: { className?: string, filePath?: string, children: React.ReactNode }) => (
      <a
        href={`https://github.com/spark-cms/spark-docs/blob/master/${filePath}`}
        target="_blank"
        className={className}
      >
        {children}
      </a>
    )
  },
  toc: {
    backToTop: true,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  docsRepositoryBase: "https://github.com/spark-cms/spark-docs"
  // ... other theme options
}