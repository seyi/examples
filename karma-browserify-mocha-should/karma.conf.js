module.exports = function(config) {
  config.set({

    frameworks: ['mocha', 'browserify'],

    files: [
      './test.js'
    ],

    preprocessors: {
      './test.js': 'browserify'
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false
  });
};
