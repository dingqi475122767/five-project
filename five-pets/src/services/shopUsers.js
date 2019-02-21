import request from '../utils/request';

//门店注册
export function regAsync(data) {
  return request("/shopUsers/reg", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
}

//门店登陆
export function loginAsync(data) {
  return request("/shopUsers/login", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
}

//验证门店账户是否重复
export function isShopUsersAsync(data) {
  return request('/shopUsers/isShopUsers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
}