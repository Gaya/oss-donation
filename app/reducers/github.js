// @flow

import { combineReducers } from 'redux';

const error = (state: string = '', action): string => {
  switch (action.type) {
    case 'GITHUB_MATCHED':
      return '';
    case 'GITHUB_ERROR':
      return action.error;
    default:
      return state;
  }
};

const username = (state: string = '', action): string => {
  switch (action.type) {
    case 'GITHUB_MATCHED':
      return action.username;
    case 'UPLOAD_FILE':
    case 'GITHUB_ERROR':
      return '';
    default:
      return state;
  }
};

const repository = (state: string = '', action): string => {
  switch (action.type) {
    case 'GITHUB_MATCHED':
      return action.repository;
    case 'UPLOAD_FILE':
    case 'GITHUB_ERROR':
      return '';
    default:
      return state;
  }
};

const loadingMsg = (state: string = '', action): string => {
  switch (action.type) {
    case 'GITHUB_ERROR':
    case 'RECEIVE_RESULTS':
      return '';
    case 'GITHUB_SCAN_REPOSITORY':
      return `Reading ${action.username}/${action.repository}`;
    case 'GITHUB_SEND_JSON':
      return 'Processing package.json file';
    default:
      return state;
  }
};

const url = (state: string = '', action): string => {
  switch (action.type) {
    case 'UPLOAD_FILE':
      return '';
    case 'GITHUB_MATCHED':
      return `https://github.com/${action.username}/${action.repository}`;
    default:
      return state;
  }
};

export default combineReducers({
  error,
  username,
  repository,
  loadingMsg,
  url,
});
