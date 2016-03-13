'use strict';

const myApp = {
  BASE_URL: 'http://localhost:3000',
};

let signUp = function(e) {
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
    signIn(e);
    $('#sign-up-modal').model('hide');
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

let signIn = function(e) {
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
    myApp.user = data.user;
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
   $('#change-password-modal').modal('hide');
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
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
};
