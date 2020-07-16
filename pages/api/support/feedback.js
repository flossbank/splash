import got from '../../../api/fetch'

export default async (req, reply) => {
  const { email, name, topic, body } = req.body
  try {
    const response = await got.post('support/feedback', {
      json: { email, name, topic, body }
    })
    reply.status(response.statusCode).json(response.body)
  } catch (e) {
    console.error({ email, message: e.response.body, statusCode: e.response.statusCode })
    reply.status(e.response.statusCode || 500).send(e.response.body)
  }
}
