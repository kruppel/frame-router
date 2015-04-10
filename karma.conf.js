module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    files: [
      'node_modules/chai/chai.js',
      'node_modules/commonjs-require-definition/require.js',
      'vendor/rsvp/dist/rsvp.js',
      'vendor/route-recognizer/dist/route-recognizer.js',
      'vendor/router/dist/router.js',
      'src/**/*.js',
      'spec/**/*_spec.js',
    ],
    browsers: ['Chrome'],
    reporters: ['dots'],
    preprocessors: {
      'src/**/*.js': ['babel', 'commonjs']
    },
    commonjsPreprocessor: {
      options: {
        pathReplace: function(path) {
          return path.replace(/^(src\/|node_modules\/[^\/]+\/dist\/)/, '');
        }
      }
    }
  });
};
