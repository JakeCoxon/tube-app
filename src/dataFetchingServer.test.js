// import React from 'react';
// import App from './App';

// import renderer from 'react-test-renderer';

import createDataFetchingService from 'tube-app/src/dataFetchingService.js'
import { APP_START, ERROR_MESSAGE} from 'tube-app/src/appActions.js'
import { LINE_STATUS_REQUEST, LINE_STATUS_COMPLETE, LINE_STATUS_ERROR } from 'tube-app/src/lineStatus/lineStatusActions.js'

it('dispatches when app starts', () => {
  const service = createDataFetchingService({ });
  const dispatch = jest.fn();
  service[APP_START]({}, dispatch, {})
  expect(dispatch).toBeCalledWith({ type: LINE_STATUS_REQUEST });
});

it('calls apiCall and completes line status with the payload', async () => {
  const promise = Promise.resolve({ hello: 123 });
  const apiCall = () => promise;
  const service = createDataFetchingService({ apiCall });
  const dispatch = jest.fn();
  service[LINE_STATUS_REQUEST]({}, dispatch, {})
  expect.assertions(1);
  await promise;
  expect(dispatch).toBeCalledWith({ type: LINE_STATUS_COMPLETE, payload: { hello: 123 } })
});

it('calls apiCall and handles errors', async () => {
  const promise = Promise.reject({ hello: 123 });
  const apiCall = () => promise;
  const service = createDataFetchingService({ apiCall });
  const dispatch = jest.fn();
  service[LINE_STATUS_REQUEST]({}, dispatch, {})
  expect.assertions(2);
  try {
    await promise;
  } catch(ex) {
    expect(dispatch).toBeCalledWith({ type: ERROR_MESSAGE, payload: expect.any(String) });
    expect(dispatch).toBeCalledWith({ type: LINE_STATUS_ERROR, error: { hello: 123 } })
  }
});

it("doesn't call apiCall again until the promise has resolved", async () => {
  let resolve;
  const promise = new Promise((r) => { resolve = r });
  const apiCall = jest.fn().mockReturnValue(promise);
  const service = createDataFetchingService({ apiCall });
  const dispatch = jest.fn();

  service[LINE_STATUS_REQUEST]({}, dispatch, {});
  expect(apiCall).toHaveBeenCalledTimes(1);
  service[LINE_STATUS_REQUEST]({}, dispatch, {});
  expect(apiCall).toHaveBeenCalledTimes(1);

  resolve();
  await promise;

  service[LINE_STATUS_REQUEST]({}, dispatch, {});
  expect(apiCall).toHaveBeenCalledTimes(2);
  
});
