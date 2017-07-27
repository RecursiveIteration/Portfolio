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

  Project.loadProjects = function (callback) {
    $.getJSON('/data/projects.json')
    .then(function (data) {
      data.map((project) => Project.projects.push(new Project(project)));
    });
    $.ajax({
      url: '/github/user/repos',
      method: 'GET'
    }).then((data) => {
      console.log(data);
      callback();
    })
  };
  module.Project = Project;
})(app);
