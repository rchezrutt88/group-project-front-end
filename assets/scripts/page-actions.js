'use strict';

const myApp = require('./my-app');

const entryActions = require('./entry-actions.js');
const pageSwitch = require('./switch-pages');

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

let pageUserIndex = function () {
  $.ajax({
    url: myApp.BASE_URL + '/pages/user/' + myApp.user._id,
    method: 'GET',
    dataType: 'json',
  }).done(function(pages) {
    console.log(pages);
    displayPages(pages);
  }).fail(function(jqxhr) {
    console.log(jqxhr);
  });
};

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
    pageUserIndex();
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

let displayEntries = function(response) {
  let entries = response.pages._entries;
  let entryListing = require('../handlebars/show-entries.handlebars');
  $('.display-entries').empty();
  $('.display-entries').prepend(entryListing({
    entries
  }));
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
    myApp.page = page;
    console.log(page);
    pageSwitch.page3Handler();
    displayEntries(page);
  }).fail(function(jqxhr) {
    console.log(jqxhr);
  });
};

//DELETE BUTTON
let deletePage = function (event) {
  console.log($(event.target).attr("data-delete-page"));
  event.preventDefault();
  $.ajax({
    url: myApp.BASE_URL + '/pages/' + $(event.target).attr("data-delete-page"),
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
  }).done(function() {
    console.log("Successfully deleted page.");
    pageIndex();
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
};


module.exports = {
  pageCreate,
  deletePage,
  pageIndex,
  pageUserIndex,
  pageShow,
};
