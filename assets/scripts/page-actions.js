'use strict';

const myApp = require('./my-app');


let pageCreate = function(e) {
  e.preventDefault();
  // console.log(e);
  let formData = new FormData(e.target);
  $.ajax({
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
    url: myApp.BASE_URL + '/pages',
    method: 'POST',
    contentType: false,
    processData: false,
    data: formData,
  }).done(function(data) {
    console.log(data);
    $('#create-page-modal').modal('hide');
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

let displayPages = function(response) {
  let pages = response.pages;
  let pagesTemplate = require('../handlebars/directory-pages.handlebars');
  $('.pages-collection').html(pagesTemplate({pages}));
};

let pageIndex = function () {
  $.ajax({
    url: myApp.BASE_URL + '/pages',
    method: 'GET',
    dataType: 'json',
  }).done(function(pages) {
    console.log(pages);
    displayPages(pages);
  }).fail(function(jqxhr) {
    console.log(jqxhr);
  });
};

let pageShow = function(e) {
  e.preventDefault();
  $.ajax({
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
    url: myApp.BASE_URL + '/pages/' + $(e.target).attr("data-page-id"),
    method: 'GET',
    dataType: 'json',
  }).done(function(page){
    console.log(page);
  }).fail(function(jqxhr) {
    console.log(jqxhr);
  });
};


module.exports = {
  pageCreate,
  pageIndex,
  pageShow,
};
