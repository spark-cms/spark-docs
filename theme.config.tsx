import { usePathname } from "next/navigation"

export default {
  project: {
    link: 'https://github.com/spark-cms/spark-docs'
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
      <img src="/img/spark_logo.svg" alt="Logo" style={{ marginRight: "0.5rem", width: "3rem" }} />
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
  }
  // ... other theme options
}