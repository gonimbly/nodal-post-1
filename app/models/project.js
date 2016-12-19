'use strict';

const Nodal = require('nodal');

class Project extends Nodal.Model {}

Project.setDatabase(Nodal.require('db/main.js'));
Project.setSchema(Nodal.my.Schema.models.Project);

module.exports = Project;
