'use strict';

function displaySection () {
  var content = '#' + $(this).data('content');
  $('.tab-section').hide();
  $(content).fadeIn(250);
}

//event handler for tab clicks
$(function () {
  $('.tab').on('click', displaySection);
});
