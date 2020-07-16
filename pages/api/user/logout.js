import got from '../../../client/fetch'

export default async (req, reply) => {
  try {
    const response = await got.post('user/logout', {
      json: {},
      headers: { cookie: req.headers.cookie }
    })
    const headers = response.headers
    if (headers && headers['set-cookie']) {
      reply.setHeader('set-cookie', headers['set-cookie'])
    }
    reply.status(response.statusCode).json(response.body)
  } catch (e) {
    console.error({ message: e.response.body, statusCode: e.response.statusCode })
    reply.status(e.response.statusCode || 500).send(e.response.body)
  }
}
