module.exports = {
  devServer: {
    proxy: 'http://localhost:3000'
  }
}
// module.exports = {
//   devServer: {

//     // Paths
//     assetsSubDirectory: 'static',
//     assetsPublicPath: '/',
//     proxyTable: {
//       '/up': {
//         target: 'http://localhost:3000',
//         changeOrigin: true,
//         pathRewrite: {
//           '^/up': '/'
//         }
//       }
//     }
//   }
// }