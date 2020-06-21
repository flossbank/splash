/* global jest, test, beforeAll, afterEach, afterAll, expect */
import React from 'react'
import { mockNextUseRouter, render, screen, waitFor, fireEvent } from '../_setup'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import Verify from '../../pages/verify'

const server = setupServer()

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

// stub verify_humanity's imported react-recaptcha component to simply call the provided verify handler
jest.mock('react-recaptcha', () => function MockRecaptcha (props) {
  props.onloadCallback()
  return (
    <button onClick={() => props.verifyCallback('recaptcha-response')}>Solve Recaptcha</button>
  )
})

test('calls API with email, token, and recaptcha response', async () => {
  let apiCalled = false
  const router = mockNextUseRouter({
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
      apiCalled = true
      return res(ctx.json({ success: true }))
    })
  )
  render(<Verify />)

  await waitFor(() => screen.findByText('Solve Recaptcha'))
  fireEvent.click(screen.getByText('Solve Recaptcha'))
  await waitFor(() => expect(router.push).toHaveBeenCalledTimes(1))

  expect(apiCalled).toBeTruthy()
})

test('short circuits when no query params are present', async () => {
  let apiCalled = false
  const router = mockNextUseRouter({ query: {} })
  server.use(
    rest.post('https://api.flossbank.com/user/verify-registration', (req, res, ctx) => {
      apiCalled = true
      return res(ctx.json({ success: true }))
    })
  )
  render(<Verify />)

  waitFor(() => screen.getByText(/Failure/))
  expect(apiCalled).toBeFalsy()
  expect(router.push).toBeCalledTimes(0)
})
