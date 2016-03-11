'use strict';

const myApp = {
  BASE_URL: 'http://localhost:3000',
};

$('#sign-up').on('submit', function(e) {



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
  }).fail(function(jqxhr) {
    console.error(jqxhr);
  });
 };
});


module.exports = {
  signUp,
};
