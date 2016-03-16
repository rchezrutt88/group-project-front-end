'use strict';

let page1Handler = function () {
  $('#page1').show();
  $('#page2').hide();
};

let page2Handler = function () {
  $('#page2').show();
  $('#page1').hide();
};

let page3Handler = function () {
  $('#page3').show();
  $('#page2').hide();
  $('#text-editor').hide();
};

let page2from3 = function() {
  $('#page2').show();
  $('#page3').hide();
};


module.exports = {
  page2Handler,
  page1Handler,
  page3Handler,
  page2from3,
};
