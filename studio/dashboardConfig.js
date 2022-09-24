export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '632f0d24fbe18d02018fa6ae',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-jbc5pecd',
                  apiId: '2bc40108-1539-4dc4-b056-a2c6249aa4cc'
                },
                {
                  buildHookId: '632f0d24fbe18d02018fa6af',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-kgqdt2fc',
                  apiId: '94de177c-e021-49fa-9593-6dec29235770'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/uwa234/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-kgqdt2fc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
