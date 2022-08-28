var CONST = require("./const");
module.exports = {
    title: 'Today TaeKyu Learned', 
    description: 'vuepress로 만든 문서입니다.',
    base: "/TIL/",
    dest: 'build',
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.png'
        }]
    ],
    themeConfig: {
        sidebar:[
            {
                title: 'JavaScript',
                children: CONST.JavaScriptList
            },
            {
                title: 'Vue js',
                children: CONST.VuejsList
            },
        ],
        nav: [
            { text: 'Github', link: 'https://github.com/ptq124' }
        ],
    }
}

