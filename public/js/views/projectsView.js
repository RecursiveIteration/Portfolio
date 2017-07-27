'use strict';

var app = app || {};

(function (module) {
  let projectsView = {};

  projectsView.showProjectsPage = function () {
    $('.tab-section').hide();
    $('#projects').show();
  };

  projectsView.initProjectsPage = function () {

    projectsView.showProjectsPage();
    projectsToHtml();

    function projectsToHtml () {
      var projectTemplate = $('#handlebars-project-template').html();
      var projectTemplateCompiler = Handlebars.compile(projectTemplate);
      app.Project.projects.map((project) =>
        $('#projects').append(projectTemplateCompiler(project))
      )
    }
  }
  module.projectsView = projectsView;
})(app);
