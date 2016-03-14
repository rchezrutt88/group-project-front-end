'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

const myApp = require('./my-app');

const userActions = require('./user-actions.js');
const entryActions = require('./entry-actions');
const page = require('./page-actions.js');

$(document).ready(() => {
  $('#sign-up').on('submit', userActions.signUp);
  $('#sign-in').on('submit', userActions.signIn);
  $('#sign-out').on('submit', userActions.signOut);
  $('.page2-sign-out').on('click', userActions.signOut);
  $('#change-password').on('submit', userActions.changePassword);
  $('#create-page-modal').on('submit', page.pageCreate);
  $('#entry-view').on('submit', entryActions.createEntry);
  $('#page2').hide();
  $('#sidebar').hide();
  $('#blog-entry').on('submit', entryActions.createEntry);
});
