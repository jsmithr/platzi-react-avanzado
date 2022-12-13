const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('webpack-pwa-manifest')
const path = require('path')

module.exports = {
  mode: 'development',
  output: {
    filename: 'app.bundles.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new WebpackPwaManifestPlugin({
      name: 'Petgram - Tu app de fotos de mascotas',
      short_name: 'Petgram',
      description: 'Con Petgram puedes encontrar fotos de animales domésticos muy fácilmente',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      background_color: '#fff',
      theme_color: '#fff',
      prefer_related_applications: true,
      icons: [
        {
          src: path.resolve('src/utils/assets/img/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          purpose: 'any maskable'
        },
        {
          src: path.resolve('src/utils/assets/img/icon.png'),
          size: '1024x1024',
          purpose: 'any maskable'
        }
      ]
    }),
    new WorkboxWebpackPlugin({
      swDest: 'service-worker.js',
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 5000000,
      runtimeCaching: [
        {
          urlPattern: /https:\/\/(res.cloudinary.com|images.unsplash.com)/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: /https:\/\/platzi-react-avanzado-six.vercel.app/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: {
      disableDotRule: true
    }
  }
}
