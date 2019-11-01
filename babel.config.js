module.exports = {
  presets: [
    '@babel/preset-typescript',
    ['@babel/preset-react', {
      development: process.env.BABEL_ENV === 'development'
    }],
    ['@babel/preset-env', {
      useBuiltIns: 'usage',
      corejs: '3',
      modules: false // do not transpile modules
    }],
    '@emotion/babel-preset-css-prop'
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    'lodash'
  ]
}
