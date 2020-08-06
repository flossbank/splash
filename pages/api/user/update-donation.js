import got from '../../../client/fetch'

export default async (req, reply) => {
  const { amount, seeAds } = req.body
  try {
    const response = await got.put('user/donation', {
      json: { amount, seeAds },
      headers: req.headers
    })
    reply.status(response.statusCode).json(response.body)
  } catch (e) {
    console.error({ message: e.response.body, statusCode: e.response.statusCode })
    reply.status(e.response.statusCode || 500).send(e.response.body)
  }
}
