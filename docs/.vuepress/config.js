module.exports = {
    title: 'Some Documentation',
    description: "A small documentation site ",

    themeConfig: {
        nav: [

            { text: 'guide', link: '/guide/' },
            { text: 'Get Started', link: '/get-started/' },

            { text: 'Github', link: 'https://github.com/Khushi24699' },
        ],
        sidebar: [

            {
                title: 'getting Started',
                collapsable: false,
                children: [

                    '/getting-started/install',
                    '/getting-started/use'
                ]
            },
            {
                title: 'guide',
                collapsable: false,
                children: [

                    '/guide/api-reference',
                    '/guide/deploying'
                ]
            }
        ]
    },
    dest: 'public'
}