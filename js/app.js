'use strict';

var projects = [];

//create a Project object
function Project (projectObj) {
  this.title = projectObj.title;
  this.githubUrl = projectObj.githubUrl;
  this.deploymentUrl = projectObj.deploymentUrl;
  this.imageUrl = projectObj.imageUrl;
  this.synopsis = projectObj.synopsis;
}

Project.prototype.toHtml = function () {
  var $article = $('.template').clone();
  $article.removeClass('template');
  $article.find('h1').text(this.title);
  $article.find('img').attr('src', this.imageUrl);
  $article.find('a:nth-of-type(1)').prop('href', this.githubUrl);
  $article.find('a:nth-of-type(2)').prop('href', this.deploymentUrl);
  $article.find('p').text(this.synopsis);
  return $article;
};

function bioToHtml () {
  var $bio = $('#bioInfo');
  $bio.find('h2').text(bioData.name);
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

projectData.forEach(function(projectObj) {
  projects.push(new Project(projectObj));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});
