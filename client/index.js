import fetch from 'isomorphic-fetch'

const ENDPOINT = process.env.NODE_ENV === 'production' ? 'https://api.flossbank.com' : 'http://localhost:8081'

export const subscribe = async ({ email }) => {
  return fetchThenJson(`${ENDPOINT}/subscribe`, optionsWithPostBody({ email }))
}

const fetchThenJson = (url, options) => fetch(url, options)
  .then(res => {
    if (!res.ok) {
      const e = new Error('response not ok')
      e.res = res
      throw e
    }
    return res.json()
  })

const optionsWithPostBody = (body) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-requested-with': 'XmlHttpRequest'
    },
    body: JSON.stringify(body),
    credentials: 'include'
  }
}
