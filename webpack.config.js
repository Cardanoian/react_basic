const path=require('path');

module.exports = {
  name: 'wordrelay-setting',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },

  entry: {
    app: ['./client'],
  },  // 입력

  module: {
    rules:[{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [['@babel/preset-env', {
          targets:{
            browsers: ['> 5% in KR'], // browserslist
          },
          debug:true,
        }],
          '@babel/preset-react',
        ],
        plugins: [], // '@babel/plugin-proposal-class-properties'
      },
    },],
  },

  // plugins: [
  //   new webpack.LoaderOptionsPlugin({debug:true}),
  // ],

  output: {
    path:path.join(__dirname, 'dist'),
    filename: "app.js",
  },  // 출력
};