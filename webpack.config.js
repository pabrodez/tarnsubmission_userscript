const path = require('path')
const WebpackUserscript = require('webpack-userscript')

module.exports = {
  target: 'web',
  entry: path.join(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'tarnsubmission.user.js'
  },

  resolve: {
    alias: {
      Utils: path.resolve(__dirname, 'src/utils.js'),
      Toolbar: path.resolve(__dirname, 'src/toolbar.js'),
      AlertComponents: path.resolve(__dirname, 'src/alertComponents.js'),
      AlertChecker: path.resolve(__dirname, 'src/alertChecker.js')
    }
  },

  externals: {
    moment: 'moment'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ]
      },
    ]
  },

  plugins: [
    new WebpackUserscript({
      headers: {
        name: 'TARN submission helper',
        version: '0.2',
        description: 'Made for the TARN submitter\'s happiness',
        author: 'pabrodez',
        match: ['https://www.tarn.ac.uk/SubmissionDetail.aspx?subid=*&qsid=*&ro=N&mult=N&QAsub=&ssid=&pt=sect',
          'https://www.tarn.ac.uk/SubmissionDetail.aspx?subid=*&qsid=*&ro=N&mult=N&QAsub=&ssid=*&pt=sect',
          'https://www.tarn.ac.uk/SubmissionDetail.aspx?subid=*&ssid=*&qsid=*&ro=N&mult=N&QAsub=&&pt=sect',
          'https://www.tarn.ac.uk/SubmissionDetail.aspx?subid=*&ssid=*&qsid=*&psid=Null&pt=sect&ro=N&mult=N&QAsub=',
          'https://www.tarn.ac.uk/SubmissionDetail.aspx?subid=*&ssid=*&qsid=*&psid=Null&pt=sect&ro=N&mult=Y&QAsub=',
          'https://www.tarn.ac.uk/SubmissionDetail.aspx?subid=*&ssid=*&qsid=*&psid=0&pt=sect&ro=N&mult=N&QAsub='
        ],
        grant: 'GM_addStyle',
        require: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js',
        license: 'MIT'
      },
      pretty: false
    })
  ]
}