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
    name: 'Fake or Real - News Edition',
    themeColor: '#FFFFFF',
    msTileColor: '#FFFFFF',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'white',
    assetsVersion: '',
    manifestPath: 'manifest.json',
    manifestOptions: {
      background_color: '#FFF',
      name: 'Fake or Real - News Edition',
      short_name: 'Fake or Real',
      start_url: '.',
      display: 'fullscreen',
      theme_color: '#FFFFFF'
    },
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/msapplication-icon-144x144.png'
    },
    workboxPluginMode: 'InjectManifest',
    manifestCrossorigin: 'anonymous'
  }
}
