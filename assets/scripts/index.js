'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

const myApp = {
  BASE_URL: 'https://localhost:3000/',
};

const userActions = require('./user-actions.js');
const entry = require('./entry-actions.js');

$(document).ready(() => {
  $('#sign-up').on('submit', userActions.signUp);
  $('#sign-in').on('submit', userActions.signIn);
  $('#sign-out').on('submit', userActions.signOut);
  $('#change-password').on('submit', userActions.changePassword);
  $('#sidebar').hide();
  $('#blog-entry').on('submit', entry.createEntry);
});
