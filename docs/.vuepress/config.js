module.exports = {
    title: 'PseudoEcologie.org',
    description: 'Un site pour se former aux questions écologiques.',
    // permalink: '/:slug',
    themeConfig: {
      repo: 'PseudoEcologie/PseudoEcologie.org',
      docsDir: 'docs',
      editLinks: true,
      editLinkText: 'Modifier cette page',
      lastUpdated: 'Dernière modification',
      nav: [
        { text: 'Manifeste', link: '/manifeste/' },
        { text: 'Dossiers', link: '/dossiers/' },
        { text: 'Articles', link: '/articles/' },
        { text: 'Données', link: '/data/' },
        { text: 'Contribuer', link: '/contribuer/' },
      ],
      sidebar: {
        '/articles/': [
          {
            title: 'Tout les articles',
            path: '/articles/',
            collapsable: false,
          },
          {
            title: '2020',
            collapsable: true,
            // Utiliser l'adresse complète, et non le permalink.
            children: []
          },
        ],
        '/dossiers/': [
          {
            title: 'Tout les dossiers',
            path: '/dossiers/',
            collapsable: false,
            // Utiliser l'adresse complète, et non le permalink.
            children: [
              '/dossiers/1-energie.html'
            ]
          },
        ],
        '/data/': [
          {
            title: 'Toutes les données',
            path: '/data/',
            collapsable: false,
          },
          {
            title: 'Monde',
            collapsable: true,
            // Utiliser l'adresse complète, et non le permalink.
            children: [
              '/data/monde/emission-ges.html',
              '/data/monde/production-electricite.html',
              '/data/monde/production-energie.html',
              '/data/monde/securite.html',
            ]
          },
          {
            title: 'France',
            collapsable: true,
            // Utiliser l'adresse complète, et non le permalink.
            children: [
              '/data/france/emission-ges.html',
              '/data/france/production-electricite.html',
              '/data/france/production-energie.html',
            ]
          },
        ],
        '/systeme/': [
          {
            title: 'A propos',
            collapsable: false,
            children: [
              // Utiliser l'adresse complète, et non le permalink.
              '/systeme/manifeste.html',
              '/systeme/contribuer.html',
            ]
          },
        ],
      }
    },
    plugin: [
      ['@vuepress/search', {
        searchMaxSuggestions: 10
      }]
    ],
    markdown: {
      extendMarkdown: md => {
        md.use(require("markdown-it-footnote"));
        }
      }
  }