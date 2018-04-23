// import createSelector from 'reselect'
import _ from 'lodash'

export const getLinesById = (state) => _.keyBy(state.lines, x => x.id);

export const getLineStatusById = (state) => {
  if (!state.lineStatus.data) return {};

  const linesById = getLinesById(state);
  const statusByApiKey = _.keyBy(state.lineStatus.data, x => x.id);
  const statusById = _.mapValues(linesById, x => statusByApiKey[x.apiKey]);
  return statusById;
}



export const getLineOkayById = (state) => {

  const linesById = _.keyBy(state.lines, x => x.id);

  if (!state.lineStatus.data) {
    return undefined
  }

  const statusById = getLineStatusById(state)

  const isLineStatusOkayForLine = (line) => {
    const statuses = statusById[line.id].lineStatuses;
    return statuses.every(x => x.statusSeverity == 10)
  }

  const isOkayByLineId = _.mapValues(linesById, isLineStatusOkayForLine);
  return isOkayByLineId;
}