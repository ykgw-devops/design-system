module.exports = {
  presets: [
    ['@babel/preset-react', {
      development: process.env.BABEL_ENV === 'development'
    }],
    ['@babel/preset-env', {
      useBuiltIns: 'usage',
      corejs: '3'
    }],
    '@babel/preset-typescript',
    '@emotion/babel-preset-css-prop'
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    'lodash'
  ]
}
