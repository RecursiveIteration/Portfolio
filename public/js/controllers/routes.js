'use strict';

var app = app || {};

page('/', app.bioController);
page('/bio', app.bioController);
page('/projects', app.Project.loadProjects, app.projectsController);
page(
  '/projects/:projectName',
  app.Project.loadProjects,
  app.Project.selectSingleProject,
  app.projectsController
)

page();
