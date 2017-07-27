'use strict';

var app = app || {};

(function (module) {

  module.projectsController = function () {
    if (app.Project.projects.length === 0) {  // check to see if project data has not been loaded
      app.Project.loadProjects(app.projectsView.initProjectsPage);
    } else {
      app.projectsView.showProjectsPage(); // just show it again, if it's already been loaded
    }
  }

})(app);
