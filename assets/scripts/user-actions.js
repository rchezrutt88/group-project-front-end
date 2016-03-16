'use strict';

const myApp = require('./my-app')

let page2Handler = function () {
  $('#page2').show();
  $('#page1').hide();
};

let page1Handler = function () {
  $('#page1').show();
  $('#page2').hide();
};

let signUp = function(e, signIn, populatePages) {
  e.preventDefault();
  let formData = new FormData(e.target);
  $.ajax({
    url: myApp.BASE_URL + '/sign-up',
    method: 'POST',
    contentType: false,
    processData: false,
    data: formData,
  }).done(function(data) {
    console.log(data);
    $('#sign-up-modal').modal('hide');
    signIn(e, populatePages);
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

let signIn = function(e, populatePages) {
  e.preventDefault();
  let formData = new FormData(e.target);
  $.ajax({
    url: myApp.BASE_URL + '/sign-in',
    method: 'POST',
    contentType: false,
    processData: false,
    data: formData,
  }).done(function(data) {
    console.log(data);
    $('#sign-in-modal').modal('hide');
    page2Handler();
    $('#sign-out-button').show();
    $('#change-password-button').show();
    console.log(data.user);
    myApp.user = data.user;
    populatePages();
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

let changePassword = function(e) {
  e.preventDefault();
  if (!myApp.user) {
    throw ('No user signed in');
  }
  let formData = new FormData(e.target);
  $.ajax({
    url: myApp.BASE_URL + '/change-password/' + myApp.user._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
    contentType: false,
    processData: false,
    data: formData,
  }).done(function(data) {
    console.log(data);
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

let signOut = function(e) {
  e.preventDefault();
  if (!myApp.user) {
    throw('No user signed in');
  }
  $.ajax({
    url: myApp.BASE_URL + '/sign-out/' + myApp.user._id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
  }).done(function() {
    console.log('You have logged out');
    myApp.user = undefined;
    myApp.page = undefined;
    page1Handler();
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
};
