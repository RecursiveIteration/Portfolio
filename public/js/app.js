'use strict';
var app = {};

(function (module) {
  //create a Project object
  function Project (projectObj) {
    this.title = projectObj.title;
    this.githubUrl = projectObj.githubUrl;
    this.deploymentUrl = projectObj.deploymentUrl;
    this.imageUrl = projectObj.imageUrl;
    this.synopsis = projectObj.synopsis;
  }

  Project.projects = [];

  Project.prototype.toHtml = function () {
    var projectTemplate = $('#handlebars-project-template').html();
    var projectTemplateCompiler = Handlebars.compile(projectTemplate);
    var compiledProject = projectTemplateCompiler(this);
    $('#projects').append(compiledProject);
  };

  Project.fetchAll = function () {
    $.getJSON('/data/projects.json').then(function(data) {
      data.forEach(function (project) {
        Project.projects.push(new Project(project));
      });
      displayProjects();
    });
  };

  function bioToHtml () {
    var $bio = $('#bioInfo');
    $bio.find('h1').text(bioData.name);
    $bio.find('img').attr('src', bioData.imageUrl);
    bioData.bio.forEach(function (data) {
      $bio.find('.bio').append('<p>' + data + '</p>');
    });
    bioData.jobHistory.forEach(function (data) {
      $bio.find('.work-history').append('<li>' + data + '</li>');
    });
    bioData.skills.forEach(function (data) {
      $bio.find('.job-skills').append('<li>' + data + '</li>');
    });
  }

  bioToHtml();

  function displayProjects() {
    Project.projects.forEach(function(project) {
      $('#projects').append(project.toHtml());
    });
  }
  module.Project = Project;
  return module;
})(app)
