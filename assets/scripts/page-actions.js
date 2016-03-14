'use strict';

const myApp = require('./user-actions.js').myApp;

let pageCreate = function(e) {
  e.preventDefault();
  let formData = new FormData(e.target);
  $.ajax({
    url: myApp.BASE_URL + '/pages',
    method: 'POST',
    contentType: false,
    processData: false,
    data: formData,
  }).done(function(data) {
    console.log(data);
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};


module.exports = {
  pageCreate
};
