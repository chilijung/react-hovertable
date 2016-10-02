var path = require('path');

module.exports = function(config) {
  config.set({
    autoWatch: true,
    browsers: ['Chrome'],
    // singleRun: true,
    frameworks: ['mocha'],
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    reporters: ['dots'],
    customLaunchers: {
      Chrome_travis_ci: { // eslint-disable-line
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    webpack: {
      externals: {
        'react/lib/ReactContext': 'window',
        'react/addons': true,
        'jsdom': 'window',
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true
      },
      devtool: 'inline-source-map',
      module: {
        noParse: [
          // dynamic require calls in sinon confuse webpack so we ignore it
          /node_modules\/sinon\//
        ],
        loaders: [
          {
            test: /\.js$/,
            loaders: ['babel'],
            exclude: path.resolve(__dirname, "node_modules")
          }
        ]
      },
      resolve: {
        alias: {
          HoverTable: path.join(__dirname, './src/'),
          sinon: 'sinon/pkg/sinon'
        }
      }
    },
    webpackServer: {
      noInfo: true
    }
  });

  if (process.env.TRAVIS) {
    config.browsers = ['Chrome_travis_ci'];
  }
};
