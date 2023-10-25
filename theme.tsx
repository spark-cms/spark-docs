import Head from 'next/head';
import Link from 'next/link';
import type { NextraThemeLayoutProps } from 'nextra';

import * as React from 'react';

export default function Layout({ children, pageOpts }: NextraThemeLayoutProps) {
  console.log(pageOpts);
  const { title, frontMatter, headings, pageMap } = pageOpts;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="og:image" content={frontMatter.image} />
      </Head>
      <h1>Amungus</h1>
      <ul>
        {headings.map((heading) => (
          <li key={heading.value}>
            <a href={`${heading.value}`}>{heading.value}</a>
          </li>
        ))}
      </ul>
      <h1>Amogus</h1>
      {pageMap.map(item => {
        if (item.kind === 'MdxPage') {
          return (
            <Link key={item.name} href={item.route}>
              {item.route}
            </Link>
          )
        }
        return null
      })}
      <div style={{ border: '1px solid ' }}>{children}</div>
    </div>
  );
}