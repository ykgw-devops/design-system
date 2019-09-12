export default {
  menu: ['Getting started', 'Design', 'Components'],
  title: 'Waylay | Component Library',
  description: 'Waylay component library',
  indexHtml: 'index.html',
  hashRouter: true,
  modifyBabelRc: babelrc => {
    return {
      ...babelrc,
      presets: [
        ...babelrc.presets,
        require.resolve('@emotion/babel-preset-css-prop')
      ]
    }
  }
}
