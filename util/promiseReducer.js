
export default (actionName) => {

  const { REQUEST, COMPLETE, ERROR } = createActions(actionName);

  return (state, action) => {

    if (action.type == REQUEST) {
      return { ...state, status: 'loading' };
    } else if (action.type == COMPLETE) {
      return { status: 'complete', data: action.payload };
    } else if (action.type == ERROR) {
      return { status: 'error', error: action.error, data: undefined }
    }

    if (!state) return { status: 'none', data: undefined };

    return state;
  }
}

export const createActions = (actionName) => ({
  REQUEST: `${actionName}/REQUEST`,
  COMPLETE: `${actionName}/COMPLETE`,
  ERROR: `${actionName}/ERROR`
})