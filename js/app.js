'use strict';

$(function () {
  $('#hamburger').on('mouseover click', displayMenu);
});

function displayMenu () {
  $('nav ul').show();
}

//create a Project object
function Project (title, githubURL, synopsis, deploymentURL) {
  this.title = title;
  this.githubURL = githubURL;
  this.synopsis = synopsis;
  this.deploymentURL = deploymentURL;
}

Project.prototype.render = function () {
  //Create Project display in DOM
};
