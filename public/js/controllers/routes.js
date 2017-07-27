'use strict';

var app = app || {};

page('/', app.bioController);
page('/bio', app.bioController);
page('/projects', app.projectsController);

page();
