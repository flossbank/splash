import fetch from 'isomorphic-fetch'

const ENDPOINT = process.env.NODE_ENV === 'production' ? 'https://api.flossbank.com' : 'https://api.flossbank.io'

export const betaSubscribe = async ({ email }) => {
  return fetchThenJson(`${ENDPOINT}/beta/subscribe`, optionsWithPostBody({ email }))
}

export const betaUnsubscribe = async ({ token }) => {
  return fetchThenJson(`${ENDPOINT}/beta/unsubscribe`, optionsWithPostBody({ token }))
}

export const login = async ({ email }) => {
  return fetchThenJson(`${ENDPOINT}/user/request-login`, optionsWithPostBody({ email }))
}

export const signup = async ({ email }) => {
  return fetchThenJson(`${ENDPOINT}/user/register`, optionsWithPostBody({ email }))
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
