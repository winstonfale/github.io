module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Winston Fale | Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.css'},
      { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.9/css/all.css' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: '/css/mdb.min.css' },
      { rel: 'stylesheet', href: '/css/style.min.css' },
    ],
    script: [
      { src: '/js/jquery-3.2.1.min.js' , body: true },
      { src: '/js/bootstrap.min.js' , body: true },
      { src: '/js/popper.min.js' , body: true },
      { src: '/js/mdb.min.js' , body: true }
    ],
  },


  // plugins: ['~static/js/jquery-3.2.1.min.js'],


  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
