type HttpConfig = {
  url: string,
  type: string | null | undefined,
  param: Object | null | undefined,
}

const prefix = 'http://xxxxxxxxx:xxx'
function http(config: HttpConfig) {
  const url = `${prefix}${config.url}`;

  return fetch(url, {
    body: JSON.stringify(config.param || {}),
    cache: 'no-cache',
    method: config.type || 'post',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .catch(error => {
      console.info(error);
      return new Promise((resolve, reject) => reject(error));
    })
}

export { http };