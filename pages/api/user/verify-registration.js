import got from '../../../api/fetch'

export default async (req, reply) => {
  const { email, recaptchaResponse, token } = req.body
  try {
    const response = await got.post('user/verify-registration', {
      json: { email, recaptchaResponse, token }
    })
    const headers = response.headers
    if (headers && headers['set-cookie']) {
      reply.setHeader('set-cookie', headers['set-cookie'])
    }
    reply.status(response.statusCode).json(response.body)
  } catch (e) {
    console.error({ email, message: e.response.body, statusCode: e.response.statusCode })
    reply.status(e.response.statusCode || 500).send(e.response.body)
  }
}
