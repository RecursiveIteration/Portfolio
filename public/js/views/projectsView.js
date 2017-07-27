'use strict';

var app = app || {};

(function (module) {
  let projectsView = {};

  projectsView.showProjects = function () {
    $('.tab-section').hide();
    $('#projects').show();
  };

  projectsView.initProjectsView = function () {

    projectsView.showProjects();
    projectsToHtml();

    function projectsToHtml () {
      console.log("trying to fill out project template!")
      var projectTemplate = $('#handlebars-project-template').html();
      var projectTemplateCompiler = Handlebars.compile(projectTemplate);
      var compiledProject = projectTemplateCompiler(app.Project.projects);
      $('#projects').append(compiledProject);
    }
  }
  module.projectsView = projectsView;
})(app);
