import got from '../../../client/fetch'

export default async (req, reply) => {
  const { email, token } = req.body
  try {
    const response = await got.post('user/complete-login', {
      json: { email, token }
    })
    const headers = response.headers
    if (headers && headers['set-cookie']) {
      reply.setHeader('set-cookie', headers['set-cookie'])
    }
    reply.status(response.statusCode).json(response.body)
  } catch (e) {
    console.error({ email, token, message: e.response.body, statusCode: e.response.statusCode })
    reply.status(e.response.statusCode || 500).send(e.response.body)
  }
}
