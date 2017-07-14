'use strict';

function displaySection () {
  var content = '#' + $(this).data('content');
  $('.tab-section').hide();
  $(content).fadeIn(250);
}

$(function () {
  $('.tab').on('click', displaySection);
});
