import http from "./http";


// 注册用户
export function getRegister(data) {
  const config = {
    method: 'post',
    url: '/register',
    data
  }
  return http(config)
}

// 登录
export function getLogin(data) {
  const config = {
    method: 'post',
    url: '/login',
    data
  }
  return http(config)
}


// 获取类型接口
export function getCategroies() {
  const config = {
    method: 'get',
    url: '/categroies'
  }
  return http(config)
}

// 获取list数据
export function getItems(data) {
  const config = {
    method: 'get',
    url: '/items',
    data
  }

  return http(config)
}