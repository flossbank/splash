import got from '../../../api/fetch'

export default async (req, reply) => {
  const { email } = req.body
  try {
    const response = await got.post('user/request-login', {
      json: { email }
    })
    reply.status(response.statusCode).json(response.body)
  } catch (e) {
    console.error({ email, message: e.response.body, statusCode: e.response.statusCode })
    reply.status(e.response.statusCode || 500).send(e.response.body)
  }
}

