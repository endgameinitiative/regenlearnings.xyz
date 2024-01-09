import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span>RegenLearnings.xyz</span>,
  project: {
    link: 'https://github.com/endgameinitiative/regenlearnings.xyz/',
  },
  docsRepositoryBase: 'https://github.com/endgameinitiative/regenlearnings.xyz/',
  footer: {
    text: 'RegenLearnings.xyz',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – RegenLearnings.xyz'
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://regenlearnings.xyz' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'RegenLearnings.xyz'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'RegenLearnings.xyz'}
        />
      </>
    )
  }
}

export default config
