module.exports = config => {
  config.set({
    basePath: '../',
    browsers: ['Chrome'],
    files: [
      'http://github.elemecdn.com/vuejs/vue/v2.0.3/dist/vue.js',
      'dist/vue-img.js',
      'build/test/*.test.js'
    ],
    frameworks: ['mocha', 'chai'],
    reporters: ['mocha'],
    singleRun: true
  })
}
