import { createActions } from 'tube-app/util/promiseReducer.js'

const { REQUEST, COMPLETE, ERROR } = createActions("lineStatus");

export const LINE_STATUS_REQUEST = REQUEST;
export const LINE_STATUS_COMPLETE = COMPLETE;
export const LINE_STATUS_ERROR = ERROR;