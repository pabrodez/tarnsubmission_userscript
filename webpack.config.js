const path = require('path')
const WebpackUserscript = require('webpack-userscript')

module.exports = {
    mode: 'production',
    target: 'web',
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'tarnsubmission.user.js'
    },

    externals: {
        moment: 'moment'
    },
    
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      },

    plugins: [
        new WebpackUserscript({
            headers: {
                name: 'TARN submission helper',
                version: '0.1',
                description: 'Made for the TARN submitter\'s happiness',
                author: 'pabrodez',
                match: ['https://www.tarn.ac.uk/SubmissionDetail.aspx?subid=*&qsid=*&ro=N&mult=N&QAsub=&ssid=&pt=sect',
                        'https://www.tarn.ac.uk/SubmissionDetail.aspx?subid=*&qsid=*&ro=N&mult=N&QAsub=&ssid=*&pt=sect',
                        'https://www.tarn.ac.uk/SubmissionDetail.aspx?subid=*&ssid=*&qsid=*&ro=N&mult=N&QAsub=&&pt=sect',
                        'https://www.tarn.ac.uk/SubmissionDetail.aspx?subid=*&ssid=*&qsid=*&psid=Null&pt=sect&ro=N&mult=N&QAsub=',
                        'https://www.tarn.ac.uk/SubmissionDetail.aspx?subid=*&ssid=*&qsid=*&psid=Null&pt=sect&ro=N&mult=Y&QAsub=',
                        'https://www.tarn.ac.uk/SubmissionDetail.aspx?subid=*&ssid=*&qsid=*&psid=0&pt=sect&ro=N&mult=N&QAsub='
                    ],
                grant: 'none',
                require: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js',
                license: 'MIT'
            },
            pretty: false
        })
    ]
}