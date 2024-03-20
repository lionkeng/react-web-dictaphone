module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                // ...
              },
            },
          },
        ],
        type: 'css/auto', // set to 'css/auto' if you want to support '*.module.css' as CSS Module, otherwise set type to 'css'
      },
    ],
  },
}
