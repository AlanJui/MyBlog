module.exports = {
  title: '中道部落格',
  description: '使用 VuePress 打造的部落格',
  themeConfig: {
    nav: [
      { text: '首頁', link: '/' },
      { text: '指引', link: '/guide/' },
      { text: '文章', link: '/posts/' },
      { text: '模版', link: 'https://github.com/AlanJui/vuepress-blog/' },
    ],
    sidebar: [
      '/',
      '/guide/',
      '/posts/',
    ]
  },
  markdown: {
    lineNumbers: true,
    // options for markdown-it-anchor
    anchor: { permalink: false },
    // options for markdown-it-toc
    toc: { includeLevel: [1, 4] }
  },
  thirdPartyComponents: {
    fontAwesomeIcons: {
      // Regular font awesome icon keys here
      regular: [
        'address-card',
        'file-audio',
        'cog',
        'calendar-alt',
        'file-code'
      ],
      // Solid font awesome icon keys here
      solid:['battery-quarter']
    }
  }
}
