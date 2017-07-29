'use strict';

var app = app || {};

(function (module) {
  function Project (projectObj) {
    this.title = projectObj.title;
    this.githubName = projectObj.githubName;
    this.imageUrl = projectObj.imageUrl;
    this.synopsis = projectObj.synopsis;
  }

  Project.projects = [];

  Project.loadProjects = function (ctx, next) {
    Project.projects = []; // empty the projects array
    $.getJSON('/data/projects.json').then(function (data) {
      data.map((project) => Project.projects.push(new Project(project)));
      loadProjectsFromGithub(ctx, next);
    });
  };

  function loadProjectsFromGithub (ctx, next) {
    $.ajax({
      url: '/github/user/repos',
      method: 'GET'
    })
    .then(data => {
      Project.projects.map(proj => {
        let currentProject = data.filter(p => p.name === proj.githubName)[0];
        proj.githubUrl = currentProject.html_url;
        proj.created = new Date(currentProject.created_at).toDateString();
      });
      next();
    })
  }

  Project.selectSingleProject = function (ctx, next) {
    Project.projects = Project.projects.filter((project) =>
      project.githubName === ctx.params.projectName);
    next();
  }

  module.Project = Project;
})(app);
