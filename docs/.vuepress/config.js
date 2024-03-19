var CONST = require('./const')
module.exports = {
  title: 'Today TaeKyu Learned',
  description: `TaeKyu's Personal Wiki (Today I Learned)`,
  base: '/TIL/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.png',
      },
    ],
  ],
  themeConfig: {
    sidebar: [
      {
        title: 'Hello',
        children: CONST.Hello,
      },
      {
        title: 'JavaScript',
        children: CONST.JavaScriptList,
      },
      {
        title: 'Vue js',
        children: CONST.VuejsList,
      },
      {
        title: 'Fast API',
        children: CONST.FastApiList,
      },
      {
        title: 'Front End',
        children: CONST.FrontEndList,
      },
      {
        title: 'Alogorithm',
        children: CONST.Alogorithm,
      },
      {
        title: 'VuePress',
        children: CONST.VuePressList,
      },
      {
        title: 'Etc',
        children: CONST.etc,
      },
    ],
    nav: [{ text: 'Github', link: 'https://github.com/ptq124' }],
  },
}
