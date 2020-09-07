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
              '/data/monde/giec-co2secteurs.html',
              '/data/monde/giec-geskwh.html',
              '/data/monde/iea-gwhans.html',
              '/data/monde/iea-ktepans.html',
              '/data/monde/pe-ktepchange.html',
            ]
          },
          {
            title: 'France',
            collapsable: true,
            // Utiliser l'adresse complète, et non le permalink.
            children: [
              '/data/france/citepa-co2secteurs.html',
              '/data/france/iea-gwhans.html',
              '/data/france/iea-ktepans.html',
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