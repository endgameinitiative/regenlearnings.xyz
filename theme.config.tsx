import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Ecosystem</span>,
  project: {
    link: 'https://github.com/endgameinitiative/regenlearnings.xyz/',
  },
  docsRepositoryBase: 'https://github.com/endgameinitiative/regenlearnings.xyz/',
  footer: {
    text: 'Ecosystem',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Ecosystem'
    }
  }
}

export default config
