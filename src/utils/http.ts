type HttpConfig = {
  url: string,
  success: Function | null | undefined,
  fail: Function | null | undefined,
  type: string | null | undefined,
  param: Object | null | undefined,
}

const prefix = 'http://localhost:8080'
function http(config: HttpConfig) {
  const url = `${prefix}${config.url}`;

  fetch(url, {
    body: JSON.stringify(config.param || {}),
    cache: 'no-cache',
    method: config.type || 'post',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => {
      debugger
      console.log(res);
      config.success && config.success(res);
    })
    .catch(error => {
      console.info(error);
      config.fail && config.fail()
    })
}

export { http };