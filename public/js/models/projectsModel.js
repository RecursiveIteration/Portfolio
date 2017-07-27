'use strict';

var app = app || {};

(function (module) {
  function Project (projectObj) {
    this.title = projectObj.title;
    this.githubUrl = projectObj.githubUrl;
    this.deploymentUrl = projectObj.deploymentUrl;
    this.imageUrl = projectObj.imageUrl;
    this.synopsis = projectObj.synopsis;
  }

  Project.projects = [];

  Project.loadProjects = function () {
    $.getJSON('/data/projects.json').then(function(data) {
      data.map((project) => Project.projects.push(new Project(project)));
    })
  };
  module.Project = Project;
})(app);
