// SASS-like DX using PostCSS,
// no Python / SASS compilation needed !

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': { stage: 1 },
    'postcss-simple-vars': {},
    'postcss-nested': {},
    'postcss-calc': {},
    autoprefixer: {},
    // stylelint: {},
  },
};
