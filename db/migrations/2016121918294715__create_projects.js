'use strict';

const Nodal = require('nodal');

class CreateProjects extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016121918294715;
  }

  up() {

    return [
      this.createTable("projects", [{"name":"name","type":"string"},{"name":"contact","type":"string"},{"name":"list","type":"string"},{"name":"created_by","type":"string"},{"name":"billing","type":"json"},{"name":"due_date","type":"datetime"},{"name":"manager","type":"string"},{"name":"completed","type":"boolean"},{"name":"archived","type":"boolean"},{"name":"briefing","type":"text"},{"name":"start_date","type":"datetime"}])
    ];

  }

  down() {

    return [
      this.dropTable("projects")
    ];

  }

}

module.exports = CreateProjects;
