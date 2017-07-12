'use strict';

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
  //Create Project display in DOM
};
