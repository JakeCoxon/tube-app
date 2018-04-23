import promiseReducer, { createActions } from 'tube-app/util/promiseReducer.js'

it('merges the state in', () => {
  const reducer = promiseReducer("ACTION123")
  const { REQUEST, COMPLETE, ERROR } = createActions("ACTION123")

  expect(
    reducer({ data: "old-data-123123" }, { type: REQUEST })
  ).toEqual({ data: "old-data-123123", status: 'loading' })

  expect(
    reducer({ }, { type: COMPLETE, payload: "data123123" })
  ).toEqual({ status: 'complete', data: "data123123" })

  expect(
    reducer({ }, { type: ERROR, error: "error404" })
  ).toEqual({ status: 'error', error: "error404" })
});