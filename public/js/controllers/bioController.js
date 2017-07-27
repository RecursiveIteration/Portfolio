'use strict';

var app = app || {};

(function (module) {

  module.bioController = function () {
    if (!app.bioData.name) {  // check to see if bio data has not been loaded
      app.bioData.loadBio(app.bioView.initBioPage);
    } else {
      app.bioView.showBioPage(); // just show it again, if it's already been loaded
    }
  }
})(app);
