// 用户名称脱敏
function unameFormat (name) {
  if (name) {
    return name.substr(0, 2) + '***'
  }
  return name
}

export {
  unameFormat
}
