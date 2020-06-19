/* global jest, test, beforeAll, afterEach, afterAll, expect */
import React from 'react'
import { mockNextUseRouter, render, screen, waitForElementToBeRemoved } from '../../_setup'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import VerifyHumanity from '../../../components/verify/verify_humanity'

const server = setupServer()

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

// stub verify_humanity's imported react-recaptcha component to simply call the provided verify handler
jest.mock('react-recaptcha', () => function MockRecaptcha (props) {
  props.verifyCallback('recaptcha-response')
  return (<></>)
})

test('calls API with email, token, and recaptcha response', async () => {
  mockNextUseRouter({
    query: {
      e: '1lld9b0jk0zfbjwchalyotuill30q5',
      token: 'tokey'
    }
  })
  server.use(
    rest.post('https://api.flossbank.com/user/verify-registration', (req, res, ctx) => {
      expect(req.body).toStrictEqual({
        email: 'admin@flossbank.com',
        token: 'tokey',
        recaptchaResponse: 'recaptcha-response'
      })
      return res(ctx.json({ success: true }))
    })
  )
  render(<VerifyHumanity />)

  await waitForElementToBeRemoved(() => screen.getByText(/Verifying email/))
})
