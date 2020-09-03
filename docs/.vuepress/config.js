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
            children: [
              '/articles/2020-energie.html',
            ]
          },
        ],
        '/dossiers/': [
          {
            title: 'Dossiers',
            path: '/dossiers/',
            collapsable: false,
            // Utiliser l'adresse complète, et non le permalink.
            children: [
              '/dossiers/pollution.html',
              '/dossiers/source-energie.html',
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
    }
  }