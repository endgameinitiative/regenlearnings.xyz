import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

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
  }
}

export default config
