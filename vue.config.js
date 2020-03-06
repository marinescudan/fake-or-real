// const path = require('path');

const app = {
  name: 'Fake or Real - News Edition',
  short_name: 'Fake or Real',
  themeColor: '#FFFFFF',
  splash_background_color: '#FFF'
}

module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en-GB',
      fallbackLocale: 'en-GB',
      localeDir: 'locales',
      enableInSFC: true
    },
  },

  outputDir: '_site',

  pwa: {
    name: app.name,
    themeColor: app.themeColor,
    msTileColor: app.themeColor,
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    assetsVersion: '',
    manifestPath: 'manifest.json',
    manifestOptions: {
      background_color: app.splash_background_color,
      name: app.name,
      short_name: app.short_name,
      start_url: '.',
      display: 'fullscreen',
      theme_color: app.themeColor
    },
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/msapplication-icon-144x144.png'
    },
    // workboxOptions: {
    //   // swSrc is required in InjectManifest mode.
    //   swSrc: 'dev/sw.js',
    //   // ...other Workbox options...
    // }
  }
}
