'use strict';

var projects = [];

projectData.forEach(function(projectObj) {
  projects.push(new Project(projectObj));
});

projects.forEach(function(project) {
  $('#projects').append(project.render());
});


$(function () {
  $('#hamburger').on('mouseover click', displayMenu);
});

function displayMenu () {
  $('nav ul').show();
}

//create a Project object
function Project (projectObj) {
  this.title = projectObj.title;
  this.githubUrl = projectObj.githubUrl;
  this.deploymentUrl = projectObj.deploymentUrl;
  this.imageUrl = projectObj.imageUrl;
  this.synopsis = projectObj.synopsis;
}

Project.prototype.render = function () {
  var $article = $('.template').clone();
  $article.show();
  $article.find('h1').text = this.title;
  $article.find('a:nth-of-type(1)').prop('href', this.githubUrl);
  $article.find('a:nth-of-type(2)').prop('href', this.deploymentUrl);
  $article.find('p').text = this.synopsis;
};
