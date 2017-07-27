'use strict';

var app = app || {};

(function (module) {
  let bioView = {};

  bioView.showBioPage = function () {
    $('.tab-section').hide();
    $('#bioInfo').show();
  }

  bioView.initBioPage = function () {
    bioView.showBioPage();
    bioToHtml();

    function bioToHtml () {
      var $bio = $('#bioInfo');
      $bio.find('h1').text(app.bioData.name);
      $bio.find('img').attr('src', app.bioData.imageUrl);
      app.bioData.bio.map(function (data) {
        $bio.find('.bio').append('<p>' + data + '</p>');
      });
      app.bioData.jobHistory.map(function (data) {
        $bio.find('.work-history').append('<li>' + data + '</li>');
      });
      app.bioData.skills.map(function (data) {
        $bio.find('.job-skills').append('<li>' + data + '</li>');
      });
    }
  }


  module.bioView = bioView;
})(app);
