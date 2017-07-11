'use strict';

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
