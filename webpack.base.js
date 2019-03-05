module.exports = {
  module: {
    rules: [{
      test: /\.js.?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['@babel/react', ['@babel/env', {
          targets: {
            browsers: ['last 2 versions']
          }
        }]],
        plugins: [
          "@babel/transform-runtime",
          "@babel/proposal-class-properties"
        ]
      }
    }]
  }
}
