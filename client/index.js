import fetch from 'isomorphic-fetch'

const ENDPOINT = process.env.NODE_ENV === 'production' ? 'https://api.flossbank.com' : 'http://localhost:8081'

export const betaSubscribe = async ({ email }) => {
  return fetchThenJson(`${ENDPOINT}/beta/subscribe`, optionsWithPostBody({ email }))
}

export const betaUnsubscribe = async ({ email }) => {
  return fetchThenJson(`${ENDPOINT}/beta/subscribe`, optionsWithPostBody({ email }))
}

const fetchThenJson = (url, options) => fetch(url, options)
  .then(res => {
    if (!res.success) {
      return res.json()
    }
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
