import fetch from 'isomorphic-fetch'

export const login = async ({ email }) => {
  return fetchThenJson('api/user/request-login', optionsWithPostBody({ email }))
}

export const logout = async () => {
  return fetchThenJson('api/user/logout', optionsWithPostBody())
}

export const completeLogin = async ({ email, token }) => {
  return fetchThenJson('/api/user/complete-login', optionsWithPostBody({ email, token }))
}

export const signup = async ({ email, referralCode }) => {
  return fetchThenJson('api/user/register', optionsWithPostBody({ email, referralCode }))
}

export const donate = async ({ amount, billingToken, last4 }) => {
  return fetchThenJson('api/user/create-donation', optionsWithPostBody({ amount, billingToken, last4 }))
}

export const updateDonation = async ({ amount, seeAds }) => {
  return fetchThenJson('api/user/update-donation', optionsWithPutBody({ amount, seeAds }))
}

export const deleteDonation = async () => {
  return fetchThenJson('api/user/delete-donation', optionsDeleteRequest())
}

export const verifyRegistration = async ({ email, response, token }) => {
  return fetchThenJson('api/user/verify-registration', optionsWithPostBody({ email, token, recaptchaResponse: response }))
}

export const sendSupportFeedback = async ({ email, name, topic, body }) => {
  return fetchThenJson('api/support/feedback', optionsWithPostBody({ email, topic, name, body }))
}

export const fetchUserInstalledPackages = async () => {
  return fetchThenJson('api/user/get-installed-packages', optionsGetRequest())
}

export const fetchDonationInfo = async () => {
  return fetchThenJson('api/user/get-donation-info', optionsGetRequest())
}

export const resume = async () => {
  return fetchThenJson('api/user/resume', optionsGetRequest())
}

export const fetchUserSessionsInfo = async () => {
  return fetchThenJson('api/user/get-sessions', optionsGetRequest())
}

export const startNewCLIInstall = async () => {
  return fetchThenJson('api/user/new-install', optionsWithPostBody())
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
    body: JSON.stringify(body)
  }
}

const optionsWithPutBody = (body) => {
  return {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'x-requested-with': 'XmlHttpRequest'
    },
    body: JSON.stringify(body)
  }
}

const optionsDeleteRequest = () => {
  return {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'x-requested-with': 'XmlHttpRequest'
    }
  }
}

const optionsGetRequest = () => {
  return {
    method: 'GET'
  }
}
