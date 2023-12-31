module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@models': './src/models',
        '@controllers': './src/controllers',
        '@repositories': './src/repositories',
        '@middlewares': './src/middlewares',
        '@services': './src/services',
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
