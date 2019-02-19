/*
七牛云配置
*/
const qiniu = require('qiniu')

// 创建上传凭证
const accessKey = 'oqxEJSvXvOGbsqzX9GEDPgypxIqva8uZOUXicVEw'
const secretKey = '_VgQYNe8SgOMnnOFn3gPRfBbBbUX3CfSRTfOFtUy'
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
const options = {
  scope: 'liuyou',
  expires: 7200
}
const putPolicy = new qiniu.rs.PutPolicy(options)
const uploadToken = putPolicy.uploadToken(mac)

module.exports = {
  uploadToken
}