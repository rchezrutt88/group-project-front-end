'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

const myApp = require('./my-app');

const userActions = require('./user-actions.js');
const entryActions = require('./entry-actions');
const pageActions = require('./page-actions.js');

$(document).ready(() => {
  $('#sign-up').on('submit', function(e) {
    userActions.signUp(e, userActions.signIn, pageActions.pageUserIndex);
  });

  //TODO refactor to use promise?
  $('#sign-in').on('submit', function(e) {
    userActions.signIn(e, pageActions.pageUserIndex);
    // page.pageUserIndex();
  });
  $('#sign-out-button').on('click', userActions.signOut);
  $('.page2-sign-out').on('click', userActions.signOut);
  $('#change-password').on('submit', userActions.changePassword);
  $('#create-page-modal').on('submit', pageActions.pageCreate);
  $('#entry-view').on('submit', entryActions.createEntry);
  $('#blog-entry').on('submit', entryActions.createEntry);
  $('.pages-collection').on('click', '.user-pages', pageActions.pageShow);
  $('.pages-collection').on('click', '.close-page-button', pageActions.deletePage);
  $('#page2').hide();
  $('#page3').hide();
  $('#create-entry').on('click', function(e) {
    e.preventDefault();
    $('#text-editor').show();
  });
  $('#my-pages').on('click', function() {
    pageActions.page2from3();
  });
  // $('#text-editor-modal').on('submit', entryActions.createEntry);
});
