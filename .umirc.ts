export default {
  mode: 'site',
  title: 'Awesome Frontend',
  favicon: '/logo.svg',
  logo: '/logo.svg',
  resolve: {
    includes: ['docs']
  },
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/wangxingkang/awesome-frontend'
    }
  ],
  dynamicImport: {},
  hash: true,
  nodeModulesTransform: {
    type: 'none',
    exclude: []
  },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css'
      }
    ]
  ]
};
