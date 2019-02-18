/*
七牛云配置
*/
const qiniu = require('qiniu')

// 创建上传凭证
const accessKey = 'hWXVPBfMvf1RVReb29iQpD-9v8tHXbGJ2ZGUbMuz'
const secretKey = 'jLBE2b5RQ3AeDzKG-79BEIR4LY9GmdGRytr9folo'
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
const options = {
  scope: 'images',
  expires: 7200
}
const putPolicy = new qiniu.rs.PutPolicy(options)
const uploadToken = putPolicy.uploadToken(mac)

module.exports = {
  uploadToken
}