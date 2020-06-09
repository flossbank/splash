import fetch from 'isomorphic-fetch'

const ENDPOINT = process.env.API_HOST

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

export const verifyRegistration = async ({ email, response, token }) => {
  return fetchThenJson(`${ENDPOINT}/user/verify-registration`, optionsWithPostBody({ email, token, recaptchaResponse: response }))
}

export const sendSupportFeedback = async ({ email, name, topic, body }) => {
  return fetchThenJson(`${ENDPOINT}/support/feedback`, optionsWithPostBody({ email, topic, name, body }))
}

export const startNewCLIInstall = async () => {
  return fetchThenJson(`${ENDPOINT}/user/new-install`, {
    method: 'POST',
    headers: {
      'x-requested-with': 'XmlHttpRequest'
    },
    credentials: 'include'
  })
}

const fetchThenJson = (url, options) => fetch(url, options)
  .then(res => {
    if (!res.ok) {
      throw res
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
