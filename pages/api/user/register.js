import got from '../../../client/fetch'

export default async (req, reply) => {
  const { email, referralCode } = req.body
  try {
    const response = await got.post('user/register', {
      json: { email, referralCode },
      headers: req.headers
    })
    reply.status(response.statusCode).json(response.body)
  } catch (e) {
    console.error({ email, message: e.response.body, statusCode: e.response.statusCode })
    reply.status(e.response.statusCode || 500).send(e.response.body)
  }
}
