'use strict';

var app = app || {};

(function (module) {
  let bioData = {};

  bioData.loadBio = function (callback) {
    $.getJSON('/data/bioData.json').then(function (data) {
      Object.keys(data).map(key => bioData[key] = data[key]);
      callback();
    })
  };

  module.bioData = bioData;
})(app);
