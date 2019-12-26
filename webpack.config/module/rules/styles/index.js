module.exports = {
  test: /\.s(a|c)ss$/i,
  use: [
    { loader: 'style-loader' },
    {
      loader: 'css-loader', options: {
        modules: true
      }
    }
  ]
};