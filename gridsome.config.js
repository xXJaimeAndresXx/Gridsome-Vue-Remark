// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Periodico',
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options:{
        typeName: 'Posts',
        baseDir: './posts',
        pathPrefix: '/posts',
        template: './src/templates/Post.vue'
      }
    }
  ]
}
