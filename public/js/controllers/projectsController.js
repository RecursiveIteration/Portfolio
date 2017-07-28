'use strict';

var app = app || {};

(function (module) {

  module.projectsController = function () {
    app.Project.loadProjects(app.projectsView.initProjectsPage);
  }

})(app);
